function calculateArea() {
    let widthInput = document.getElementById("input-width");
    let heightInput = document.getElementById("input-height");
    let showResult = document.getElementById("spn-result");

    let width = parseFloat(widthInput.value);
    let height = parseFloat(heightInput.value);

    if (widthInput.value.trim() === "" || heightInput.value.trim() === "") {
        alert("Error: กรุณากรอกข้อมูลให้ครบถ้วนค่ะ");
        return;
    }

    
    if (!isNaN(width) && !isNaN(height)) {
        let areaSquare = width * height;
        showResult.innerHTML = areaSquare.toFixed(4);
    } else {
        
        alert("Error: กรุณาทำรายการใหม่อีกครั้งค่ะ");
        return;
    }
}


document.getElementById("input-width").addEventListener("input", function (event) {
    let inputValue = event.target.value;
  
    event.target.value = inputValue.replace(/[^0-9.]/g, '');
    
    
    event.target.value = event.target.value.replace(/(\..*)\./g, '$1');
});

document.getElementById("input-height").addEventListener("input", function (event) {
    let inputValue = event.target.value;

    event.target.value = inputValue.replace(/[^0-9.]/g, '');
    
    
    event.target.value = event.target.value.replace(/(\..*)\./g, '$1');
});    

let btnCalculate = document.getElementById("btn-area");

btnCalculate.addEventListener("click", calculateArea);


function resetArea(){
    let widthInput = document.getElementById("input-width");
    let heightInput = document.getElementById("input-height");
    let showResult = document.getElementById("spn-result");
    widthInput.value = "";  
    heightInput.value = ""; 
    showResult.innerHTML = "0.00"; 
}

let btnReset = document.getElementById("btn-reset");

btnReset.addEventListener("click", resetArea);


