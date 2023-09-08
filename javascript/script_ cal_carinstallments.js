document.addEventListener('DOMContentLoaded', function () {
    let radioButtons = document.querySelectorAll('input[name="choose"]');
    let firstRadioButton = radioButtons[0];
    firstRadioButton.checked = true;
});


function calCar(){

    let inputName = document.getElementById("input-name");
    let inputLastname = document.getElementById("input-lastname");
    let inputCarprice = document.getElementById("input-carprice");
    let inputDownpay = document.getElementById("input-downpay");
    let inputInterest = document.getElementById("input-interest");
    let radioButtons = document.querySelectorAll('input[name="choose"]');
    let selectElement = document.querySelector('select[name="cars"]');

    let carPrice = parseFloat(inputCarprice.value);
    let downPay = parseFloat(inputDownpay.value);
    let interestPay = parseFloat(inputInterest.value);
    let selectBox = parseInt(selectElement.options[selectElement.selectedIndex].value);

    let selectedRadioValue;
    radioButtons.forEach(function (radio) {
        if (radio.checked) {
            selectedRadioValue = radio.value;
        }
    });


    if (inputName.value.trim() === "" || inputLastname.value.trim() === "" || inputCarprice.value.trim() === "" || inputDownpay.value.trim() === "" || inputInterest.value.trim() === ""){
        alert("Error: กรุณากรอกข้อมูลให้ครบถ้วนค่ะ");
        return;
    }

    let resultName = document.getElementById("spn-name");
    let resultTypeofcar = document.getElementById("spn-typeofcar");
    let resultDownpay = document.getElementById("spn-downpay");
    let resultFpay = document.getElementById("spn-financepay");
    let resultPaymonth = document.getElementById("spn-paypermonth");

   
    resultName.innerHTML = inputName.value + " " + inputLastname.value;
    resultTypeofcar.innerHTML = selectedRadioValue;
    resultDownpay.innerHTML = (carPrice * downPay / 100).toFixed(2);
    resultFpay.innerHTML = (carPrice - (carPrice * downPay / 100)).toFixed(2);
    resultPaymonth.innerHTML = ([(carPrice - (carPrice * downPay / 100)) + (((carPrice - (carPrice * downPay / 100)) * (interestPay/100) * (selectBox/12)))]/selectBox).toFixed(2);
    

}

    let btnCalculate = document.getElementById("btn-calculate");
    btnCalculate.addEventListener("click", calCar)



function resetCal(){

    let inputName = document.getElementById("input-name");
    let inputLastname = document.getElementById("input-lastname");
    let inputCarprice = document.getElementById("input-carprice");
    let inputDownpay = document.getElementById("input-downpay");
    let inputInterest = document.getElementById("input-interest");
    let radioButtons = document.querySelectorAll('input[name="choose"]');
    let selectElement = document.querySelector('select[name="cars"]');

    let resultName = document.getElementById("spn-name");
    let resultTypeofcar = document.getElementById("spn-typeofcar");
    let resultDownpay = document.getElementById("spn-downpay");
    let resultFpay = document.getElementById("spn-financepay");
    let resultPaymonth = document.getElementById("spn-paypermonth");

    inputName.value = "";
    inputLastname.value = "";
    inputCarprice.value = "";
    inputDownpay.value = "";
    inputInterest.value = "";

    radioButtons.checked = "Honda";
    selectElement.selectedIndex = 0;

    resultName.innerHTML = "XXXXX";
    resultTypeofcar.innerHTML = "XXXXX";
    resultDownpay.innerHTML = "XXXXX";
    resultFpay.innerHTML = "XXXXX";
    resultPaymonth.innerHTML = "XXXXX";
}

    let btnReset = document.getElementById("btn-reset");
    btnReset.addEventListener("click", resetCal)



    


    function validateInputName(event){

        let inputValue = event.target.value;

        event.target.value = inputValue.replace(/[^A-Za-zก-ฮะาิีึืุูเแโใไ็่้๋์]/g, '');
    }

    
    document.getElementById("input-name").addEventListener("input", validateInputName);

    document.getElementById("input-lastname").addEventListener("input", validateInputName);



    

    function validateInputNumber(event){
        let inputValue = event.target.value;

        event.target.value = inputValue.replace(/[^0-9.]/g, '');
        event.target.value = event.target.value.replace(/(\..*)\./g, '$1');
    }


    document.getElementById("input-carprice").addEventListener("input", validateInputNumber);

    document.getElementById("input-downpay").addEventListener("input", validateInputNumber);
    
    document.getElementById("input-interest").addEventListener("input", validateInputNumber);
    