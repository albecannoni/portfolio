//?funzione che genera la Bulding page
window.addEventListener('load', init)



function init()
{
    buildingPage();
};
function buildingPage() {
    let container = document.querySelector('#container');
    let navbar = document.querySelector('#navbar')
    navbar.innerHTML = '';
    container.innerHTML = '';
    container.innerHTML = `<div id="" class="container">
    <h1>SITO IN COSTRUZIONE</h1>   
   </div>`;
}
