const formulario = $("formulario");
    const mensaje = $("mensaje");
    const edad = $("edad");

    formulario.addEventListener("submit", (e) => {

        if (mensaje.textContent == "Todos los datos son correctos"){
            mensaje.textContent="datos enviados"
            e.preventDefault();
        }else{
            mensaje.style.color = "red";
            mensaje.textContent="datos no enviados"
            e.preventDefault();
        }
      
    });
    formulario.addEventListener("focusout", () => {
      mensaje.style.color = "red";
      // Verificar campos
      if (formulario["nombre"].value === "") {
        mensaje.textContent = "Nombre vacio";
      } else if(formulario["nombre"].value.length > 50){
        mensaje.textContent = "Nombre solo acepta hasta 50 caracteres"
      } else if (formulario["apellido"].value === "") {
        mensaje.textContent = "Apellido vacio";
      } else if (formulario["apellido"].value.length > 50){
        mensaje.textContent="Apellido solo acepta hasta 50 caracteres"
      } else if (formulario["edad"].value < 0) {
        mensaje.textContent = "La edad es negativa";
      }  else if (formulario["edad"].value == "") {
        mensaje.textContent = "La edad esta vacia";
      } else if (formulario["edad"].value < 18) {
        mensaje.textContent = "No se puede enviar menor de edad";
      } else if(parseFloat(formulario["estatura"].value) < 0){
        mensaje.textContent="La estatura es negativa "
      }else if(formulario["estatura"].value == ""){
        mensaje.textContent="La estatura esta vacia "
      }else if(parseFloat(formulario["estatura"].value) > 230){
        mensaje.textContent="La estatura es mayor a 230cm "
      }else if(!formulario["email"].value.includes("@")){
        mensaje.textContent="Email debe contener: @ "
      } else {
        mensaje.textContent = "Todos los datos son correctos";
        mensaje.style.color = "green";
      }
    });

    function $(elemento) {
      return document.getElementById(elemento);
    }