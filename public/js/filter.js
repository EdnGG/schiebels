console.log("hello from filter.js");

function filter(actuator) {

    let card1 = document.querySelectorAll('.card')
    for (let i = 0; i < card1.length; i++) {
        //console.log(card1.length)
        let serialActuator = card1[i].querySelector('.card-name').textContent;
        let serialValve = card1[i].querySelector('.serial-valve').textContent;
        let orderNumber = card1[i].querySelector('.order-number').textContent;
        console.log(orderNumber)
        console.log(orderNumber.length)
        if (serialActuator.indexOf(actuator) === 0 || serialValve.indexOf(actuator) === 0) {
            card1[i].style.display = "";

        } else if (orderNumber.indexOf(actuator) === 0 || orderNumber.indexOf(actuator) == 'odessa') {
            // console.log(orderNumber[i])
            // let result = orderNumber.map( order => { 
            //     if(order === actuator){
            //         return console.log(result)
            //     } 

            // })
            swal({
                title: `Actuators under this ${actuator} order number`,
                icon: `success`
            })
            card1[i].style.display = "";

        } else {
            card1[i].style.display = "none";

        }


        // if (serialActuator.indexOf(actuator) === 0 || serialValve.indexOf(actuator) === 0 || orderNumber.indexOf(actuator) === 0 ) {

        //     card1[i].style.display = "";

        // } else {

        //     card1[i].style.display = "none";
        // }

    }
}
