// Assignment 4
const key = "It's a secret to everybody."
const secret = "Shh! it's A Link to the Past! Again..."
localStorage.setItem(key, secret)

console.log('The secret is safe with me!')
// console.log(localStorage.getItem(key))


// orginally had function () , but changed it to arrow function after playing around for a while and realized i could change.
document.addEventListener('DOMContentLoaded', () => {
    const hours = new Date().getHours() // get the current hour

    const isMorning = hours >= 4 && hours < 12 // is it morning?
    const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
    const isEvening = hours >= 17 || hours < 4 // is it evening?

    let messages
    if (isMorning) {
        messages = ['Good morning! Drink Coffee!', 'WAKE UP!']
    } else if (isAfternoon) {
        messages = ['Good afternoon! Take a Break!', 'TIME TO WORK!']
    } else if (isEvening) {
        messages = ['Good evening! Time to Relax!', 'TIME TO RELAX!']
    }

    // originally hd getElementById('welcome') but was curious if i could select an element within and eventually found out i couuld. then figured out a shorter way to write it.
    const welcome = document.querySelector('#welcome h3')
    // const welcome = document.getElementById('welcome').querySelector('h3')

    // was curious. that lead me to figuring out how i would set a interval.
    // setTimeout(() => {
    //     if (isMorning) {
    //         delay.textContent = 'WAKE UP!'
    //     } else if (isAfternoon) {
    //         delay.textContent = 'TIME TO WORK!'
    //     } else if (isEvening) {
    //         delay.textContent = 'TIME TO RELAX!'
    //     }
    // }, 5000)
    if (welcome) {welcome.textContent = messages}
    let inx = 0
    welcome.textContent = messages[inx]
    setInterval(() => {
        inx = (inx + 1) % messages.length
        welcome.textContent = messages[inx]
    }, 3000)
    
})