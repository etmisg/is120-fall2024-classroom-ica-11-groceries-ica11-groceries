// JavaScript code goes here
let groceryItems = [];

const foodInput = document.getElementById('food-input');
const quantityInput = document.getElementById('quantity-input');
const priceInput = document.getElementById('price-input');
const categoryInput = document.getElementById('category-input');
const addFoodButton = document.getElementById('add-food-button');
const groceryList = document.getElementById('grocery-list');

let totalCount = 0;
const totalCountDisplay = document.createElement('p');
totalCountDisplay.textContent = `Items left to buy: ${totalCount}`;
groceryList.parentNode.appendChild(totalCountDisplay);

addFoodButton.addEventListener('click', () => {
  const food = foodInput.value.trim();
  const quantity = quantityInput.value.trim();
  const price = priceInput.value.trim();
  const category = categoryInput.value;

  if (food && quantity && price && category) {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input me-2';

    checkbox.addEventListener('change', updateTotalCount);

    listItem.appendChild(checkbox);

    const itemText = document.createTextNode(`${food}, ${quantity}, $${price}, ${category}`);
    listItem.appendChild(itemText);

    groceryList.appendChild(listItem);

    console.log(`Added item: ${food}, ${quantity}, $${price}, ${category}`);

    totalCount++;
    updateTotalCountDisplay();

    foodInput.value = '';
    quantityInput.value = '';
    priceInput.value = '';
    categoryInput.value = 'produce';
  } else {
    alert('Please fill in all fields to add an item.');
  }
});

function updateTotalCountDisplay() {
  totalCountDisplay.textContent = `Items left to buy: ${totalCount}`;
}

function updateTotalCount() {
  const checkboxes = groceryList.querySelectorAll('input[type="checkbox"]');
  const uncheckedCount = Array.from(checkboxes).filter(checkbox => !checkbox.checked).length;
  totalCount = uncheckedCount;
  updateTotalCountDisplay();
}
