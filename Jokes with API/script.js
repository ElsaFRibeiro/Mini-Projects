const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// getting a new joke button

jokeBtn.addEventListener('click', generateJoke)


generateJoke ()

// function for getting joke from api - Option 1 using async/await

async function generateJoke () {

    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const response = await fetch('https://icanhazdadjoke.com', config)

    const data = await response.json()
    jokeEl.innerHTML = data.joke
    
    }
    

// function for getting joke from api - Option 2 using .then

// function generateJoke () {

//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch ('https://icanhazdadjoke.com', config)
//         .then((response) => response.json())
//         .then((data) => { jokeEl.innerHTML = data.joke})
// }
