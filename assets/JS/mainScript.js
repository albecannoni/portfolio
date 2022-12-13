window.addEventListener('load', init)

function init() {
    buildingPage();
};

//***funzione che genera la Bulding page
function buildingPage() {
    let body = document.querySelector('#Body')
    let container = document.querySelector('#container');
    let navbar = document.querySelector('#navbar')
    navbar.innerHTML = '';
    container.innerHTML = '';
    container.innerHTML = `<div id="" class="container">
    <h1>SITO IN COSTRUZIONE</h1>   
   </div>`;
   body.setAttribute('style', 'background-color: red')
}
