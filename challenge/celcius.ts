// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00

function convertTemperature(celsius: number): number[] {
    let res: number[] = []
    const kelvin = celsius + 273.15
    const Fahrenheit = celsius * 1.80 + 32.00
    res = [kelvin, Fahrenheit]
    return res
};
const celsius = 36.50
console.log(convertTemperature(celsius));
