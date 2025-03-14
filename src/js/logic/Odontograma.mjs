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
                            .build()
                    );
                    index++;
                }
            }) 
        }); 
        return  dientes;
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
            </tr>
            ${this.dientes.map(diente => `
            <tr>
                <td>${diente.numeroFDI}</td>
                <td>${diente.nombre}</td>
                <td>${diente.ubicacion}</td>
                <td>${diente.lado}</td>
                <td>${diente.funcion}</td>
                <td>${diente.caras.join(", ")}</td>
            </tr>`).join('')}
        </table>`;
    }

}
