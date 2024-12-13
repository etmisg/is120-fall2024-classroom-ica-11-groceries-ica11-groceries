// JavaScript code goes here
let groceryItems = [];

const foodInput = document.getElementById('food-input');
const addFoodButton = document.getElementById('add-food-button');

addFoodButton.addEventListener('click', () => {
  const food = foodInput.value.trim();
  if (food) {
    console.log(`Food added: ${food}`);
    foodInput.value = '';
  } else {
    alert('Please enter a food item.');
  }
});

/* Problem 5
document.getElementById("totalCount").textContent = groceryItems.filter(
		(item) => !item.checked
	).length;
*/

/* Problem 7
groceryItems = groceryItems.filter((item) => !item.checked);
*/
