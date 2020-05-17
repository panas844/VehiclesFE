
type CarType=InstanceType<typeof Car>
// START CAR
class Car { 
    _plate:string;
    _color:string;
    _brand:string;
    _wheels:Wheel[]=new Array();
    constructor(plate: string,color: string, brand: string){
        this._plate=plate;
        this._color=color;
        this._brand=brand;
    }
    get plate(): string {
        return this._plate
    }

    get color(): string {
        return this._color
    }

    get brand(): string {
        return this._brand
    }

    get wheels(): Wheel[] {
        return this._wheels
    }

     
    addWheel(wheel: Wheel): void {
        this._wheels.push(wheel)
    }
    }