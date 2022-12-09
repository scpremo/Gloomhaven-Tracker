function lessorequal(item1, item2) {
    if (item1.name && item1.initiative && item2.name && item2.initiative) {
        if (item1.initiative < item2.initiative)
            return true
        else if (item1.initiative == item2.initiative) {
            if (item1.name <= item2.name)
                return true
        }
    }
    return false
}
const Elite = "elite"
const Normal = "normal"

const CURSE = {
    "image": "/images/attack-modifiers/monster-mod/gh-am-mm-01.png",
    "shuffle": false,
    "remove": true
}
const BLESS = {
    "image": "/images/attack-modifiers/monster-mod/gh-am-pm-11.png",
    "shuffle": false,
    "remove": true
}

//var level=levelHtml[0].dataset.level

////Merge sort function comes from https://stackabuse.com/merge-sort-in-javascript/ 
/// merge sort was chosen becasue it is a really quick stable sort as stability is needed in this sort operation.
function merge(left, right) {
    let arr = new Array()
    while (left.length && right.length) {
        if (lessorequal(left[0], right[0]))
            arr.push(left.shift())
        else
            arr.push(right.shift())
    }
    return [...arr, ...left, ...right]
}
function mergeSort(array) {
    const half = array.length / 2
    if (array.length < 2) {
        return array
    }
    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}
