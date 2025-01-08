const tc = {
    toCel(temp) {
        return ((temp - 32) * 5) / 9;
    },
    toFar(temp) {
        return ((temp * 9) / 5) + 32;
    }
}
let temp = Number(prompt("Enter the temperature:"));
let type = prompt("Enter the temperature type (C for Celsius, F for Fahrenheit):");

if (type === "C" || type === "c") {
    let res = tc.toCel(temp);
    alert(`${temp}°F is equal to ${res.toFixed(2)}°C`);
} else if (type === "F" || type === "f") {
    let res = tc.toFar(temp);
    alert(`${temp}°C is equal to ${res.toFixed(2)}°F`);
} else {
    console.log("Invalid temperature type");
}