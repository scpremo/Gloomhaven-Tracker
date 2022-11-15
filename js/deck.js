let deckOfCards = class{
    constructor(cards, cardBack)
    {
        this.size=cards.length
        this.deck=[...cards]
        this.cardBack=cardBack
        this.recentCard
        this.deckList =[...cards]
    }
    draw(){
        recentCard = this.deck[0].cardFront
        this.deck[0].remove()
        return recentCard
    }
    shuffle()
    {
        while(this.deck.length>0)
        {
            this.deck[0].remove
        }
        deck= [...this.deckList]
        var index= this.deck.length
        while(index>0)
        {
            var ranIndex = Math.floor(Math.random() * index);
            index--
            var save = this.deck[index]
            this.deck[index]=this.deck[ranIndex]
            this.deck[ranIndex]= save;
        }

    }

}