const div = document.getElementsByClassName('reveal')[0]
console.log(div)
function isVisible (el) {

    const { top, bottom } = el.getBoundingClientRect()

    if (bottom < 0) {
        return false
    }
    if (top > window.innerHeight) {
        return false
    }
    return true
} 

setInterval(() => {
    if (isVisible(div)) {
        div.classList.add('reveal_active')
    }
}, 1000)