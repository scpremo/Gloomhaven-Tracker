
let Card = class {
    constructor(card) {
        this.cardFront = card.image
        this.shuffle = card.shuffle
    }
    getCardFront() {
        return this.cardFront
    }
    cardShuffle() {
        return this.shuffle
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

let Monster = class {
    constructor(monsterData, level, type) {
        this.name = monsterData.name
        this.rotation = 90 * (level % 4)
        this.deck = new Deck(monsterData.deck, monsterData.cardBack)
        this.deck.shuffle()
        if (level > 3)
            this.statCard = monsterData.statBack
        else
            this.statCard = monsterData.statFront
        this.sleeve = monsterData.sleeve
        this.image = monsterData.image
        if (type === "elite") {
            this.health = monsterData.health[level].elite
        }
        else {
            this.health = monsterData.health[level].normal
        }
        this.discard = null
    }
    startRound(){
        this.discard=this.deck.draw()
        return this.discard
    }
    endRound(){
        if(this.discard)
        {
            if(this.discard.cardShuffle()==='true')
                this.deck.shuffle()
        }
    }
}
console.log("starting tests")
var Data = {
    "banditGuard":{
        "name": "Bandit Guard",
        "statFront": "images/monster-stat-cards/gh-bandit-guard-0.png",
        "statBack": "images/monster-stat-cards/gh-bandit-guard-4.png",
        "image":"images/monster-standees/Bandit-Guard.avif",
        "deck": [
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-1.png",
                "shuffle": "true"
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-2.png",
                "shuffle": "false"
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-3.png",
                "shuffle": "false"
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-4.png",
                "shuffle": "false"
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-5.png",
                "shuffle": "false"
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-6.png",
                "shuffle": "false"
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-7.png",
                "shuffle": "false"
            },
            {
                "image": "images/monster-ability-cards/guard/gh-ma-gu-8.png",
                "shuffle": "true"
            }
        ],
        "health": [
            {
                "normal":"5",
                "elite": "9"
            },
            {
                "normal":"6",
                "elite": "9"
            },
            {
                "normal":"6",
                "elite": "10"
            },
            {
                "normal":"9", 
                "elite": "10"
            },
            {
                "normal":"10",
                "elite": "11"
            },
            {
                "normal":"11",
                "elite": "12"
            },
            {
                "normal":"14",
                "elite": "14"
            },
            {
                "normal":"16",
                "elite": "14"
            }
        ],
        "cardBack": "images/monster-ability-cards/guard/gh-ma-gu-back.png",
        "sleeve" :"images/monster-stat-cards/gh-monster-stat-card-envelope-6.png"
    }

}