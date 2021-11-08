const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

// Next button
next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length        
    }

    update()
})

// Previous button
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
    currentActive = 1        
    }

    update()
    
})

// creating function to update the numbers

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    
    // progress bar
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

    // prev and next disabled

    if (currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true 
    } else {
        prev.disabled = false
        next.disabled = false
    }

}



