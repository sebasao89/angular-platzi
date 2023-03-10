// ----------VARIABLES----------------------------------------
const usrname: string = 'Sebasao'
let user: string | number = 'Sebasao'
user = 20

// ----------METODODOS----------------------------------------
const suma = (a: number, b:number) => {
    return a + b
}

suma(10, 34)

// ----------CLASES LARGA Y CORTA----------------------------------------
class Person {
    age:number;
    lastname: string;

    constructor(edad:number, apellido: string) {
        this.age = edad
        this.lastname = apellido
    }
}

const marleny = new Person(54, 'Ortegon')
marleny.lastname


class Car {

    // Al declararlas publicas en el constructor lo vuelve un atributo
    constructor(public ruedas:number, public marca: string) {
        
    }
}

const myCar = new Car(4, 'Mazda')
myCar.marca