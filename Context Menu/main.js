let containerElement = document.querySelector('.container')
let contextMenuElement = document.querySelector('.context-menu')
let allContextMenuItems = document.querySelectorAll('.context-menu p')

allContextMenuItems.forEach(item => item.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    e.stopPropagation()
    contextMenuElement.classList.add('hidden')
}))

containerElement.addEventListener('contextmenu', contextMenuHandler)
containerElement.addEventListener('click', clickHandler)
document.body.addEventListener('click', windowClickHandler)

function contextMenuHandler(e) {
    e.preventDefault()
    contextMenuElement.style.left = e.clientX + 'px'
    contextMenuElement.style.top = e.clientY + 'px'
    contextMenuElement.classList.remove('hidden')
}

function clickHandler(e) {
    contextMenuElement.classList.add('hidden')
}

function windowClickHandler(e) {
    contextMenuElement.classList.add('hidden')
}