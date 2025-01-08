// Car object
const car = {
    make: 'Toyota',
    model: 'innova',
    year: 2021,
    getDetails: function () {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

const electricCar = Object.create(car);
electricCar.batteryCapacity = '40 kWh';
electricCar.getBatteryInfo = function () {
    return `Battery capacity: ${this.batteryCapacity}`;
};


console.log(car.getDetails());
console.log(electricCar.getDetails());
console.log(electricCar.getBatteryInfo()); 
