document.getElementById('calculate').addEventListener('click', function() {
	const mainDishes = document.getElementsByName('main');
	const sideItems = document.getElementsByName('side');
	const numberOfPeople = document.getElementById('people').value;
	const stateTaxRate = document.getElementById('tax').value / 100;
	const tipPercentage = document.getElementById('tip').value / 100;

	let mainDishTotal = 0;
	let sideItemTotal = 0;

	for (let i = 0; i < mainDishes.length; i++) {
		if (mainDishes[i].checked) {
			mainDishTotal += parseFloat(mainDishes[i].value);
		}
	}

	for (let i = 0; i < sideItems.length; i++) {
		if (sideItems[i].checked) {
			sideItemTotal += parseFloat(sideItems[i].value);
		}
	}

	const subTotal = mainDishTotal + sideItemTotal;
	const tax = subTotal * stateTaxRate;
	const tip = subTotal * tipPercentage;
	const total = subTotal + tax + tip;

	document.getElementById('total').textContent = '$' + total.toFixed(2);
});