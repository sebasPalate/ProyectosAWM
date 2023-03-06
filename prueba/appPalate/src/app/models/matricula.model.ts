export class Matricula {
    _id?: string;
    marca: string;
    modelo: string;
    color: string;
    placa: string;
   /*  fecha: string; */

    constructor(marca: string, modelo: string, color: string, placa: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.placa = placa;
        /* this.fecha = fecha; */
    }
}