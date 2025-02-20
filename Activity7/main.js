
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
    productName: "bag", 
    productId: Symbol("bag001"), 
    price: 40.50, 
    isOnSale: false, 
    quantity: 30 
  },
  { 
    productName: "Shoes", 
    productId: Symbol("Shoes001"), 
    price: 60.00, 
    isOnSale: true, 
    quantity: 100 
  }
];


console.log(inventory);


let productToFreeze = inventory[0];
Object.freeze(productToFreeze);


productToFreeze.price = 19.99;  
productToFreeze.discount = 10;  
delete productToFreeze.quantity; 

console.log(productToFreeze);  


inventory[1].details = { color: "blue", size: "M" };
Object.freeze(inventory[1]);


inventory[1].details.color = "red";  
console.log(inventory[1].details.color);  


function deepFreeze(obj) {
  Object.freeze(obj);  
  Object.getOwnPropertyNames(obj).forEach(function (prop) {
    if (obj[prop] && typeof obj[prop] === 'object') {
      deepFreeze(obj[prop]);  
    }
  });
}


deepFreeze(inventory[1]);


inventory[1].details.color = "green";  
console.log(inventory[1].details.color);  