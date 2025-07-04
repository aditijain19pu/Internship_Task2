function convertTemp() {
  const input = document.getElementById("inputTemp").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const result = document.getElementById("result");

  if (input === "" || isNaN(input)) {
    result.textContent = "Please enter a valid number.";
    result.style.color = "red";
    return;
  }

  const temp = parseFloat(input);
  let output = "";

  if (unit === "celsius") {
    output = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)}°F  
Kelvin: ${(temp + 273.15).toFixed(2)}K`;
  } else if (unit === "fahrenheit") {
    output = `Celsius: ${((temp - 32) * 5/9).toFixed(2)}°C  
Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
  } else if (unit === "kelvin") {
    output = `Celsius: ${(temp - 273.15).toFixed(2)}°C  
Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
  }

  result.style.color = "#333";
  result.innerHTML = output.replace(/\n/g, "<br>");
}