const button = document.querySelector('#playButton')
let dices = [
    "bi-dice-1-fill",
    "bi-dice-2-fill",
    "bi-dice-3-fill",
    "bi-dice-4-fill",
    "bi-dice-5-fill",
    "bi-dice-6-fill"
]

let dice = document.querySelectorAll(".roll")
let rollBox = document.querySelectorAll("#rollBox")
let result = document.querySelector('#resultDisplay')

const play = () => {
    let diceOneRandom = Math.floor(Math.random() * 6) + 1
    let diceTwoRandom = Math.floor(Math.random() * 6) + 1

    dice[0].classList = "roll bi " + dices[diceOneRandom - 1] 
    dice[1].classList = "roll bi " + dices[diceTwoRandom - 1]

    let total = diceOneRandom + diceTwoRandom

    result.textContent = `${total}`

    rollBox.forEach((e) => {
        e.classList.add("shake")
    })

    setTimeout(() => {
        rollBox.forEach((e) => {
            e.classList.remove("shake")
        })
    }, 500)
}

button.addEventListener('click', play)
