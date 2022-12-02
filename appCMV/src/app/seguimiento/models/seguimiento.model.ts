export class Canal {
    _id?: string;
    firstName: string;
    lastName: string;
    address: string;
    speciality: string;

    constructor(firstName: string, lastName: string, address: string, speciality: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.speciality = speciality;
    }

}
