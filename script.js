document.addEventListener("DOMContentLoaded", function () {
    const inputTemperature = document.getElementById("input-temperature");
    const fromScale = document.getElementById("from-scale");
    const resultElements = {
        celsius: document.getElementById("celsius-result"),
        fahrenheit: document.getElementById("fahrenheit-result"),
        kelvin: document.getElementById("kelvin-result")
    };

    function convertTemperature() {
        const temperature = parseFloat(inputTemperature.value);
        const from = fromScale.value;

        const convertedTemperatures = {
            celsius: temperature,
            fahrenheit: 0,
            kelvin: 0
        };

        if (from === "celsius") {
            convertedTemperatures.fahrenheit = (temperature * 9/5) + 32;
            convertedTemperatures.kelvin = temperature + 273.15;
        } else if (from === "fahrenheit") {
            convertedTemperatures.celsius = (temperature - 32) * 5/9;
            convertedTemperatures.kelvin = (temperature + 459.67) * 5/9;
        } else if (from === "kelvin") {
            convertedTemperatures.celsius = temperature - 273.15;
            convertedTemperatures.fahrenheit = (temperature * 9/5) - 459.67;
        }

        for (const scale in resultElements) {
            resultElements[scale].textContent = convertedTemperatures[scale].toFixed(2);
        }
    }

    inputTemperature.addEventListener("input", convertTemperature);
    fromScale.addEventListener("change", convertTemperature);
});
