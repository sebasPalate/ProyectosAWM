export class Agency {
    // Base de datos no relacional. Es auto generado
    _id?: string;
    name: string;
    address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}