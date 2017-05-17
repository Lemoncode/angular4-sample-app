export class Customer {
    firstName: string;
    lastName: string;
    birthdate: Date;
    imageUrl?: string;

    constructor(firstName?: string,
        lastName?: string,
        birthdate?: string,
        imageUrl?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = new Date(birthdate);
        this.imageUrl = imageUrl;
    }

    getAge(): number {
        const millisecondsDiff: number = Date.now() - this.birthdate.getTime();
        const ageDate = new Date(millisecondsDiff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


/*
function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
*/
