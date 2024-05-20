let shoppingList = [];

while (true) {
  console.log("Welcome to the Shopping List Manager!");
  console.log("1. Add item");
  console.log("2. Remove item");
  console.log("3. Display list");
  console.log("4. Exit");
  const choice = prompt("Enter your choice: ");

  switch (choice) {
    case "1":
      const addItem = prompt("Enter the item to add: ");
      shoppingList.push(addItem);
      console.log(`${addItem} added to the shopping list.`);
      break;
    case "2":
      if (shoppingList.length === 0) {
        console.log("Shopping list is empty!");
      } else {
        console.log("Shopping List:");
        for (let i = 0; i < shoppingList.length; i++) {
          console.log(`${i + 1}. ${shoppingList[i]}`);
        }
        const removeItemIndex = parseInt(prompt("Enter the item number to remove: ")) - 1;
        if (removeItemIndex >= 0 && removeItemIndex < shoppingList.length) {
          const removedItem = shoppingList.splice(removeItemIndex, 1)[0];
          console.log(`${removedItem} removed from the shopping list.`);
        } else {
          console.log("Invalid item number!");
        }
      }
      break;
    case "3":
      if (shoppingList.length === 0) {
        console.log("Shopping list is empty!");
      } else {
        console.log("Shopping List:");
        for (let i = 0; i < shoppingList.length; i++) {
          console.log(`${i + 1}. ${shoppingList[i]}`);
        }
      }
      break;
    case "4":
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid choice!");
  }
}