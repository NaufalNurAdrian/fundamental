class Product {
    productName = "";
    productPrice = 0;
  
    constructor(name: string, price: number) {
      this.productName = name;
      this.productPrice = price;
    }
    getName() {
      return this.productName;
    }
    getPrice() {
      return this.productPrice;
    }
  }
  
  class Transaction extends Product {
    qty = 0;
    constructor(name: string, price: number, num: number) {
      super(name, price);
      this.qty = num;
    }
    getQty() {
      return this.qty;
    }
    getTotalPrice() {
      return this.productPrice * this.qty;
    }
  }
  
  let cart: Array<Transaction> = [];
  
  function addToCart(item: Transaction) {
    cart.push(item);
    console.log(`${item.getName()} added to cart. Quantity: ${item.getQty()}`);
  }
  
  function showTotal(cart: Array<Transaction>) {
    let total: number = 0;
    for (let item of cart) {
      total += item.getTotalPrice();
    }
    return total;
  }
  
  function transactionInfo(cart: Array<Transaction>) {
    console.log("\n");
    console.log("======================================================");
    console.log(`You have made ${cart.length} successful transactions`);
    console.log(`You purchased : `);
    let total: number = 0;
    for (let item of cart) {
      total += item.getTotalPrice();
      if (item.getQty() <= 1) {
        console.log(`${item.getQty()} ${item.getName()} for ${Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(item.getTotalPrice())}`);
      } else {
        console.log(`${item.getQty()} ${item.getName()}s for ${Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(item.getTotalPrice())}`);
      }
    }
    console.log("======================================================");
    console.log(`== Your total transaction is ${Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(showTotal(cart))} ==`);
    console.log("======================================================");
  }
  
  const product1 = new Product("Laptop", 5000000);
  const product2 = new Product("Bycicles", 2500000);
  const product3 = new Product("Tv", 6000000);
  const product4 = new Product("Smartphone", 10000000);
  
  const transaction1 = new Transaction(product1.getName(), product1.getPrice(), 2);
  const transaction2 = new Transaction(product2.getName(), product2.getPrice(), 3);
  const transaction3 = new Transaction(product3.getName(), product3.getPrice(), 6);
  const transaction4 = new Transaction(product4.getName(), product4.getPrice(), 1);
  
  addToCart(transaction1);
  addToCart(transaction2);
  addToCart(transaction3);
  addToCart(transaction4);
  
  transactionInfo(cart)