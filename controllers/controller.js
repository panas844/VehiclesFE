"use strict";
// import Car, { CarType } from '../models/car'
var car;
function createCar() {
    var plate = document.getElementById('plate');
    var brand = document.getElementById('brand');
    var color = document.getElementById('color');
    var letterNumber = /^[0-9a-zA-Z]+$/;
    var numbers = /^[0-9]+$/;
    var acumErrores = 0;
    if (brand.value == "") {
        brand.classList.add("is-invalid");
        var errorBrand = document.getElementById("errorBrand");
        errorBrand.textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    if (color.value == "") {
        color.classList.add("is-invalid");
        var errorColor = document.getElementById("errorColor");
        errorColor.textContent = "Es campo es obligatorio";
        acumErrores++;
    }
    if (plate.value == "" || plate.value.length !== 7 || !plate.value.match(letterNumber)) {
        plate.classList.add("is-invalid");
        var errorPlate = document.getElementById("errorPlate");
        errorPlate.textContent = "We need 4 letters and 3 numbers";
        acumErrores++;
    }
    if (acumErrores > 0) {
        return false;
    }
    else {
        var numberOfLetters = 0;
        var numberOfNumbers = 0;
        for (var i = 0; i < 7; i++) {
            if (plate.value.charAt(i).match(numbers)) {
                numberOfNumbers++;
            }
            else {
                numberOfLetters++;
            }
        }
        if (numberOfLetters === 3 || numberOfNumbers === 4) {
            car = new Car(plate.value, color.value, brand.value);
            document.getElementById('carForm').hidden = true;
            document.getElementById('wheelForm').hidden = false;
            document.getElementById("carImage").hidden = false;
            // Print the new car data
            document.getElementById('result').innerHTML = "CAR: PLATE: " + car.plate
                + " COLOR: " + color.value + " BRAND: " + brand.value
                + " WHEELS: " + JSON.stringify(car.wheels);
            document.getElementById("carImage").style.color = document.getElementById("color").value;
            return false;
        }
    }
    // return true
}
function addWheels() {
    var numberErrors = 0;
    var form = document.forms.namedItem("wheelForm");
    var marcas = [];
    var diametros = [];
    for (var i = 0; i < 4; i++) {
        marcas[i] = form["marcarueda" + String(i + 1)];
        diametros[i] = form["diametrorueda" + String(i + 1)];
    }
    // var marca1 = form["marcarueda1"] 
    // var marca2 = form["marcarueda2"]
    // var marca3 = form["marcarueda3"]
    // var marca4 = form["marcarueda4"]
    // var diametro1 = form["diametrorueda1"]
    // var diametro2 = form["diametrorueda2"]
    // var diametro3 = form["diametrorueda3"]
    // var diametro4 = form["diametrorueda4"]
    diametros.forEach(function (diametro, index) {
        if (diametro.value <= 0.4 || diametro.value >= 2) {
            numberErrors++;
            diametro.classList.add("is-invalid");
            document.getElementById("errorDiametro" + String(index + 1)).textContent = "The dieameter needs to be between 0.4 and 2";
        }
    });
    // if (diametro1.value <= 0.4 || diametro1.value >= 2) {
    //     numberErrors++
    //     diametro1.classList.add("is-invalid");
    //     (document.getElementById("errorDiametro1") as HTMLDivElement).textContent = "The dieameter needs to be between 0.4 and 2"
    // } if (diametro2.value <= 0.4 || diametro2.value >= 2) {
    //     numberErrors++
    //     diametro2.classList.add("is-invalid");
    //     (document.getElementById("errorDiametro2") as HTMLDivElement).textContent = "The dieameter needs to be between 0.4 and 2"
    // } if (diametro3.value <= 0.4 || diametro3.value >= 2) {
    //     numberErrors++
    //     diametro3.classList.add("is-invalid");
    //     (document.getElementById("errorDiametro3") as HTMLDivElement).textContent = "The dieameter needs to be between 0.4 and 2"
    // } if (diametro4.value <= 0.4 || diametro4.value >= 2) {
    //     numberErrors++
    //     diametro4.classList.add("is-invalid");
    //     (document.getElementById("errorDiametro4") as HTMLDivElement).textContent = "The dieameter needs to be between 0.4 and 2"
    // }
    if (numberErrors > 0) {
        return false;
    }
    else {
        diametros.forEach(function (diametro, index) {
            car.addWheel(new Wheel(diametro.value, marcas[index].value));
        });
        // return true;
        //   car.addWheel(new Wheel(diametro1.value, marca1.value));
        // car.addWheel(new Wheel(diametro2.value, marca2.value));
        // car.addWheel(new Wheel(diametro3.value, marca3.value));
        // car.addWheel(new Wheel(diametro4.value, marca4.value));
        var turns = void 0;
        (function (turns) {
            turns[turns["First"] = 0] = "First";
            turns[turns["Second"] = 1] = "Second";
            turns[turns["Third"] = 2] = "Third";
            turns[turns["Fourth"] = 3] = "Fourth";
        })(turns || (turns = {}));
        var wheels = car.wheels;
        var output = '';
        wheels.forEach(function (wheel, index) {
            output = output + (turns[index] + " Wheel Diameter is: <b>" + wheel.diameter + "</b> and the " + turns[index] + " wheel Brand is: <b>" + wheel.brand + "</b><br>");
        });
        document.getElementById('resultWheels1').innerHTML = output;
        return false;
    }
}
