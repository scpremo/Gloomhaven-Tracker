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
const Elite = "Elite"
const Normal = "Normal"
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
let Deck = class {
    constructor(cards, cardBack) {
        this.size = cards.length
        this.deck = new Array(this.size)
        console.log(cards)
        for (let index = 0; index < this.size; index++) {
            var card = new Card(cards[index])
            this.deck[index] = (card)
        }
        this.cardBack = cardBack
        this.recentCard
        this.index = 0
        console.log(this.deck)
    }
    draw() {
        this.recentCard = this.deck[this.index]
        this.index = this.index + 1
        return this.recentCard
    }
    shuffle() {
        var location = this.size
        while (location > 0) {
            var ranIndex = Math.floor(Math.random() * location);
            location--
            var save = this.deck[location]
            this.deck[location] = this.deck[ranIndex]
            this.deck[ranIndex] = save;
        }
        this.index = 0

    }
    getRecentCard() {
        return this.recentCard
    }

}
let healthTracker = class {
    constructor(health, type, playerCount, number) {
        this.mumber = number
        this.type = type
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
    }
    lowerHealth() {
        this.health--
        if (this.health <= 0) {
            //delete stuff
            this.health = 0
        }
    }
    increasHealth() {
        this.health++
        if (this.health > this.max) {
            this.health = this.max
        }
    }
}
let Monster = class {
    constructor(monsterData, level, playerCount) {
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
    }
    startRound() {
        if (this.currentCount != 0) {
            this.discard = this.deck.draw()
            console.log(this.discard)
            return this.discard
        }
    }
    endRound() {
        if (this.discard) {
            if (this.discard.cardShuffle() === 'true')
                this.deck.shuffle()
            this.discard = null
        }
    }
    newMonster(type) {
        if (this.currentCount < this.maxCount) {
            var numb = Math.floor(Math.random() * this.maxCount)
            while (this.monsters[numb].filled === true) {
                var numb = Math.floor(Math.random() * this.maxCount)
            }
            this.monsters[numb].monster = new healthTracker(this.health, type, this.playerCount, numb)
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
            this.monsters[index] = new Monster(monsterData[index], level, playerCount)
        }
        this.attackMod = new Deck(attackMods.deck, attackMods.cardBack)
        this.attackMod.shuffle()
        this.initiativeList = new Array()
        this.roundCards
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
    }

}
var ready = false
async function loadData() {
    response = await fetch('/data');
    Data = await response.json();
    console.log(Data);
    return Data
}
var Data = loadData()
var arr = new Array()
setTimeout(function () {
    console.log(Data)
    console.log(Data.banditArcher)
    console.log("starting tests")
    arr.push(Data.banditGuard)
    arr.push(Data.livingBones)
    arr.push(Data.banditArcher)

    //TEST CODE REMOVE ONCE DONE
    cat = new levelControl(arr, 5, 6, Data.attackMods)
    cat.monsters[0].newMonster(Elite)
    cat.monsters[2].newMonster(Elite)
    cat.monsters[1].newMonster(Elite)
    cat.monsters[0].newMonster(Normal)
    cat.monsters[2].newMonster(Normal)
    cat.monsters[1].newMonster(Normal)
    cat.monsters[0].newMonster(Normal)
    cat.monsters[2].newMonster(Normal)
    cat.monsters[1].newMonster(Normal)
}, 500);



