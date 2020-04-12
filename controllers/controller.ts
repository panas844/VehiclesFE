
let car: CarType;

function createCar(plate:string,brand:string,color:string){
    car=new Car(plate,color,brand);
    // car.addWheel(new Wheel(2,"SEAT"));
    const result:any =document.getElementById('result')
    result.innerHTML="CAR: PLATE: " + car.plate 
     + " COLOR: " +car.color + " BRAND: " + brand 
     + " WHEELS: " + JSON.stringify(car.wheels);
     return false;
}

function addWheels(marca1:string,diametro1:number,marca2:string,diametro2:number,marca3:string,diametro3:number,marca4:string,diametro4:number){

    car.addWheel(new Wheel(diametro1,marca1))
    car.addWheel(new Wheel(diametro2,marca2))
    car.addWheel(new Wheel(diametro3,marca3))
    car.addWheel(new Wheel(diametro4,marca4))

    
}
