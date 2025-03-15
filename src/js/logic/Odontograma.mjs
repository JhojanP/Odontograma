import {DienteBuilder} from "../utils/OdontogramaBuilder.mjs"
import { PiezasInfo } from "../models/PiezasInfo.mjs";
import { Ubicacion,Lados,FDINumerosPiezas } from "../models/Util.mjs";
export class Odontograma {
    constructor() { 
        this.dientes = this.generarDientes();
    }

    generarDientes() { 
        let dientes = [];
        let index = 0; 
        Ubicacion.forEach((ubicacion, uIndex) => {
            Lados.forEach((lado, ladoIdx) => {
                for (const diente of PiezasInfo) {
                    dientes.push(
                        new DienteBuilder()
                            .setNombre(`${diente.nombre} ${ubicacion} ${lado}`)
                            .setAbreviatura(diente.abreviatura)
                            .setFuncion(diente.funcion)
                            .setUbicacion(ubicacion)
                            .setLado(lado)
                            .setNumeroFDI(FDINumerosPiezas[index])
                            .setCaras(diente.Superficie)
                            .setImagenHTML(this.obtenerSvgPieza(FDINumerosPiezas[index],diente))
                            .build()
                    );
                    index++;
                }
            }) 
        }); 
        return  dientes;
    }

    obtenerHTMLDiente(numero,diente) {
        return ` 
            <div class="pieza" data-fdiNumber="${numero}" data-abrev="${diente.abreviatura}" data-nombre="${diente.nombre}" >
                <div class="superior">
                    <div class="t1">  </div>
                    <div class="t2">  </div>
                    <div class="t3">  </div>
                </div>
                <div class="cuadrado">  
                    <div class="triangulo"></div>
                    <div class="triangulo"></div>
                    <div class="triangulo"></div>
                    <div class="triangulo"></div>
                    <div class="cuadrado-interno">                         
                    </div>
                </div> 
            </div> 
        `;
    }

    obtenerSvgPieza(numero,diente){
        return ` <div class="pieza" data-fdiNumber="${numero}" data-abrev="${diente.abreviatura}" data-nombre="${diente.nombre}" >
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com" viewBox="0 0 200 300">
                    <g id="pieza-${numero}-${diente.abreviatura}" transform="matrix(0.999406, 0, 0, 0.989476, -199.88092, 2.620914)" style="">
                        <path d="M 300 249.08 L 400 300 L 200 300 L 300 249.08 Z" bx:shape="triangle 200 249.08 200 50.92 0.5 0 1@c48d62c4" style="stroke: rgb(0, 0, 0); fill: rgb(1, 250, 1);"/>
                    </g>
                    <g transform="matrix(0.998357, 0, 0, 1, -199.342972, -0.000091)" style="">
                        <path d="M 300 -250.33 L 400 -199.997 L 200 -199.997 L 300 -250.33 Z" bx:shape="triangle 200 -250.33 200 50.333 0.5 0 1@6d8faeab" style="stroke: rgb(0, 0, 0); fill: rgb(255, 0, 0);" transform="matrix(1, 0, 0, -1, 0, 0)"/>
                    </g>
                    <g transform="matrix(0.995832, 0, 0, 0.987255, -198.749756, 2.548904)" style="">
                        <path d="M 263.884 145.37 L 313.884 245.37 L 213.884 245.37 L 263.884 145.37 Z" bx:shape="triangle 213.884 145.37 100 100 0.5 0 1@1fd8b3bc" style="stroke: rgb(0, 0, 0); fill: rgb(192, 3, 255); transform-box: fill-box; transform-origin: 50% 50%;" transform="matrix(0, -1, 1, 0, 86.11644, 54.630096)"/>
                    </g>
                    <g transform="matrix(0.999764, 0, 0, 0.999062, -199.423477, 0.450205)" style="">
                        <path d="M 275.161 91.759 L 325.161 191.759 L 225.161 191.759 L 275.161 91.759 Z" bx:shape="triangle 225.161 91.759 100 100 0.5 0 1@090de300" style="stroke: rgb(0, 0, 0); fill: rgb(0, 7, 255); transform-box: fill-box; transform-origin: 50% 50%;" transform="matrix(0, 1, -1, 0, -25.161011, 108.240685)"/>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -200, -0.000091)">
                        <rect x="226.167" y="213.153" width="73.833" height="36.248" style="stroke: rgb(0, 0, 0); fill: rgb(3, 255, 248);"/>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -200, -0.000091)">
                        <rect x="300" y="213.153" width="74.011" height="36.324" style="stroke: rgb(0, 0, 0); fill: rgb(250, 236, 11);"/>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -200, -0.000091)">
                        <rect x="226.167" y="249.325" width="73.833" height="37.521" style="stroke: rgb(0, 0, 0); fill: rgb(125, 159, 77);"/>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -200, -0.000091)">
                        <rect x="300" y="249.316" width="74.053" height="37.531" style="stroke: rgb(0, 0, 0); fill: rgb(194, 167, 236);"/>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -200, -0.000091)">
                        <path d="M 299.896 0 L 356.332 200 L 243.46 200 L 299.896 0 Z" bx:shape="triangle 243.46 0 112.872 200 0.5 0 1@0b202c5e" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255);"/>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -200, -0.000091)">
                        <path d="M 350 33.162 L 400 200 L 300 200 L 350 33.162 Z" bx:shape="triangle 300 33.162 100 166.838 0.5 0 1@4c6cd8e9" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255);"/>
                    </g>
                    <g transform="matrix(0.993264, 0, 0, 0.994649, -197.979202, 0.180454)" style="">
                        <path d="M 250 33.737 L 300 200 L 200 200 L 250 33.737 Z" bx:shape="triangle 200 33.737 100 166.263 0.5 0 1@09d3a07a" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255);"/>
                    </g>
                    <defs>
                        <bx:grid x="0" y="3.681" width="100" height="149.696"/>
                    </defs>
                    </svg> 
        </div> 
    `;
    }


 
    obtenerPorNumeroFDI(numero) {
        return this.dientes.find(d => d.numeroFDI === numero);
    }

