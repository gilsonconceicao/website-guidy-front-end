const btnNavBar = document.querySelector('.btn-click-menu'); 
const conteinerNavBar = document.querySelector('.menu-header');

let open = '<i class="fa-solid fa-xmark"></i>'; 
let close = '<i class="fa-solid fa-bars"></i>'

btnNavBar.addEventListener('click', (e) => {
    e.preventDefault(); 
    conteinerNavBar.classList.toggle('nav-list-active'); 

    if (btnNavBar.innerHTML == open) {
        btnNavBar.innerHTML = close;
    } else {
        btnNavBar.innerHTML = open; 
    }
});