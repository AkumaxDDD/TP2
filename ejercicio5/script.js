const ladoA = $("ladoA");
const ladoB = $("ladoB");
const ladoC = $("ladoC");
const formulario = $("formulario");

console.log("ola")
let triangulo=""
let rectangulo=""
let total=""
formulario.onsubmit = (e) => {
    console.log(parseFloat(ladoA.value));
    console.log(ladoB.value);
    console.log(ladoC.value);
    if(parseFloat(ladoA.value) > parseFloat(ladoC.value) && parseFloat(ladoA.value) > 0 && parseFloat(ladoB.value) > 0 && parseFloat(ladoC.value)>0){
        
        triangulo = (parseFloat(ladoB.value) * (parseFloat(ladoA.value) - parseFloat(ladoC.value)))/ 2;
        rectangulo = ladoB.value * ladoC.value;
        total = triangulo + rectangulo
        console.log(total);
        const nuevoDiv = document.createElement("div"); 
        nuevoDiv.style.width="100%";
        nuevoDiv.style.backgroundColor="red";
        nuevoDiv.style.border="solid 1px white";
        nuevoDiv.style.position="absolute";
        nuevoDiv.style.color="white";
        const titulo = document.createElement("h1");
        titulo.textContent="El area del terreno es:";
        nuevoDiv.appendChild(titulo);
        const resultado = document.createElement("h2");
        resultado.textContent = total;
        nuevoDiv.appendChild(resultado);
        const botonCerrar= document.createElement("button");
        botonCerrar.textContent="cerrar";
        nuevoDiv.appendChild(botonCerrar);
        botonCerrar.onclick = () =>{
            nuevoDiv.remove();
            ladoA.value="";
            ladoB.value="";
            ladoC.value="";
        };
    formulario.appendChild(nuevoDiv)
    e.preventDefault();
    }else if(parseFloat(ladoA.value) < parseFloat(ladoC.value) && parseFloat(ladoA.value) > 0 && parseFloat(ladoB.value) > 0 && parseFloat(ladoC.value)>0){
        triangulo = (parseFloat(ladoB.value) * (parseFloat(ladoC.value) - parseFloat(ladoA.value)))/ 2;
        rectangulo = ladoB.value * ladoA.value;
        total = triangulo + rectangulo
        console.log(total);
        const nuevoDiv = document.createElement("div"); 
        nuevoDiv.style.width="100%";
        nuevoDiv.style.backgroundColor="red";
        nuevoDiv.style.border="solid 1px white";
        nuevoDiv.style.position="absolute";
        nuevoDiv.style.color="white";
        const titulo = document.createElement("h1");
        titulo.textContent="El area del terreno es:";
        nuevoDiv.appendChild(titulo);
        const resultado = document.createElement("h2");
        resultado.textContent = total;
        nuevoDiv.appendChild(resultado);
        const botonCerrar= document.createElement("button");
        botonCerrar.textContent="cerrar";
        nuevoDiv.appendChild(botonCerrar);
        botonCerrar.onclick = () =>{
            nuevoDiv.remove();
            ladoA.value="";
            ladoB.value="";
            ladoC.value="";
        };
    formulario.appendChild(nuevoDiv)
    e.preventDefault();
    }else{
        const nuevoDiv = document.createElement("div"); 
        nuevoDiv.style.width="100%";
        nuevoDiv.style.backgroundColor="red";
        nuevoDiv.style.border="solid 1px white";
        nuevoDiv.style.position="absolute";
        nuevoDiv.style.color="white";
        const titulo = document.createElement("h1");
        titulo.textContent="ERROR LOS DATOS INGRESADOS SON INVALIDOS";
        nuevoDiv.appendChild(titulo);
        const resultado = document.createElement("h2");
        resultado.textContent = "INGRESE VALORES POSITIVOS";
        nuevoDiv.appendChild(resultado);
        const botonCerrar= document.createElement("button");
        botonCerrar.textContent="cerrar";
        nuevoDiv.appendChild(botonCerrar);
        botonCerrar.onclick = () =>{
            nuevoDiv.remove();
            ladoA.value="";
            ladoB.value="";
            ladoC.value="";
        };
    formulario.appendChild(nuevoDiv)
    e.preventDefault();
    };
};

function $(elemento){
    return document.getElementById(elemento);
};