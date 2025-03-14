import {Odontograma} from "./logic/Odontograma.mjs";
 

const app=document.getElementById("App");
/*
for (let index = 0; index < 20; index++) {
    app.insertAdjacentHTML("beforeend",` <div class="pieza">
        <div class="superior">
            <div class="triangulo t1">  </div>
            <div class="triangulo t2">  </div>
            <div class="triangulo t3">  </div>
        </div>
        <div class="cuadrado">  
            <div class="aspa"></div>
            <div class="cuadrado-interno">
                <div class="cruz"></div>
            </div>
        </div> 
    </div>`)
    
} */
// Generamos los 32 dientes automáticamente
 
 // Crear instancia del odontograma
// Crear odontograma y probar
const odontograma = new Odontograma();

console.log("Dientes de la parte superior derecha:");
console.log(odontograma.obtenerParteSuperiorDerecha());

console.log("\nDiente con número FDI 16:");
console.log(odontograma.obtenerPorNumeroFDI(16));

// Agregar la tabla al HTML (si es un entorno web)
app.innerHTML = odontograma.generarTablaHTML();
 