// shapes
// calculate area and perimeter
// simple - single function calculate

interface Shape {
    area(): number;
    perimeter(): number;
}

export class Circle implements Shape {
    constructor(private radius: number) {}

    area() : number {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() : number {
        return 2 * Math.PI * this.radius;
    }
}

export class Rectangle implements Shape {
    constructor(private width:number, private height: number) {}

    area () : number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

export const calculateTotalArea = (shape: Shape) : number => {
    return shape.area();
}

// below code are what the user of this class will implement
// meaning, below should be at different class
let circle: Circle = new Circle(10);
let rectangle: Rectangle = new Rectangle(10, 20);

console.log("Area of Circle: ", calculateTotalArea(circle));
console.log("Area of Rectangle: ", calculateTotalArea(rectangle));