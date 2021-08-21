function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    if ((pin + "").length == 4) {
        return pin;
    } else {
        return generatePin();
    }
}

document.getElementById("generate-btn").addEventListener("click", function () {
    const generatedPinInput = document.getElementById("generated-pin");
    const generatedPin = generatePin();
    generatedPinInput.value = generatedPin;
});

document.getElementById("key-pad").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNumbersInput = document.getElementById("typed-numbers");
    const typedNumbers = typedNumbersInput.value;

    if (isNaN(number)) {
        if (number == "C") {
            typedNumbersInput.value = "";
        } else if (number == "<") {
            typedNumbersInput.value = typedNumbers.substr(0, typedNumbers.length - 1);
        }
    } else {
        const newtypedNumbers = typedNumbers + number;
        typedNumbersInput.value = newtypedNumbers;
    }
});

document.getElementById("submit-btn").addEventListener("click", function () {
    const generatedPin = document.getElementById("generated-pin").value;
    const typedNumbers = document.getElementById("typed-numbers").value;
    const successMsg = document.getElementById("success-msg");
    const errorMsg = document.getElementById("error-msg");

    if (generatedPin == typedNumbers) {
        successMsg.style.display = "block";
        errorMsg.style.display = "none";
        document.getElementById("typed-numbers").value = "";
        document.getElementById("generated-pin").value = "";
    } else {
        errorMsg.style.display = "block";
        successMsg.style.display = "none";
    }
});