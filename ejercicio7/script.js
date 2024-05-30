const listado = $("listado");
const mostrar = $("mostrar");
const body = $("body")
mostrar.addEventListener("click", async () => {
    mostrar.remove()
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (res.ok) {
    console.log("llegaron los datos!");
    const personas = await res.json();
    personas.forEach((persona) => {
        const item = document.createElement("li");
        const tarea = document.createElement("button");
        tarea.textContent="Ver tareas";
        item.textContent = `${persona.id} - ${persona.name} - ${persona.username} - ${persona.email} - ${persona.website} - `;
        listado.appendChild(item);
        item.appendChild(tarea);
        const botonCerrar = document.createElement("button");
        botonCerrar.textContent = "cerrar";
        tarea.addEventListener("click", async () => {
        res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (res.ok) {
            console.log("llegaron mas datos!");
        const tareas = await res.json();
        const contenedor = document.createElement("div")
        body.appendChild(contenedor);
        tareas.forEach((tarea) => {
            const itemTarea =  document.createElement("div");
            if(persona.id === tarea.userId){
                itemTarea.textContent = `${persona.name} - ${tarea.userId} - ${tarea.id} - ${tarea.title}`;
                contenedor.appendChild(itemTarea);
            }
            
            if(tarea.completed === true){
                itemTarea.style.backgroundColor="rgb(60, 247, 60)";
            }else{
                itemTarea.style.backgroundColor="rgb(250, 60, 60)";
            }
            botonCerrar.addEventListener("click", () =>{
                contenedor.remove()
            })
            
        
        });
        }
        
    });
    item.appendChild(botonCerrar);
    });
    
  } else {
    console.error("Error: no llegaron los datos");
  }
});

function $(elemento) {
  return document.getElementById(elemento);
}