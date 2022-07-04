const btnHiperLink = document.querySelector('#requestHTML')
    .addEventListener('click', showPage); 

function showPage(e) {
    const url = 'guide-BackEnd.html'; 
    e.preventDefault();

    const localAdd = document.querySelector('#conteudo')

    fetch(url) 
        .then(data => data.text())
        .then(html => localAdd.innerHTML = html); 
}