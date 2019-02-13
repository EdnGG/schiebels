//Creando un array donde se guardara la respuesta de Fetch, haciendo estas variables globales
let schiebels = []
let valve = []
let results = []
let counterContainer = document.querySelector('#div-counter')
let sizePaginaton = schiebels.length

// Seleccionando y guardando en una variable el contenedor donde se imprimira la galeria
const gallery = document.querySelector('.gallery')

// Selecionando y guardando el container donde estara el formulario de busqueda
const formContainer = document.querySelector('.search-container')

// Creando el formulario de busqueda
const formBrowser = ` 
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Serial Number">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`

// Creando el Boton de detalles
let button = '<br><input type="submit" value="See Details" id="details" class="search-input button" name="details"/>';
counterContainer.innerHTML = button;

//Testing Fetch for personal project
fetch('./actuators.json')
    .then(res => res.json())
    .then(data => {
        schiebels = data
        
        mockup();
        pagination();

    }).catch(err => {
        console.log(`Something went wrong: ${err}`)
    })

// const pagination = ()=>  {
//     const numberOfPages = Math.ceil(schiebels.length / 10);
//     $(".card").slice(10).hide();
//     const $pageUlist = $("<ul></ul>");
//     $(".pagination").append($pageUlist);

//     //Loop through page numbers with page links
//     for (let i = 0; i < numberOfPages; i++) {

//         let ancorTags = `<a href='#'> ${i+1} </a>`;
//         let $pageListItem = $(`<li>${ancorTags}</li>`);
//         $(".pagination ul").append($pageListItem);
//     }
//         $(".pagination a:contains(1)").addClass("active");
    

//     //Click event bound to pagination links
//     $(".pagination a").click(function () {
//         $(".card").hide();
//         //Use page number text as calculation starting point
//         let currentPage = $(this).text();
//         console.log(currentPage)
//         //Remove active class from other clicked links
//         $(".pagination a").removeClass("active");
//         //Add active class to currently clicked link    
//         $(this).addClass("active");
//         let startIndex = (currentPage * 10) - 10;
//         console.log(startIndex)
//         let endIndex = currentPage * 10;
//         console.log(endIndex)
//         console.log(results)

//         //If results array isn't empty then show ten per page
//         if (results.length > 1) {
//             $(".card").hide();
//             $(results).slice(startIndex, endIndex).show();
//         } else {
//             //Show 10 students per page using start and end index
//             $(".card").slice(startIndex, endIndex).show();
//         }
//     });
// }

const pagination = () => {
    const numberOfPages = Math.ceil(schiebels.length / 10);
    $(".card").slice(10).hide();
    const $pageUlist = $("<ul></ul>");
    $(".pagination").append($pageUlist);

    //Loop through page numbers with page links
    for (let i = 0; i < numberOfPages; i++) {

        let ancorTags = `<a href='#'> ${i + 1} </a>`;
        let $pageListItem = $(`<li>${ancorTags}</li>`);
        $(".pagination ul").append($pageListItem);
    }
    $(".pagination a:contains(1)").addClass("active");


    //Click event bound to pagination links
    $(".pagination a").click(function () {
        $(".card").hide();
        //Use page number text as calculation starting point
        let currentPage = $(this).text();
        console.log(currentPage)
        //Remove active class from other clicked links
        $(".pagination a").removeClass("active");
        //Add active class to currently clicked link    
        $(this).addClass("active");
        let startIndex = (currentPage * 10) - 10;
        console.log(startIndex)
        let endIndex = currentPage * 10;
        console.log(endIndex)
        console.log(results)

        //If results array isn't empty then show ten per page
        if (results.length > 1) {
            $(".card").hide();
            $(results).slice(startIndex, endIndex).show();
        } else {
            //Show 10 students per page using start and end index
            $(".card").slice(startIndex, endIndex).show();
        }
    });
}

document.getElementById("details").addEventListener('click', ()=> { 

    const valve3inch = schiebels.filter(valve => valve.sizeValve === '3 Inch')
    const valve2inch = schiebels.filter(valve => valve.sizeValve === '2 Inch')
    const valve4inch = schiebels.filter(valve => valve.sizeValve === '4 Inch')
    const rmas = schiebels.filter(rma => rma.notes === 'RMA')
    const badMotor = schiebels.filter(actuator => actuator.notes === 'Actuator does not work')

    let modalDetails = `
            <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn" onClick="closeModal()"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="./mockups/display.jpeg" alt="Actuator picture">
                        <h3 id="name" class="modal-name cap">Total Actuators:</h3>
                        <p class="modal-text">${schiebels.length}</p>
                        <hr>
                            <p class="modal-text cap">Actuators with 2 Inch Valve:</p>
                            <p class="modal-text">${valve2inch.length}</p>
                            <p class="modal-text cap">Actuators with 3 Inch Valve:</p>
                            <p class="modal-text size-valve">${valve3inch.length}</p>
                            <p class="modal-text">Actuators with 4 Inch valve:</p>
                            <p class="modal-text">${valve4inch.length}</p>
                            <p class="modal-text">Total RMA's</p>
                            <p class="modal-text">${rmas.length}</p>
                            <p class="modal-text">Total Damage Actuators</p>
                            <p class="modal-text">${badMotor.length}</p>
                    </div>
                </div>

            </div>`
    //<button type="button" id="modal-prev" class="modal-prev btn" onClick="printModal(${i-1})">Prev</button>
    //<button type="button" id="modal-next" class="modal-next btn" onClick="printModal(${i+1})">Next</button>
    modalC.innerHTML = modalDetails;
    gallery.parentNode.insertBefore(modalC, gallery)
    modalC.style.display = 'block'

})

