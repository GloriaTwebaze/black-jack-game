let playerCards = []
let totalCards = 0
isAlive = false
gotBlackJack = false
let player = {
    name: "Jane Doe",
    money: "$200",
}
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById('my-cards')
let sumEl = document.getElementById("total-el")
let playerEl = document.getElementById('player-el')

function generateCards() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        console.log(randomCard)
        return 15
    } else if (randomCard > 10) {
        console.log(randomCard)
        return 10
    } else {
        console.log(randomCard)

        return randomCard
    }
}
function startGame() {
    let cardOne = generateCards()
    let cardTwo = generateCards()
    playerCards = [cardOne, cardTwo]
    totalCards = playerCards[0] + playerCards[1]
    
    showGameStatus()
}
function showGameStatus() {
    let message = ""
    cardEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + totalCards
    for (i = 0; i < playerCards.length; i++) {
        console.log(i)
        cardEl.textContent += playerCards[i] + " "
    }
    if (totalCards > 21) {
        message = "Busted! Game Over"
        isAlive = false
    } else if (totalCards === 21) {
        message = "Wooho! Black jack! you win 🎊"
        gotBlackJack = true
        playerEl.textContent = "Congratulations" + " "+ player.name + "! "+ "Your cashout is " + player.money
    } else {
        message = "Would you like to pick a new card?"
        isAlive = true

    }
    messageEl.textContent = message
}
function pickNewCard() {
    if(isAlive && !gotBlackJack){
    let newCard = generateCards()
    totalCards += newCard
    playerCards.push(newCard)
    showGameStatus()
    }
}
