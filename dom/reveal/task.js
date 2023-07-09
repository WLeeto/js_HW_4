const reveal = document.getElementsByClassName('reveal')

function isVisible (el) {
    const {top, bottom} = el.getBoundingClientRect()
    if (bottom < 0 || top > window.innerHeight) {
        return false;
    }
    return true
} 

Array.from(reveal).forEach((el) => {
    if (isVisible(el)) {
        el.classList.add('reveal_active');
    }
});


setInterval(() => {
    Array.from(reveal).forEach((el) => {
        if (isVisible(el)) {
            el.classList.add('reveal_active');
        }
    });
}, 1000)