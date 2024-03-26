
function convertirADolares() {
    const tipoCambio = 856.24; // 1 peso argentino = 0.011 dólares estadounidenses
    const montoPesos = parseFloat(document.getElementById('montoPesos').value);
    const montoDolares = montoPesos * tipoCambio;

    // Mostrar el resultado en la misma página HTML
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>El monto en pesos es: $${montoDolares.toFixed(2)}</p>`;
}

function convertirAEuros(){
    const tipoCambio=927.88;
    const montoPesos= parseFloat(document.getElementById('montoPesos').value);
    const montoEuros=montoPesos*tipoCambio;

    const resultadoElement=document.getElementById('resultadoEuro');
    resultadoElement.innerHTML=`<p>El monto en pesos es : $${montoEuros.toFixed(2)}</p>`
}