console.log("hello from app.js");

//Creando un array donde se guardara la respuesta de Fetch, haciendo estas variables globales
let schiebels = []
let valve = []
let counterContainer = document.querySelector('#div-counter')
let sizePaginaton = schiebels.length
let element = document.querySelectorAll('.card')
let defaultPagination = [0, 10]

// Seleccionando y guardando en una variable el contenedor donde se imprimira la galeria
const gallery = document.querySelector('.gallery')


//Testing Fetch for personal project
fetch('./actuators.json')
    .then(res => res.json())
    .then(data => {
        schiebels = data
        
        mockup();
        pagination();

    }).catch(err => {
        swal({
            title: `Something went wrong: ${err.message}`,
            icon: `error`
        })
    })

const pagination = ()=>  {
    let prev = document.querySelector('.previous')
    let next = document.querySelector('.next')
    element = document.querySelectorAll('.card')

    $(element).slice(10).hide()
   
prev.addEventListener('click', () => {
    getElementPrev() 
     
})

next.addEventListener('click', () => {
    getElementNext()
})
}

const getElementNext = ()=>  {
    console.log('next button')
    $(element).hide()

    defaultPagination = defaultPagination.map(index => {
        return index + 11
    })
    console.log(defaultPagination)
    $(element).slice(...defaultPagination).show()

}

const getElementPrev = ()=> {
    $(element).hide()
    if (defaultPagination[0] != 0) {
        defaultPagination = defaultPagination.map(index => {
            return index - 11
        })
        $(element).slice(...defaultPagination).show()
    } else {
        $(element).slice(...defaultPagination).show()

    }
}

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

