// Seleccionamos el párrafo con el id "contenido"
const contenido = document.getElementById("contenido");
 
// Insertamos el título antes del contenido
contenido.insertAdjacentHTML("beforebegin", "<h2>Mini Manual de Prácticas de Estudio para Informática</h2>");
 
// Lista de consejos
const consejos = [
    "Practica todos los días.",
    "Toma notas mientras estudias y haz resúmenes.",
    "Pregunta en clase ",
    "Utiliza  herramientas como VS Code y Git para mejorar.",
    "Practica con proyectos pequeños para aplicar lo aprendido.",
    "Divide problemas grandes en partes más pequeñas.",
    "Pide ayuda y ayuda a los demas.",
    "Repasa constantemente.",
];
 
// Creamos e insertamos la lista de consejos
contenido.innerHTML += `<ul>${consejos.map(c => `<li>${c}</li>`).join("")}</ul>`;
 
// Botón para agregar nuevos consejos
contenido.insertAdjacentHTML("afterend", `<button id="agregarConsejo">Agregar un nuevo consejo</button>`);
 
// Evento para agregar consejos
document.getElementById("agregarConsejo").addEventListener("click", () => {
    let nuevoConsejo = prompt("Escribe un nuevo consejo:");
    if (nuevoConsejo) {
        document.querySelector("ul").innerHTML += `<li>${nuevoConsejo}</li>`;
    }
});
 