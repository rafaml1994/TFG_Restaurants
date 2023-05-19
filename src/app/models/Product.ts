export interface Product {
    id:number;
    code?:string;
    name?:string;
    direccion?:number[];
    description?:string;
    price?:number;
    primeros?:string[];
    segundos?:string[];
    postres?:string[];
    image?:string;
    location:number[];
    DistanceFromUser?:String;
}