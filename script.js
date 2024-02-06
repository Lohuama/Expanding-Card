const panels = document.querySelectorAll('.panel')

console.log(panels)

panels.forEach((panel) => {
    panel.addEventListener('click',() => {
        removeActiveClass()
        panel.classList.add('active')
        console.log(panel)
    })
})

function removeActiveClass(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
        console.log(panel)
    })
}