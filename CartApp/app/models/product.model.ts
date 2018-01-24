export class Product
{
  id:string;
  name:string;
  price:number;
  discription:string;

  constructor(id:string, name:string, price:number, discription?:string){
    this.id = id;
    this.name = name;
    this.discription = discription;
    this.price = price;
  }
}
