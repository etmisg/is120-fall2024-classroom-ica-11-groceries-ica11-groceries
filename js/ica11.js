// JavaScript code goes here
let groceryItems = [];

const foodInput = document.getElementById('food-input');
const quantityInput = document.getElementById('quantity-input');
const priceInput = document.getElementById('price-input');
const categoryInput = document.getElementById('category-input');
const addFoodButton = document.getElementById('add-food-button');
const groceryList = document.getElementById('grocery-list');

addFoodButton.addEventListener('click', () => {

  const food = foodInput.value.trim();
  const quantity = quantityInput.value.trim();
  const price = priceInput.value.trim();
  const category = categoryInput.value;

  if (food && quantity && price && category) {
    const listItem = document.createElement('li');
    listItem.textContent = `${food}, ${quantity}, $${price}, ${category}`;

    groceryList.appendChild(listItem);

    console.log(`Added item: ${food}, ${quantity}, $${price}, ${category}`);

    foodInput.value = '';
    quantityInput.value = '';
    priceInput.value = '';
    categoryInput.value = 'produce';
  } else {
    alert('Please fill in all fields to add an item.');
  }
});
