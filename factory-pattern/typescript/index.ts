
abstract class Car {
    constructor(public model: string, public productionYear: number) {}

    abstract displayCarInfo(): void;
}

class Sedan extends Car {
    public displayCarInfo(): void {
        console.log(`This is a Sedan car. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class SUV extends Car {
    public displayCarInfo(): void {
        console.log(`This is a SUV car. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class Hacthback extends Car {
    public displayCarInfo(): void {
        console.log(`This is a Hacthback car. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class CarFactory {
    public createCar(type: "sedan" | "suv" | "hatchback", model: string, productionYear:number): Car {
        switch (type) {
            case "sedan":
                return new Sedan(model, productionYear);
            case "suv":
                return new SUV(model, productionYear);
            case "hatchback":
                return new Hacthback(model, productionYear);
            default:
                throw new Error("Invalid car type");
        }   
    }
}


//============================================

const carFactory = new CarFactory();

const sedan = carFactory.createCar("sedan", "Toyota Camry", 2022);
sedan.displayCarInfo();