// JavaScript code goes here
let groceryItems = [];

const foodInput = document.getElementById('food-input');
const quantityInput = document.getElementById('quantity-input');
const priceInput = document.getElementById('price-input');
const categoryInput = document.getElementById('category-input');
const addFoodButton = document.getElementById('add-food-button');
const groceryList = document.getElementById('grocery-list');

let totalCount = 0;
let totalPrice = 0;
const totalCountDisplay = document.createElement('p');
totalCountDisplay.textContent = `Items left to buy: ${totalCount}`;
groceryList.parentNode.appendChild(totalCountDisplay);

const totalPriceDisplay = document.createElement('p');
totalPriceDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
groceryList.parentNode.appendChild(totalPriceDisplay);

const checkAllButton = document.createElement('button');
checkAllButton.textContent = 'Check All';
checkAllButton.className = 'btn btn-primary mt-2';
groceryList.parentNode.appendChild(checkAllButton);

const clearBoughtButton = document.createElement('button');
clearBoughtButton.textContent = 'Clear Bought Items';
clearBoughtButton.className = 'btn btn-danger mt-2 ms-2';
groceryList.parentNode.appendChild(clearBoughtButton);

addFoodButton.addEventListener('click', () => {
  const food = foodInput.value.trim();
  const quantity = quantityInput.value.trim();
  const price = priceInput.value.trim();
  const category = categoryInput.value;

  if (food && quantity && price && category) {
    const itemPrice = parseFloat(price) * parseInt(quantity);

    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input me-2';

    checkbox.addEventListener('change', () => updateTotalCountAndPrice());

    listItem.appendChild(checkbox);

    const itemText = document.createTextNode(`${food}, ${quantity}, $${price} each`);
    listItem.appendChild(itemText);

    groceryItems.push({
      food,
      quantity,
      price: itemPrice,
      checked: false,
      listItem
    });

    groceryList.appendChild(listItem);

    console.log(`Added item: ${food}, ${quantity}, $${price} each`);

    totalCount++;
    updateTotalCountDisplay();

    totalPrice += itemPrice;
    updateTotalPriceDisplay();

    foodInput.value = '';
    quantityInput.value = '';
    priceInput.value = '';
    categoryInput.value = 'produce';
  } else {
    alert('Please fill in all fields to add an item.');
  }
});

function updateTotalCountAndPrice() {
  let newTotalCount = 0;
  let newTotalPrice = 0;

  groceryItems.forEach(item => {
    if (!item.checked) {
      newTotalCount++;
      newTotalPrice += item.price;
    }
  });

  totalCount = newTotalCount;
  totalPrice = newTotalPrice;

  updateTotalCountDisplay();
  updateTotalPriceDisplay();
}

function updateTotalCountDisplay() {
  totalCountDisplay.textContent = `Items left to buy: ${totalCount}`;
}

function updateTotalPriceDisplay() {
  totalPriceDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

checkAllButton.addEventListener('click', () => {
  const checkboxes = groceryList.querySelectorAll('input[type="checkbox"]');
  const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

  checkboxes.forEach(checkbox => {
    checkbox.checked = !allChecked;
  });

  totalCount = allChecked ? groceryItems.length : 0;
  totalPrice = allChecked ? groceryItems.reduce((sum, item) => sum + item.price, 0) : 0;

  updateTotalCountDisplay();
  updateTotalPriceDisplay();

  checkAllButton.textContent = allChecked ? 'Check All' : 'Uncheck All';
});

clearBoughtButton.addEventListener('click', () => {
  const checkboxes = groceryList.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(checkbox => {
    const listItem = checkbox.parentElement;
    listItem.remove();
    groceryItems = groceryItems.filter(item => item.listItem !== listItem);
  });

  totalCount = groceryItems.length;
  totalPrice = groceryItems.filter(item => !item.checked).reduce((sum, item) => sum + item.price, 0);

  updateTotalCountDisplay();
  updateTotalPriceDisplay();
});
