class Vehicle {
    constructor(name, fuel) {
        console.log(`I'm ${name}`)
        this.x = 0;
        this.y = 0;
        this.step = 1;
        this.name = name;
        this.fuel = fuel;
    }
    
    getCoords() {
        return `(${this.x}, ${this.y})`;
    }
  
    getFuel() {
        return `The fuel is ${this.fuel}L`;
    }
  
    useFuel() {
        this.fuel = this.fuel - this.step;
    }
  
    moveForward() {
        this.useFuel();
        this.x = this.x + this.step;
        return `Forward: ${this.getCoords()} ${this.getFuel()}`;
    }
  
    moveBack() {
        this.useFuel();
        this.x = this.x - this.step;
        return `Back: ${this.getCoords()} ${this.getFuel()}`;
    }
}

// let v = new Vehicle('Tractor', 100);
// console.log(v.moveForward()); // '(1, 0) The fuel is 99L'  
// console.log(v.moveBack()); // '(0, 0) The fuel is 98L'

class Car extends Vehicle {
    constuructor() {
        this.nitro = false;  
    }

    turnNitro() {
        this.nitro = true;
        this.step = 2;
        return this.step, 'turn nitro'
    }

    offNitro() {
        this.nitro = false
        this.step = 1
        return this.step, 'off nitro'
    }

    move(callback) {
        if (this.fuel > 0) {
          this.useFuel();
          return callback();
        }
        return "fuel is over";
    }

    moveRight() {
        return this.move(() => {
          this.y = this.y + this.step;
          return `Right: ${this.getCoords()} ${this.getFuel()}`;
        });
      }
    
      moveLeft() {
        return this.move(() => {
          this.y = this.y - this.step;
          return `Back: ${this.getCoords()} ${this.getFuel()}`;
        });
      }
}

let t = new Car('car', 2)

console.log(t.turnNitro());
console.log(t.moveRight());
