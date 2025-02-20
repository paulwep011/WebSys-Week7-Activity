let productName = "T-Shirt";   
let productId = Symbol("uniqueId");   
let price = 25.99;   
let isOnSale = true;   
let quantity = 50;


console.log(typeof productName);  
console.log(typeof productId);    
console.log(typeof price);        
console.log(typeof isOnSale);     
console.log(typeof quantity);     


let inventory = [
  { 
    productName: "T-Shirt", 
    productId: Symbol("T-Shirt001"), 
    price: 25.99, 
    isOnSale: true, 
    quantity: 50 
  },
  { 
    productName: "Jeans", 
    productId: Symbol("Jeans001"), 
    price: 40.50, 
    isOnSale: false, 
    quantity: 30 
  },
  { 
    productName: "Sneakers", 
    productId: Symbol("Sneakers001"), 
    price: 60.00, 
    isOnSale: true, 
    quantity: 100 
  }
];


console.log(inventory);