// Selecionando y guardando el container donde estara el formulario de busqueda
const formContainer = document.querySelector('.search-container')

// Creando el formulario de busqueda
const formBrowser = ` 
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Serial Number">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`


//Seleccionando y almacenando en variables los dos text input del buscador
formContainer.innerHTML = formBrowser;
let searchInput = document.getElementById('search-input');
const submit = document.getElementById('search-submit');

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let actuator = searchInput.value.toUpperCase()
    let card = document.getElementsByClassName('card');
    // Ejecutando la  funcion filter y pasando por parametro la variable 'empleado' 
    filter(actuator)
    if (searchInput.value === "") {
        // console.log('event listener')
        // swal({
        //     title: `Please enter a valid input`,
        //     icon: `error`
        // })
        $(".card").slice(10).hide();
        //console.log(card)
        //card.slice(10)

    }
})