// JavaScript code goes here
let groceryItems = [];

const foodInput = document.getElementById('food-input');
const addFoodButton = document.getElementById('add-food-button');
const groceryList = document.getElementById('grocery-list');

addFoodButton.addEventListener('click', () => {
  const food = foodInput.value.trim();
  if (food) {
    const listItem = document.createElement('li');
    listItem.textContent = food;

    groceryList.appendChild(listItem);

    console.log(`Food added: ${food}`);

    foodInput.value = '';
  } else {
    alert('Please enter a food item.');
  }
});
