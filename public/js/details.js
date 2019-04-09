console.log("hello from details.js");

// Creando el Boton de detalles
let button = '<br><input type="button" value="details" id="details" class="search-input button" />';
counterContainer.innerHTML = button;

let detailsButton = document.querySelector('#details')

detailsButton.addEventListener('click', () => {


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
                            <p class="modal-text">RMA's</p>
                            <p class="modal-text">${rmas.length}</p>
                            <p class="modal-text">Damage Actuators</p>
                            <p class="modal-text">${badMotor.length}</p>
                    </div>
                </div>

            </div>`

    modalC.innerHTML = modalDetails;
    gallery.parentNode.insertBefore(modalC, gallery)
    modalC.style.display = 'block'

})