////// end of merge sort function
let Card = class {
    constructor(card) {
        this.cardFront = card.image
        this.shuffle = card.shuffle
        this.initiative = card.initiative
        this.remove = false
        if (card.remove) {
            this.remove = true
        }
    }
    getCardFront() {
        return this.cardFront
    }
    cardShuffle() {
        return this.shuffle
    }
    getInitiative() {
        return this.initiative
    }
}
const DISCARD = new Card({
    "image": "/images/discard.png",
    "shuffle": false,
    "remove": false
})
let Deck = class {
    constructor(cards, cardBack) {
        this.size = cards.length
        this.deck = new Array(this.size)

        for (let index = 0; index < this.size; index++) {
            var card = new Card(cards[index])
            this.deck[index] = (card)
        }
        this.cardBack = cardBack
        this.recentCard = DISCARD
        this.index = 0
    }
    removeCardAt(index) {
        if (index > 0) {
            if (this.deck[--index].remove) {
                this.deck.splice(index, 1)
                this.index--;
                this.size--;
            }
        }

    }
    draw() {
        this.removeCardAt(this.index)
        if(this.index+1>this.size)
            this.shuffle()
        this.recentCard = this.deck[this.index]
        this.index = this.index + 1
        return this.recentCard
    }

    shuffle() {
        this.removeCardAt(this.index)
        var location = this.size

        while (location > 0) {
            var ranIndex = Math.floor(Math.random() * location);
            location--
            var save = this.deck[location]
            this.deck[location] = this.deck[ranIndex]
            this.deck[ranIndex] = save;
        }
        this.index = 0
        this.recentCard = DISCARD

    }
    PartialShuffle() {
        var location = this.size
        while (location > this.index) {
            var ranIndex = Math.floor(Math.random() * (location - this.index)) + this.index;
            location--
            var save = this.deck[location]
            this.deck[location] = this.deck[ranIndex]
            this.deck[ranIndex] = save;
        }
        console.log("shuffle")
    }
    getRecentCard() {
        return this.recentCard
    }
    addCard(card) {
        this.deck.push(card)
        this.size++
        this.PartialShuffle()

    }

}
let healthTracker = class {
    constructor(health, type, playerCount, number,index, standee,name) {
        this.number = number+1
        this.type = type
        this.id=""+name+""+this.number
        if (type === Elite) {
            this.health = health.elite
            this.max = health.elite
        }
        else if (type === "boss") {
            this.health = health.boss * playerCount
            this.max = this.health
        }
        else {
            this.health = health.normal
            this.max = health.normal
        }
        var monsterTemplate=Handlebars.templates.monster({
            type:this.type,
            standee: standee,
            number: number+1,
            hp:this.health,
            id:this.id

          })
          this.monsterSection= document.getElementsByClassName("monster")[index]
          this.monsterSection.insertAdjacentHTML("beforeend", monsterTemplate)
          this.plusButton=document.getElementById("plus"+this.id)
          this.plusButton.addEventListener('click',this.increasHealth.bind(this))
          this.minusButton=document.getElementById("minus"+this.id)
          console.log(this.minusButton)
          this.minusButton.addEventListener('click',this.lowerHealth.bind(this))
    }
    lowerHealth() {
        this.health--
        if (this.health <= 0) {
            //delete stuff
            this.health = 0
        }
        var health=document.getElementById("hp"+this.id)
        health.textContent=this.health
    }
    increasHealth() {
        this.health++
        if (this.health > this.max) {
            this.health = this.max
        }
        var health=document.getElementById("hp"+this.id)
        console.log(health)
        health.textContent=this.health
    }
}
let Monster = class {
    constructor(monsterData, level, playerCount, index) {
        this.boss=monsterData.boss
        this.index=index
        this.name = monsterData.name
        this.playerCount = playerCount
        this.rotation = 90 * (level % 4)
        this.deck = new Deck(monsterData.deck, monsterData.cardBack)
        this.deck.shuffle()
        if (level > 3)
            this.statCard = monsterData.statBack
        else
            this.statCard = monsterData.statFront
        this.sleeve = monsterData.sleeve
        this.image = monsterData.image
        this.health = monsterData.health[level]
        this.maxCount = monsterData.maxCount
        this.discard = null
        this.monsters = new Array(this.maxCount)
        for (let index = 0; index < this.maxCount; index++) {
            this.monsters[index] = {
                filled: "false",
                monster: "null"
            }
        }
        this.currentCount = 0
        var monsterTemplate=Handlebars.templates.monsterInfo({
            statSheet: this.statCard,
            statCover: this.sleeve,
            cardBack: monsterData.cardBack,
            discard: DISCARD.cardFront
          })
        //console.log("monsterTemplate: "+ monsterTemplate)
        this.monsterSection= document.getElementById("monsters")
        this.monsterSection.insertAdjacentHTML("beforeend", monsterTemplate)
        //this.statCardRotate=document.getElementsByClassName("stat-img")
        this.normalButton= document.getElementsByClassName("add-monster")[this.index*2]
        this.normalButton.addEventListener('click',function(){
            this.newMonster("normal")
        }.bind(this))
        this.elteButton= document.getElementsByClassName("add-monster")[this.index*2+1]
        this.elteButton.addEventListener('click',function(){
            this.newMonster("elite")
        }.bind(this))
        
        //this.statCardRotate.style.transform = 'rotate(90deg)'

    }
    startRound() {
        if (this.currentCount != 0) {
            this.discard = this.deck.draw()
            console.log(this.discard)
            var discard=document.getElementsByClassName("attack-card-discard")[this.index]
            discard.src=this.discard.cardFront
            return this.discard
        }
    }
    endRound() {
        if (this.discard) {
            if (this.discard.cardShuffle() === 'true')
            {
                this.deck.shuffle()
                var discard=document.getElementsByClassName("attack-card-discard")[this.index]
                discard.src=DISCARD.cardFront
            }
            this.discard = null
        }
    }
    newMonster(type) {
        if (this.currentCount < this.maxCount) {
            var numb = Math.floor(Math.random() * this.maxCount)
            while (this.monsters[numb].filled === true) {
                var numb = Math.floor(Math.random() * this.maxCount)
            }
            if(this.boss)
                this.monsters[numb].monster = new healthTracker(this.health, "boss", this.playerCount, numb,this.index, this.image,this.name)
            else
                this.monsters[numb].monster = new healthTracker(this.health, type, this.playerCount, numb,this.index, this.image,this.name)
            this.monsters[numb].filled = true
            this.currentCount++

        }
        else {
            //display already at max
        }
    }
    deleteMonster(index) {
        delete this.monsters[index].monster
        this.monsters[index].monster = "null"
        this.monsters[index].filled = false
        this.currentCount--
    }
    getInitiative() {
        if (this.discard) {
            return this.discard.getInitiative()
        }
    }
    getMonsterCount() {
        return this.currentCount
    }
    getName() {
        return this.name
    }
    containsType(type) {
        for (let i = 0; i < this.maxCount; i++) {
            if (this.monsters[i].filled == true) {
                if (this.monsters[i].monster.type === type) {
                    return true
                }
            }
        }
        return false

    }
}
let levelControl = class {
    constructor(monsterData, level, playerCount, attackMods) {
        
        this.size = monsterData.length
        this.monsters = new Array(this.size)
        for (let index = 0; index < this.size; index++) {
            this.monsters[index] = new Monster(monsterData[index], level, playerCount,index)
        }
        this.attackMod = new Deck(attackMods.deck, attackMods.cardBack)
        this.attackMod.shuffle()
        this.initiativeList = new Array()
        this.roundCards
        this.curse = 10
        this.bless = 10
        this.discardPile= document.getElementById("am-drawn")
        this.discard= DISCARD
        this.discardPile.src=this.discard.cardFront
        this.drawButton= document.getElementById("am-draw")
        this.drawButton.addEventListener('click',this.drawMod.bind(this))
        this.curseButton= document.getElementById("am-curse")
        this.curseButton.addEventListener('click',this.addCurse.bind(this))
        this.blessButton= document.getElementById("am-bless")
        this.blessButton.addEventListener('click',this.addBless.bind(this))
        this.shuffleButton= document.getElementById("am-shuffle")
        this.shuffleButton.addEventListener('click',this.shuffleMod .bind(this))
        this.startButton= document.getElementById("round-start")
        this.startButton.addEventListener('click',this.startRound.bind(this))
        this.endButton= document.getElementById("round-end")
        this.endButton.addEventListener('click',this.endRound.bind(this))
        this.shuffle = false

    }
    shuffleMod()
    {
        this.attackMod.shuffle()
        this.discard= DISCARD
        this.discardPile.src=this.discard.cardFront
    }
    drawMod() {
        console.log(this)
        this.discard = this.attackMod.draw()
        if (this.discard.cardFront === "images/attack-modifiers/monster-mod/gh-am-mm-01.png") {
            this.curse++
        }
        else if (this.discard.cardFront === "images/attack-modifiers/monster-mod/gh-am-pm-11.png") {
            this.curse++
        }
        if (this.discard.cardShuffle())
            this.shuffle = true;
        console.log(this.discard)
        console.log(this.shuffle)
        this.discardPile= document.getElementById("am-drawn")
        this.discardPile.src=this.discard.cardFront
    }
    addCurse() {
        if (this.curse > 0) {
            this.attackMod.addCard(new Card(CURSE))
            this.curse--
        }
    }
    addBless() {
        if (this.bless > 0) {
            this.attackMod.addCard(new Card(BLESS))
            this.bless--
        }
    }
    startRound() {
        delete this.initiativeList
        this.initiativeList = new Array()
        for (let i = 0; i < this.size; i++) {
            if (this.monsters[i].getMonsterCount() > 0) {
                this.monsters[i].startRound()
                if (this.monsters[i].containsType(Elite)) {
                    var init = {
                        name: this.monsters[i].getName(),
                        initiative: this.monsters[i].getInitiative(),
                        elite: true
                    }
                    this.initiativeList.push(init)
                }
                if (this.monsters[i].containsType(Normal)) {
                    var init = {
                        name: this.monsters[i].getName(),
                        initiative: this.monsters[i].getInitiative(),
                        elite: false
                    }
                    this.initiativeList.push(init)
                }

            }
        }
        this.initiativeList = mergeSort(this.initiativeList)
    }
    endRound() {
        for (let i = 0; i < this.size; i++) {
            this.monsters[i].endRound()
        }
        if (this.shuffle) {
            this.attackMod.shuffle()
            this.discard= DISCARD
            this.discardPile.src=this.discard.cardFront
        }
    }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function getLevel() {
    var levelHtml="bad"
    await sleep(5);
    levelHtml=document.getElementById("level")
    return levelHtml
  }
var ready = false
async function loadData() {   
    level= await getLevel()
    level=level.getAttribute("data-level")
    console.log('/level/'+level)
    response = await fetch('/level/'+level);
    levelData = await response.json();
    console.log(levelData.monsters);
    returnStff=levelData
    return returnStff
    // response = await fetch('/data');
    // Data = await response.json();
    // return Data
}
sleep(50)
var levelData = loadData()
var Datra
levelData.then(function(levelData){
    Data=  levelData
})

var arr = new Array()
setTimeout(function () {
    // test code 
    console.log("starting tests")
    // arr.push(Data.banditGuard)
    // arr.push(Data.livingBones)
    // arr.push(Data.banditArcher)
    levelRem=document.getElementById("level")
    levelRem.remove()
    cat = new levelControl(Data.monsters, Data.scenarioLevel, Data.playerCount, Data.attackMods)
    
    // cat.monsters[0].newMonster(Elite)
    // cat.monsters[2].newMonster(Elite)
    // cat.monsters[1].newMonster(Elite)
    // cat.monsters[0].newMonster(Normal)
    // cat.monsters[2].newMonster(Normal)
    // cat.monsters[1].newMonster(Normal)
    // cat.monsters[0].newMonster(Normal)
    // cat.monsters[2].newMonster(Normal)
    // cat.monsters[1].newMonster(Normal)
    
}, 500);



