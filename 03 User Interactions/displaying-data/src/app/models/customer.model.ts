import { IContract } from './contract.model';

export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    birthdate: Date;
    imageUrl?: string;
    contracts?: IContract[];

    constructor(id: number,
        firstName?: string,
        lastName?: string,
        birthdate?: string,
        imageUrl?: string,
        contracts?: IContract[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = new Date(birthdate);
        this.imageUrl = imageUrl;
        this.contracts = contracts;
    }
    // Move to service
    getAge(): number {
        const millisecondsDiff: number = Date.now() - this.birthdate.getTime();
        const ageDate = new Date(millisecondsDiff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