const mockup = ()=> {
    let html = '';
    for (let i = 0; i < schiebels.length; i += 1) {
        /* console.log(i, shiebels.length)
            En el metodo printModal() se pasa por parametro el index de array schiebels obtenido de la 
            iteracion con el ciclo 'for' y  guardado con el nombre de la variable 'i'
        */
        html +=
            `   <div class="card" onClick="printModal('${i}')">
                        <div class="card-img-container">
                            <img class="card-img" src="./mockups/display.jpeg" alt="display picture">
                        </div>
                        <div class="card-info-container">
                            <h3 id="name" class="card-name cap">${schiebels[i].serialActuator} </h3>
                            <p class="card-text serial-valve">${schiebels[i].serialValve}</p>
                            <p class="card-text cap order-number">${schiebels[i].orderNumber}</p>
                        </div>
                    </div>
                `
        gallery.innerHTML = html;
    }
}


//Seleccionando y alamcenando en variables los dos text input del buscador
formContainer.innerHTML = formBrowser;
const searchInput = document.getElementById('search-input');
const submit = document.getElementById('search-submit');

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let actuator = searchInput.value.toUpperCase()
    let card = document.getElementsByClassName('card');
    // Ejecutando la  funcion filter y pasando por parametro la variable 'empleado' 
    filter(actuator)
    if (searchInput.value === "") {
        //let card = document.getElementsByClassName('card');

        $(".card").slice(10).hide();
        console.log(card)
        //card.slice(10)
        console.log(card)
    } 
})

//Agregando el eventListener al boton 'submit'
function filter(actuator) {
    
    let card1 = document.querySelectorAll('.card')
    for (let i = 0; i < card1.length; i++) {
        //console.log(card1.length)
        let serialActuator = card1[i].querySelector('.card-name').textContent;
        let serialValve = card1[i].querySelector('.serial-valve').textContent;
        let orderNumber = card1[i].querySelector('.order-number').textContent;
       
        if (serialActuator.indexOf(actuator) === 0 || serialValve.indexOf(actuator) === 0 || orderNumber.indexOf(actuator) === 0 || valve.indexOf(actuator) === 0) {

            //console.log(valve)
            card1[i].style.display = "";
        } else {
            card1[i].style.display = "none";
        }

    }
}

//Funcion que imprime el Modal Container
let modalC = document.createElement('div')

function printModal(i) {
    let modalContainer = `
            <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn" onClick="closeModal()"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="./mockups/display.jpeg" alt="profile picture">
                        <h3 id="name" class="modal-name cap">Actuator Serial Number:</h3>
                        <p class="modal-text">${schiebels[i].serialActuator}</p>
                        <hr>
                            <p class="modal-text cap">Valve Serial Number:</p>
                            <p class="modal-text">${schiebels[i].serialValve}</p>
                            <p class="modal-text cap">Valve Size:</p>
                            <p class="modal-text size-valve">${schiebels[i].sizeValve}</p>
                            <p class="modal-text">Order Number:</p>
                            <p class="modal-text">${schiebels[i].orderNumber}</p>
                            <p class="modal-text">RMA Number:</p>
                            <p class="modal-text">${schiebels[i].rmaNumber}</p>
                            <p class="modal-text">Notes:</p>
                            <p class="modal-text">${schiebels[i].notes}</p>
                    </div>
                </div>


                <div class="modal-btn-container">                   
                    <button type="button" id="modal-prev" class="modal-prev btn" onClick="prevModal(${i})">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn" onClick="nextModal(${i})">Next</button>
                </div>
            </div>`
    //<button type="button" id="modal-prev" class="modal-prev btn" onClick="printModal(${i-1})">Prev</button>
    //<button type="button" id="modal-next" class="modal-next btn" onClick="printModal(${i+1})">Next</button>
    modalC.innerHTML = modalContainer;
    gallery.parentNode.insertBefore(modalC, gallery)
    modalC.style.display = 'block'
}

function prevModal(i) {
    if (i === 0) {
        console.log(i, schiebels.length)
        printModal(schiebels.length - 1)
    } else {
        printModal(i - 1)
    }
}
function nextModal(i) {
    if (i === schiebels.length - 1) {
        console.log(i, schiebels.length)
        printModal(0)
    } else {
        printModal(i + 1);
    }
}
//Funcion que cierra el Modal Container
function closeModal() {
    //mockup();
    modalC.style.display = 'none'
}

