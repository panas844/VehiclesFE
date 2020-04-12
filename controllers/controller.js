"use strict";
var car;
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
    // car.addWheel(new Wheel(2,"SEAT"));
    var result = document.getElementById('result');
    result.innerHTML = "CAR: PLATE: " + car.plate
        + " COLOR: " + car.color + " BRAND: " + brand
        + " WHEELS: " + JSON.stringify(car.wheels);
    return false;
}
function addWheels(marca1, diametro1, marca2, diametro2, marca3, diametro3, marca4, diametro4) {
    car.addWheel(new Wheel(diametro1, marca1));
    car.addWheel(new Wheel(diametro2, marca2));
    car.addWheel(new Wheel(diametro3, marca3));
    car.addWheel(new Wheel(diametro4, marca4));
}
