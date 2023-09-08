    function calTaxi() {
        let distanceInput = document.getElementById("input-distance");
        let timeTrafficjamInput = document.getElementById("input-tjam");
        let showResult = document.getElementById("spn-result");
    
        let distance = parseFloat(distanceInput.value);
        let time = parseFloat(timeTrafficjamInput.value);
    
        if (distanceInput.value.trim() === "" || timeTrafficjamInput.value.trim() === "") {
            alert("Error: กรุณากรอกข้อมูลให้ครบถ้วนค่ะ");
            return;
        }
    
        if (distance < 1) {
            alert("Error: กรุณากรอกข้อมูลตั้งแต่ 1 กิโลเมตรขึ้นไป");
            showResult.innerHTML = "กรุณาทำรายการใหม่อีกครั้งค่ะ";
            return;
        } else if (distance === 1) {
            let result = 35.00 + (time * 2);
            showResult.innerHTML = result.toFixed(4);
        } else if (distance > 1 && distance <= 10) {
            let result = 35.00 + ((distance - 1) * 5.50) + (time * 2);
            showResult.innerHTML = result.toFixed(4);
        } else if (distance > 10 && distance <= 20) {
            let result = 35.00 + (10 * 5.50) + ((distance - 10) * 6.50) + (time * 2);
            showResult.innerHTML = result.toFixed(4);
        } else if (distance > 20 && distance <= 40) {
            let result = 35.00 + (10 * 5.50) + (20 * 6.50) + ((distance - 20) * 7.50) + (time * 2);
            showResult.innerHTML = result.toFixed(4);
        } else if (distance > 40 && distance <= 60) {
            let result = 35.00 + (10 * 5.50) + (20 * 6.50) + (40 * 7.50) + ((distance - 40) * 8.00) + (time * 2);
            showResult.innerHTML = result.toFixed(4);
        } else if (distance > 60 && distance <= 80) {
            let result = 35.00 + (10 * 5.50) + (20 * 6.50) + (40 * 7.50) + (60 * 8.00) + ((distance - 60) * 9.00) + (time * 2);
            showResult.innerHTML = result.toFixed(4);
        } else if (distance > 80) {
            let result = 35.00 + (10 * 5.50) + (20 * 6.50) + (40 * 7.50) + (60 * 8.00) + (80 * 9.00) + ((distance - 80) * 10.50) + (time * 2);
            showResult.innerHTML = result.toFixed(4);
        } else {
            alert("Error: กรุณาทำรายการใหม่อีกครั้งค่ะ ^0^");
            return;
        }
    }
    
    let btnCalculate = document.getElementById("btn-calculate");
    btnCalculate.addEventListener("click", calTaxi);

    function resetCal (){
        let distanceInput = document.getElementById("input-distance");
        let timeTrafficjamInput = document.getElementById("input-tjam");
        let showResult = document.getElementById("spn-result");

        distanceInput.value = "";
        timeTrafficjamInput.value = "";
        showResult.innerHTML = "0";
    }

    let btnReset = document.getElementById("btn-reset");
    btnReset.addEventListener("click", resetCal);

    document.getElementById("input-distance").addEventListener("input", function(event){
        let inputValue = event.target.value;

        event.target.value = inputValue.replace(/[^0-9.]/g, '');
        event.target.value = event.target.value.replace(/(\..*)\./g, '$1');
    });

    document.getElementById("input-tjam").addEventListener("input", function(event){
        let inputValue = event.target.value;

        event.target.value = inputValue.replace(/[^0-9.]/g, '');
        event.target.value = event.target.value.replace(/(\..*)\./g, '$1');
    });
