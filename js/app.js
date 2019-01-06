// making request with AJAX
$.ajax({
    url: 'https://randomuser.me/api/?results=12&inc=name,location,email,picture,cell,dob&nat=NZ,US',
    dataType: 'json',
    success: function (data) {
        //console.log(`Request con Ajax:`, data);
    }
});

//Creando un array donde se guardara la respuesta de Fetch, haciendo esta una variable global
let empleados = []
let schiebels = []

// Seleccionando y guardando en una variable el contenedor donde se imprimira la galeria
const gallery = document.querySelector('.gallery')

// making request with FETCH    
fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => {
        //La respuesta de fetch se asigna al array 'empleados'
        empleados = data.results
        console.log(`Request con Fetch:`, empleados)

        mockup();
    }).catch(err => {
        console.log(err);
    })

//Testing Fetch for personal project
fetch('./actuators.json')
    .then(res => res.json())
    .then(data => {
        schiebels = data
        console.log(schiebels)
        mockup();
    }).catch(err => {
        console.log(err)
    })

function mockup() {
    let html = '';
    for (let i = 0; i < schiebels.length; i += 1) {
        //console.log(i, shiebels.length)
        //En el metodo printModal() se pasa por parametro el index de array empleados obtenido de la 
        //iteracion con el ciclo 'for' y  guardado con el nombre de la variable 'i'
        html +=
            `   <div class="card" onClick="printModal('${i}')">
                        <div class="card-img-container">
                            <img class="card-img" src="../display.jpeg" alt="profile picture">
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

// Selecionando y guardando el container donde estara el formulario de busqueda
const formContainer = document.querySelector('.search-container')

// Creando el formulario de busqueda
const formBrowser = ` 
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`

//Agregandolo al documento
formContainer.innerHTML = formBrowser;

//Seleccionando y alamcenando en variables los dos text input del buscador
const searchInput = document.getElementById('search-input');
const submit = document.getElementById('search-submit');

//Agregando el eventListener al boton 'submit'
submit.addEventListener('click', () => {
    let actuator = searchInput.value.toUpperCase()
    // Ejecutando la  funcion filter y pasando por parametro la variable 'empleado' 
    filter(actuator)
    function filter(actuator) {
        let card1 = document.querySelectorAll('.card')
        for (let i = 0; i < card1.length; i++) {
            let serialActuator = card1[i].querySelector('.card-name').textContent;
            let serialValve = card1[i].querySelector('.serial-valve').textContent;
            let orderNumber = card1[i].querySelector('.order-number').textContent;
            if (serialActuator.indexOf(actuator) === 0 || serialValve.indexOf(actuator) === 0 || orderNumber.indexOf(actuator) === 0) {
                console.log(card1[i])
                card1[i].style.display = "";
            } else {
                console.log(card1[i])
                card1[i].style.display = "none";
            }

        }
    }
})

/* *********************** */
//Funcion que imprime el Modal Container
let modalC = document.createElement('div')
function printModal(i) {
    let modalContainer = `
            <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn" onClick="closeModal()"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="../display.jpeg" alt="profile picture">
                        <h3 id="name" class="modal-name cap">Actuator Serial Number:</h3>
                        <p class="modal-text">${schiebels[i].serialActuator}</p>
                        <hr>
                            <p class="modal-text cap">Valve Serial Number:</p>
                            <p class="modal-text">${schiebels[i].serialValve}</p>
                            <p class="modal-text cap">Valve Size:</p>
                            <p class="modal-text">${schiebels[i].sizeValve}</p>
                            <p class="modal-text">Order Number:</p>
                            <p class="modal-text">${schiebels[i].orderNumber}</p>
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

/* *********************** */
function prevModal(i) {
    //console.log('function prevModal works :)')
    if (i === 0) {
        console.log(i, schiebels.length)
        printModal(schiebels.length - 1)
    } else {
        printModal(i - 1)
    }
}
function nextModal(i) {
    //console.log('function nextModal works :)')    
    if (i === schiebels.length - 1) {
        console.log(i, schiebels.length)
        printModal(0)
    } else {
        printModal(i + 1);
    }
}
//Funcion que cierra el Modal Container
function closeModal() {
    //console.log('Works closeModal')
    mockup();
    modalC.style.display = 'none'
}