// Options language - show

document.querySelectorAll('[op-title]').forEach(title => {
    title.onclick = function () {
        const boxText = title.nextElementSibling; 

        const div = boxText.style.display;
        
        boxText.style.display = div === 'block' ? 'none' : 'block'; 
    }
})

// sorry users link menu 

function sorryUser() {
    alert('Sorry is in creation...')
}