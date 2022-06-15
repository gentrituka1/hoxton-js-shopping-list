let shoppingList = [
    {name: "Milk", price: 1.2}, 
    {name: "Cocoa", price: 2}, 
    {name: "Salad", price: 2},
    {name: "Carrots", price: 2},
    {name: "Tomatoes", price: 2.5},
    {name: "Ready Meals", price: 5}
]

let task = prompt("Do you want to add an item? (Yes or No)")
if (task.toLowerCase() === "yes") {
  let newName = prompt("Enter the name of the item:");
  let newItem = {name: newName};
  newItem.price = Number(prompt("Enter a price for the given item:"));
  shoppingList.push(newItem);
}
console.log(shoppingList);