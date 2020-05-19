class Wheel{
    _diameter:number
    _brand:string

    constructor(diameter : number, brand: string){
        this._diameter=diameter;
        this._brand=brand;
    }

    get diameter(){
        return this._diameter
    }

    get brand(){
        return this._brand
    }

} 