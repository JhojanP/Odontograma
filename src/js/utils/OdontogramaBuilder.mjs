import {Pieza} from "../models/Pieza.mjs"
export class DienteBuilder {
    constructor() {
        this.nombre = "";
        this.abreviatura = "";
        this.funcion = "";
        this.ubicacion = "";
        this.lado = "";
        this.numeroFDI = 0;
        this.caras = [];
        this.imagenHtml="";
    }

    setNombre(nombre) {
        if (!nombre) throw new Error("El nombre del diente es obligatorio.");
        this.nombre = nombre;
        return this;
    }

    setAbreviatura(abreviatura) {
        if (!abreviatura) throw new Error("La abreviatura es obligatoria.");
        this.abreviatura = abreviatura;
        return this;
    }

    setFuncion(funcion) {
        if (!funcion) throw new Error("La función del diente es obligatoria.");
        this.funcion = funcion;
        return this;
    }

    setUbicacion(ubicacion) {
        if (ubicacion !== "Superior" && ubicacion !== "Inferior") 
            throw new Error("Ubicación debe ser 'Superior' o 'Inferior'.");
        this.ubicacion = ubicacion;
        return this;
    }

    setLado(lado) {
        if (!["Derecho", "Izquierdo"].includes(lado)) 
            throw new Error("Lado debe ser 'Derecho' o 'Izquierdo'.");
        this.lado = lado;
        return this;
    }

    setNumeroFDI(numeroFDI) {
        if (isNaN(numeroFDI) || numeroFDI < 11 || numeroFDI > 48) 
            throw new Error("Número FDI inválido.");
        this.numeroFDI = numeroFDI;
        return this;
    }

    setCaras(caras) {
        if (!Array.isArray(caras) || caras.length === 0) 
            throw new Error("Debe especificar al menos una cara del diente.");
        this.caras = caras;
        return this;
    }

    setImagenHTML(html) {  
        this.imagenHtml = html;
        return this;
    }

    build() {
        return new Pieza(
            this.nombre,
            this.abreviatura,
            this.funcion,
            this.ubicacion,
            this.lado,
            this.numeroFDI,
            this.caras,
            this.imagenHtml
        );
    } 
}