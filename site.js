// Assignment 4
const key = "It's a secret to everybody."
const secret = "Shh! it's A Link to the Past! Again..."
localStorage.setItem(key, secret)

console.log('The secret is safe with me!')
// console.log(localStorage.getItem(key))


// orginally had function () , but changed it to arrow function after playing around for a while and realized i could change it.
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

    // originally had getElementById('welcome') but was curious if i could select an element within and eventually found out i could. then figured out a shorter way to write it.
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
// Assignment 5 - Carousel

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })
const images = document.querySelectorAll('#carousel img')
let currentImage = 0
// const showImages = () => {
//     const offset = currentImage % urls.length
//     images.forEach((image, index) => {
//         const imageIndex = (index + offset + urls.length) % urls.length
//         image.src = urls[imageIndex]
//     })
// }
// rabbit hole
const showImages = () => {
    images.forEach((image, index) => {
        image.classList.remove('active', 'prev', 'next')
        const imageIndex = (index + currentImage) % urls.length
        image.src = urls[imageIndex]
        if (index === 1) {
            image.classList.add('active')
        } else if (index ===0) {
            image.classList.add('prev')
        } else if (index ===2) {
            image.classList.add('next')
        }
    })
}
showImages()
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')

nextBtn.addEventListener('click', () => {
    currentImage++
    showImages()
})

prevBtn.addEventListener('click', () => {
    currentImage--
    showImages()
})

setInterval(() => {
    currentImage++
    showImages()
}, 5000)