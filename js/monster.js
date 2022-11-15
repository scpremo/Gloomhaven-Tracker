let monster = class{
    constructor(level, deck, amount, statFront, statBack){
        this.rotation= 90*(level%4)
        this.deck=deck
        if(amount>6)
            this.image="gh-monster-stat-card-envelope-10.png"
        else
            this.image="gh-monster-stat-card-envelope-6.png"


    }
}