function calculateTemp() {
    let tempInput = document.getElementById("input-temperature");
    let showResult = document.getElementById("spn-result");
    let unitInput = document.getElementById("unit-input");
    let unitResult = document.getElementById("unit-result");
    let radioCel = document.getElementById("radio-celtofah");
    let radioFah = document.getElementById("radio-fahtocel");

    let temp = parseFloat(tempInput.value);

    if (tempInput.value.trim() === "") {
        alert("Error: กรุณากรอกข้อมูลให้ครบถ้วนค่ะ");
        return;
    }
    if(!radioCel.checked && !radioFah.checked) {
        alert("Error: กรุณาเลือกรูปแบบการแปลงอุณหภูมิค่ะ ^0^");
        return;
    }

    if (!isNaN(temp) && radioCel.checked) {
        let convertedTemp = (temp * 9 / 5) + 32;
        showResult.innerHTML = convertedTemp.toFixed(4);
    } else if (!isNaN(temp) && radioFah.checked) {
        let radioCel = document.getElementById("radio-celtofah");
        let radioFah = document.getElementById("radio-fahtocel");
        let convertedTemp = (temp - 32) * 5 / 9;
        showResult.innerHTML = convertedTemp.toFixed(4);
        document.getElementById("unit-input").textContent = "ฟาเรนไฮท์";
        document.getElementById("unit-result").textContent = "เซลเซียส";
        
    } else {
        alert("Error: กรุณาทำรายการใหม่อีกครั้งค่ะ");
    }
}

let btnCalculate = document.getElementById("btn-calculate");
btnCalculate.addEventListener("click", calculateTemp);


function resetTemp(){
    let tempInput = document.getElementById("input-temperature");
    let showResult = document.getElementById("spn-result");
    let unitInput = document.getElementById("unit-input");
    let unitResult = document.getElementById("unit-result");

    tempInput.value = "";
    showResult.innerHTML = "0.00";
    unitInput.value = "เซลเซียส";
    unitResult.value = "ฟาเรนไฮท์";
    document.getElementById("radio-celtofah").checked = false;
    document.getElementById("radio-fahtocel").checked = false;
}

let btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", resetTemp);


document.getElementById("input-temperature").addEventListener("input", function (event){
    let inputValue = event.target.value;

    event.target.value = inputValue.replace(/[^0-9.]/g, '');
    event.target.value = event.target.value.replace(/(\..*)\./g , '$1');
});



let radioCel = document.getElementById("radio-celtofah");
radioCel.addEventListener("change", function() {
    document.getElementById("unit-input").textContent = "เซลเซียส";
    document.getElementById("unit-result").textContent = "ฟาเรนไฮท์";
});

let radioFah = document.getElementById("radio-fahtocel");
radioFah.addEventListener("change", function() {
    document.getElementById("unit-input").textContent = "ฟาเรนไฮท์";
    document.getElementById("unit-result").textContent = "เซลเซียส";
});