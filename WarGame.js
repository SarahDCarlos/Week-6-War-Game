function createDeck(){
    let suits = ['H','C', 'D', 'S',];
   let ranks = ['2','3','4','5','6','7','8','9','10', 'J', 'Q', 'K', 'A'];
   let deck = [];
   
   for (let suitCounter = 0; suitCounter < 4; suitCounter++) {
       for (let rankCounter = 0; rankCounter < 13; rankCounter++) {
           // console.log(ranks[rankCounter] + suits[suitCounter]);
           deck.push(ranks[rankCounter] + suits[suitCounter]);
            }    
       }  
       return deck; 
   }
   
   function shuffleDeck(deck) {
   for(let i = 0; i < 52; i++){
       let tempCard =  deck[i];
       let randomIndex = Math.floor(Math.random() * 52);
       deck[i] = deck[randomIndex]
       deck[randomIndex] = tempCard;
       }
   }
   
   let testDeck = createDeck();
   shuffleDeck(testDeck);

   


function gamePlay() {
// Split the deck in half to give to a player 
let twentySixCardHand = testDeck.splice(0, 25);
// console.log(twentySixCardHand);

let PlayerOneHandString = twentySixCardHand.join(' ')
console.log(PlayerOneHandString);

// Create an AI second player 
let twentySixAIHand = testDeck.splice(0, 25);
let AICards = twentySixAIHand.join(' ');
console.log(AICards);

    
for (let i = 0; i < PlayerOneHandString.length; i++) {
    for(let i= 0; i < AICards.length; i++); {
        if (PlayerOneHandString.length > AICards.length){
            console.log('Player One Wins!');
        } else if(PlayerOneHandString.length < AICards.length){
            console.log('Player 2 wins');
        } else {
            console.log('WAR!')
        }
    }
}
}
