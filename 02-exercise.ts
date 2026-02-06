class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
class Transaction {
  products: { product: Product; qty: number }[] = [];
  total: number = 0;

  // Add product
  addToCart(product: Product, qty: number): void {
    this.products.push({ product, qty });
    this.total += product.price * qty;
  }

  // Show total
  showTotal(): number {
    return this.total;
  }

  // Checkout
  checkout() {
    return {
      products: this.products,
      total: this.total,
    };
  }
}

const product1 = new Product("Laptop", 15_000_000);
const product2 = new Product("Mouse", 250_000);

const transaction = new Transaction();

transaction.addToCart(product1, 1);
transaction.addToCart(product2, 2);

console.log("Total:", transaction.showTotal());

console.log("Checkout:", transaction.checkout());
