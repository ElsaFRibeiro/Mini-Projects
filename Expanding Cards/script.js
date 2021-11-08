const panels = document.querySelectorAll('.panel')

// click and remove/add active class

panels.forEach((panel) => {
    panel.addEventListener ('click', () =>{
        removeActiveClasses()
        panel.classList.add('active')

    })
})

// removing the class active function

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove ('active')
    })
    
}