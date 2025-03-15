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
 
const odontograma = new Odontograma();   
const cuadranteSuperiorDerecho =document.getElementById("cuadranteSuperiorDerecho");
const cuadranteSuperiorIzquierdo =document.getElementById("cuadranteSuperiorIzquierdo");
const cuadranteInferiorDerecho =document.getElementById("cuadranteInferiorDerecho");
const cuadranteInferiorIzquierdo =document.getElementById("cuadranteInferiorIzquierdo");

cuadranteSuperiorDerecho.innerHTML=odontograma.renderParteSuperiorDerecha();
cuadranteSuperiorIzquierdo.innerHTML=odontograma.renderParteSuperiorDerecha();
cuadranteInferiorDerecho.innerHTML=odontograma.renderParteSuperiorDerecha();
cuadranteInferiorIzquierdo.innerHTML=odontograma.renderParteSuperiorDerecha();
// Agregar la tabla al HTML (si es un entorno web)
//app.innerHTML = odontograma.renderOdontograma();

const piezas=document.querySelectorAll(".pieza");
 
const myModal = new bootstrap.Modal(document.getElementById("ModalPieza") , {
    keyboard: false
  }) 
const nombrePieza=document.getElementById("nombrePieza")
const resultado=document.getElementById("resultado")
  
piezas.forEach(pieza => { 
    pieza.addEventListener("click", function(e) {
        console.log(pieza.getAttribute("data-fdinumber"))
        let info= odontograma.obtenerPorNumeroFDI(parseInt(pieza.getAttribute("data-fdinumber")))
        nombrePieza.innerText=info.nombre;
        resultado.textContent = JSON.stringify(info, null, 4);
        console.log(info)
        myModal.show()
    });
});