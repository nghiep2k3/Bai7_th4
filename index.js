var Product = /** @class */ (function () {
    function Product(n, p, a) {
        this.name = n;
        this.price = p;
        this.amount = a;
    }
    Product.prototype.addProduct = function (add) {
        this.amount += add;
    };
    return Product;
}());
;
var Customer = /** @class */ (function () {
    function Customer(name, quantityOfProducts) {
        this.name = name;
        this.quantityOfProducts = quantityOfProducts;
    }
    Customer.prototype.buyProduct = function (product, quantity) {
        if (product.amount > quantity) {
            product.amount -= quantity;
            this.quantityOfProducts += quantity;
        }
        else {
            console.log('Out of product');
            return;
        }
    };
    return Customer;
}());
;
var shirt = new Product('shirt', 300000, 20);
console.log(shirt.name);
shirt.addProduct(10);
console.log(shirt.amount, 'Amount product');
var customer1 = new Customer('customer1', 0);
customer1.buyProduct(shirt, 4);
console.log(customer1.quantityOfProducts, 'Quantity of product customer');
console.log(shirt.amount, 'Amount product after customer buy');