    obtenerDientesPorUbicacionYLado(ubicacion, lado) {
        return this.dientes.filter(diente => 
            diente.ubicacion === ubicacion && diente.lado === lado
        );
    }

    obtenerParteSuperiorDerecha() {
        return this.obtenerDientesPorUbicacionYLado("Superior", "Derecho");
    }

    obtenerParteSuperiorIzquierda() {
        return this.obtenerDientesPorUbicacionYLado("Superior", "Izquierdo");
    }

    obtenerParteInferiorDerecha() {
        return this.obtenerDientesPorUbicacionYLado("Inferior", "Derecho");
    }

    obtenerParteInferiorIzquierda() {
        return this.obtenerDientesPorUbicacionYLado("Inferior", "Izquierdo");
    }
 
    generarTablaHTML() {
        return `
        <table border="1">
            <tr>
                <th>FDI</th>
                <th>Nombre</th>
                <th>Ubicación</th>
                <th>Lado</th>
                <th>Función</th>
                <th>Caras</th>
                <th>Img</th>
            </tr>
            ${this.dientes.map(diente => `
            <tr>
                <td>${diente.numeroFDI}</td>
                <td>${diente.nombre}</td>
                <td>${diente.ubicacion}</td>
                <td>${diente.lado}</td>
                <td>${diente.funcion}</td>
                <td>${diente.caras.join(", ")}</td>
                <td>${diente.imagenHtml }</td>
            </tr>`).join('')}
        </table>`;
    }

    renderOdontograma(){
        return this.dientes.map(diente =>diente.imagenHtml).join('') ;
    }

    renderParteSuperiorDerecha(){
        return this.obtenerParteSuperiorDerecha().map(diente =>diente.imagenHtml).join('') 
    }
    renderParteSuperiorIzquierda(){
        return this.obtenerParteSuperiorIzquierda().map(diente =>diente.imagenHtml).join('') 
    }
    renderParteInferiorDerecha(){
        return this.obtenerParteInferiorDerecha().map(diente =>diente.imagenHtml).join('') 
    }
    renderParteInferiorIzquierda(){
        return this.obtenerParteInferiorIzquierda().map(diente =>diente.imagenHtml).join('') 
    }
}
