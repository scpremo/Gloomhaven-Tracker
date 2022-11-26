
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
    getInitiative(){
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
            this.deck[index]=(card)
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
        this.index=0

    }
    getRecentCard() {
        return this.recentCard
    }

}
let healthTracker=class{
    constructor(health,type,playerCount,number){
        this.mumber=number
        this.type=type
        if(type==="elite")
        {
            this.health=health.elite
            this.max=health.elite
        }
        else if(type==="boss")
        {
            this.health=health.boss*playerCount
            this.max=this.health
        }
        else{
            this.health=health.normal
            this.max=health.normal
        }
    }
    lowerHealth(){
        this.health--
        if (this.health<=0)
        {
            //delete stuff
            this.health=0
        }
    }
    increasHealth(){
        this.health++
        if(this.health>this.max)
        {
            this.health=this.max
        }
    }
}
let Monster = class {
    constructor(monsterData, level,playerCount) {
        this.name = monsterData.name
        this.playerCount=playerCount
        this.rotation = 90 * (level % 4)
        this.deck = new Deck(monsterData.deck, monsterData.cardBack)
        this.deck.shuffle()
        if (level > 3)
            this.statCard = monsterData.statBack
        else
            this.statCard = monsterData.statFront
        this.sleeve = monsterData.sleeve
        this.image = monsterData.image
        this.health=monsterData.health[level]
        this.maxCount=monsterData.maxCount
        this.discard = null
        this.monsters = new Array(this.maxCount)
        for (let index = 0; index < this.maxCount; index++) {
            this.monsters[index]={
                filled: "false",
                monster: "null"                
            }
        }
        this.currentCount=0
    }
    startRound(){
        if (this.currentCount!=0)
        {
            this.discard=this.deck.draw()
            return this.discard
        }
    }
    endRound(){
        if(this.discard)
        {
            if(this.discard.cardShuffle()==='true')
                this.deck.shuffle()
            this.discard=null
        }
    }
    newMonster(type){
        if (this.currentCount<this.maxCount)
        {
            var numb=Math.floor(Math.random() * this.maxCount)
            while(this.monsters[numb].filled==='true'){
                var numb=Math.floor(Math.random() * this.maxCount)
            }
            this.monsters[numb].monster= new healthTracker(this.health, type, this.playerCount,numb)
            this.monsters[numb].filled="true"
            this.currentCount++
        }
        else{
            //display already at max
        }
    }
    deleteMonster(index)
    {
        delete this.monsters[index].monster
        this.monsters[index].monster="null"
        this.monsters[index].filled="false"        
    }
    getInitiative(){
        if(this.discard){
            return this.discard.getInitiative()
        }
    }
}
let levelControl = class{
    constructor(monsterData, level, playerCount, attackMods)
    {
        this.size=monsterData.length
        this.monsters= new Array(this.size)
        for( let index=0; index<this.size; index++)
        {
            this.monsters[index]= new Monster(monsterData[index], level, playerCount)
        }
        this.attackMod= new Deck(attackMods.deck,attackMods.cardBack)
        this.attackMod.shuffle()
        this.initiativeList
        this.roundCards
    }
    startRound(){
        
    }

}
console.log("starting tests")
var Data = {
    "attackMods": {
        "deck": [
            {
                "image": "images/attack-modifiers/monster/gh-am-m-01.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-02.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-03.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-04.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-05.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-06.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-07.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-08.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-09.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-10.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-11.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-12.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-13.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-14.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-15.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-16.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-17.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-18.png",
                "shuffle": "false"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-19.png",
                "shuffle": "true"
            },
            {
                "image": "images/attack-modifiers/monster/gh-am-m-20.png",
                "shuffle": "true"
            }
        ],
        "cardBack": "images/attack-modifiers/monster/gh-am-m-back.png"
    },
    "banditArcher": {
        "name": "Bandit Archer",
        "statFront": "images/monster-stat-cards/gh-bandit-archer-0.png",
        "statBack": "images/monster-stat-cards/gh-bandit-archer-4.png",
        "image": "images/monster-standees/Bandit-Archer.avif",
        "deck": [
            {
                "image": "images/monster-ability-cards/guard/gh-ma-ar-1.png",
                "shuffle": "false",
                "initiative": 16
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-ar-2.png",
                "shuffle": "false",
                "initiative": 31
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-ar-3.png",
                "shuffle": "false",
                "initiative": 32
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-ar-4.png",
                "shuffle": "false",
                "initiative": 44
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-ar-5.png",
                "shuffle": "false",
                "initiative": 56
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-ar-6.png",
                "shuffle": "true",
                "initiative": 69
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-ar-7.png",
                "shuffle": "false",
                "initiative": 14
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-ar-8.png",
                "shuffle": "true",
                "initiative": 29
            }
        ],
        "health": [
            {
                "normal": "4",
                "elite": "6"
            },
            {
                "normal": "5",
                "elite": "7"
            },
            {
                "normal": "6",
                "elite": "9"
            },
            {
                "normal": "6",
                "elite": "10"
            },
            {
                "normal": "8",
                "elite": "10"
            },
            {
                "normal": "10",
                "elite": "12"
            },
            {
                "normal": "10",
                "elite": "13"
            },
            {
                "normal": "13",
                "elite": "17"
            }
        ],
        "cardBack": "images/monster-ability-cards/guard/gh-ma-ar-back.png",
        "sleeve": "images/monster-stat-cards/gh-monster-stat-card-envelope-6.png",
        "maxCount": 6
    },
    "banditGuard": {
        "name": "Bandit Guard",
        "statFront": "images/monster-stat-cards/gh-bandit-guard-0.png",
        "statBack": "images/monster-stat-cards/gh-bandit-guard-4.png",
        "image": "images/monster-standees/Bandit-Guard.avif",
        "deck": [
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-1.png",
                "shuffle": "true",
                "initiative": 15
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-2.png",
                "shuffle": "false",
                "initiative": 30
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-3.png",
                "shuffle": "false",
                "initiative": 35
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-4.png",
                "shuffle": "false",
                "initiative": 50
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-5.png",
                "shuffle": "false",
                "initiative": 50
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-6.png",
                "shuffle": "false",
                "initiative": 70
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-7.png",
                "shuffle": "false",
                "initiative": 55
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-8.png",
                "shuffle": "true",
                "initiative": 15
            }
        ],
        "health": [
            {
                "normal": "5",
                "elite": "9"
            },
            {
                "normal": "6",
                "elite": "9"
            },
            {
                "normal": "6",
                "elite": "10"
            },
            {
                "normal": "9",
                "elite": "10"
            },
            {
                "normal": "10",
                "elite": "11"
            },
            {
                "normal": "11",
                "elite": "12"
            },
            {
                "normal": "14",
                "elite": "14"
            },
            {
                "normal": "16",
                "elite": "14"
            }
        ],
        "cardBack": "images/monster-ability-cards/guard/gh-ma-gu-back.png",
        "sleeve": "images/monster-stat-cards/gh-monster-stat-card-envelope-6.png",
        "maxCount": 6
    },
    "livingBones": {
        "name": "Bandit Guard",
        "statFront": "images/monster-stat-cards/gh-living-bones-0.png",
        "statBack": "images/monster-stat-cards/gh-living-bones-4.png",
        "image": "images/monster-standees/Living-Bones.avif",
        "deck": [
            {
                "image": "images/monster-ability-cards/guard/gh-lb-gu-1.png",
                "shuffle": "false",
                "initiative": 64
            },
            {
                "image": "images/monster-ability-cards/guard/gh-lb-gu-2.png",
                "shuffle": "true",
                "initiative": 20
            },
            {
                "image": "images/monster-ability-cards/guard/gh-lb-gu-3.png",
                "shuffle": "false",
                "initiative": 25
            },
            {
                "image": "images/monster-ability-cards/guard/gh-lb-gu-4.png",
                "shuffle": "false",
                "initiative": 45
            },
            {
                "image": "images/monster-ability-cards/guard/gh-lb-gu-5.png",
                "shuffle": "false",
                "initiative": 45
            },
            {
                "image": "images/monster-ability-cards/guard/gh-lb-gu-6.png",
                "shuffle": "false",
                "initiative": 81
            },
            {
                "image": "images/monster-ability-cards/guard/gh-lb-gu-7.png",
                "shuffle": "false",
                "initiative": 74
            },
            {
                "image": "images/monster-ability-cards/guard/gh-lb-gu-8.png",
                "shuffle": "true",
                "initiative": 12
            }
        ],
        "health": [
            {
                "normal": "5",
                "elite": "6"
            },
            {
                "normal": "5",
                "elite": "6"
            },
            {
                "normal": "5",
                "elite": "7"
            },
            {
                "normal": "7",
                "elite": "10"
            },
            {
                "normal": "7",
                "elite": "11"
            },
            {
                "normal": "9",
                "elite": "11"
            },
            {
                "normal": "10",
                "elite": "11"
            },
            {
                "normal": "13",
                "elite": "14"
            }
        ],
        "cardBack": "images/monster-ability-cards/guard/gh-ma-lb-back.png",
        "sleeve": "images/monster-stat-cards/gh-monster-stat-card-envelope-10.png",
        "maxCount": 10
    }
}