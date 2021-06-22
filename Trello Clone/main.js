let allCards = document.querySelectorAll('.card')

let allContainers = document.querySelectorAll('.container')

allCards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
        card.classList.add('dragging')
    })

    card.addEventListener('dragend', (e) => {
        card.classList.remove('dragging')
    })
})

allContainers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault()
        let closestElement = getClosestElement(container, e.clientY)
        let currentlyDraggedCard = document.querySelector('.dragging')
        if (!closestElement) {
            container.appendChild(currentlyDraggedCard)
        }
        container.insertBefore(currentlyDraggedCard, closestElement)
    })
})

function getClosestElement(container, mousePosition) {
    let divElements = container.getElementsByTagName('div')
    for (let i = 0; i < divElements.length; i++) {
        if (!divElements[i].classList.contains('dragging')) {
            if (mousePosition - divElements[i].offsetTop - divElements[i].clientHeight / 2 < 0) {
                return divElements[i]
            }
        }
    }
    return null
}