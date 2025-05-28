// class Animal {
//     constructor(public name: string) {}

//     move(distance: number): void {
//         console.log(`${this.name} moved ${distance} meter.`)
//     }
// }

// class Dog extends Animal {
//     constructor(public name: string = 'dog') {
//         super(name)
//     }
// }

// let myDog = new Dog();

// console.log(myDog.move(10));

class Product {
    constructor(
        public id: string, 
        public price: number, 
        public description: string
    ) {}

    display(): void {
        console.log(`ID: ${this.id}, Price:  ${this.price}, Desc: ${this.description}.`)
    }
}

class Book extends Product {
    constructor(
        public id: string, 
        public price: number, 
        public description: string,
        public author: string, 
        public title: string
    ) {
        super(id, price, description)
    }

    display(): void {
        super.display();
        console.log(
            `Author: ${this.author}, Title: ${this.title}`
        )
    }
}


class Electronic extends Product {
    constructor(
        public id: string, 
        public price: number, 
        public description: string,
        public brand: string, 
        public model: string
    ) {
        super(id, price, description)
    }

    display(): void {
        super.display();
        console.log(
            `Brand: ${this.brand}, Model: ${this.model}`
        )
    }
}



// on client side

let book = new Book('1', 19.99, 'A good book', 'John Doe', 'This book is by John Doe');

book.display();

let laptop = new Electronic('2', 999.99, 'A good laptop', 'Apple', 'MacBook Pro');

laptop.display();