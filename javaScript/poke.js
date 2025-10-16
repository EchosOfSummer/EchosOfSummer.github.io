

// Pokemon Image Fetcher/Generator
//v1 i believe this does what is wanted. 

const pokeImg = document.getElementById('poke-img')

const getRandomPokemon1 = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const response = await fetch(url)
    const json = await response.json()
    return json
}

const renderPokemon1 = pokemon => {
    pokeImg.innerHTML = ''
    const img = document.createElement('img')
    // img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
    // img.alt = "Clefairy"
    img.src = pokemon.sprites.front_default
    img.alt = pokemon.name
    pokeImg.append(img)
}
getRandomPokemon1().then(renderPokemon1)
// setInterval(() => getRandomPokemon1().then(renderPokemon1),1000)


/* ////////////
I was curious how i could get the carousel to work with the pokemon api, this is what i came up with. Took me a while get it working to how i wanted. It was a fun challenge.
 */
const img = document.querySelectorAll('#carousel img')
let pokeArrays = [null, null, null]
let currentIndex = 1

const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + (Math.floor(Math.random() * 1025)) // sometimes will get a null response if i press too fast.. i think.
    const response = await fetch(url)
    const json = await response.json()
    return json
}

const genNeeded = async (idx) => {
    if (!pokeArrays[idx]) {
        pokeArrays[idx] = await getRandomPokemon()
    }
}

const renderPokemon = async () => {
    await Promise.all([genNeeded(0), genNeeded(1), genNeeded(2)])
    img.forEach((image, index) => {
        const url = pokeArrays[index]
        image.src = url.sprites.front_default
        image.alt = url.name
        image.classList.remove('active', 'prev', 'next')
        if (index === currentIndex) { image.classList.add('active') }
        else if (index === (currentIndex + 2) % 3) { image.classList.add('prev') }
        else if (index === (currentIndex + 1) % 3) { image.classList.add('next') }
    })
    console.log('IDS: ', pokeArrays.map(p => p ? p.id : 'not loaded'))
}

const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')

nextBtn.addEventListener('click', async () => {
    pokeArrays[0] = pokeArrays[1]
    pokeArrays[1] = pokeArrays[2]
    pokeArrays[2] = null
    currentIndex = 1 //

    await renderPokemon()
})

prevBtn.addEventListener('click', async () => {
    pokeArrays[2] = pokeArrays[1]
    pokeArrays[1] = pokeArrays[0]
    pokeArrays[0] = null
    currentIndex = 1 //

    await renderPokemon()
})

renderPokemon()
setInterval(() => nextBtn.click(), 5000)









////

// const renderPokemon = async () => {
//     const urls =  [getRandomPokemon(), getRandomPokemon(), getRandomPokemon()]
//     const pokemon = await Promise.all(urls)

//     img.forEach((image, index) => {
//         const url = pokemon[index]
//         image.src = url.sprites.front_default
//         image.alt = url.name
//         image.classList.remove('active', 'prev', 'next')
//         if (index === 1) {image.classList.add('active')} 
//         else if (index === 0) {image.classList.add('prev')} 
//         else if (index === 2) {image.classList.add('next')}
//     })
//     // pokeImg.innerHTML = ''
//     // const img = document.createElement('img')
//     // img.src = pokemon.sprites.front_default
//     // img.alt = pokemon.name 
//     // pokeImg.append(img)
// }
