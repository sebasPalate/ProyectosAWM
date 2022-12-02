export class Canal {
    _id?: string;
    type: string;
    mecanic: string;
    description: string;

    constructor(type: string, mecanic: string, description: string) {
        this.type = type;
        this.mecanic = mecanic;
        this.description = description;
    }

}
