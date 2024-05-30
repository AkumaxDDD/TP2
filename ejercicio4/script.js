const formulario = $("formulario")
const peso = $("peso")
const estatura = $("estatura")
console.log(peso.value);
console.log(estatura.value);


formulario.onsubmit = (e) => {

    const imc = peso.value/(estatura.value**2);
    console.log(imc)
    alert(`tu indice de masa corporal es: ${imc.toFixed(2)}`);
    e.preventDefault();
};

function $(elemento){
    return document.getElementById(elemento);
};