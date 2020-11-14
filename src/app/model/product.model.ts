export class Product {
    id: number;
    name: String;
    price: number;
    quantity: number;

    constructor(id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
