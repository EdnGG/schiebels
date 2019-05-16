console.log("hello from modal-container.js");

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
                            <p class="modal-text">Info:</p>
                            <p class="modal-text">${schiebels[i].info}</p>
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
