// Funzione f(x) = 0.90 + 0.006x + 0.00012x^2 - 0.000001x^3
function consumo(x) {
    return 0.90 + 0.006 * x + 0.00012 * x * x - 0.000001 * x * x * x;
}

const xValues = [];
const yValues = [];
for (let x = 0; x <= 90; x += 10) {
    xValues.push(x);
    yValues.push(parseFloat(consumo(x).toFixed(3)));
}