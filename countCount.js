numQuarters = 0;
numDimes = 0;
numNickels = 0;
numPennies = 0;

function incrementMoney(x) {
	switch (x) {
		case 0:
			numQuarters++;
			display();
			break;
		case 1:
			numDimes++;
			display();
			break;
		case 2:
			numNickels++;
			display();
			break;
		case 3:
			numPennies++;
			display();
			break;
		case 4:
			if(numQuarters > 0)
				numQuarters--;
			display();
			break;
		case 5:
			if(numDimes > 0)
				numDimes--;
			display();
			break;
		case 6:
			if(numNickels > 0)
				numNickels--;
			display();
			break;
		case 7:
			if(numPennies > 0)
				numPennies--;
			display();
			break;
	}
}

function total() {
	if((numQuarters * 25 + numDimes * 10 + numNickels * 5 + numPennies * 1)/100 == 0)
		return "0.00";
	
	return "" + (numQuarters * 25 + numDimes * 10 + numNickels * 5 + numPennies * 1)/100;
}

function display() {
	document.getElementById("numQuarter").innerHTML = "Quarters : " + numQuarters;
	document.getElementById("numDime").innerHTML = "Dimes : " + numDimes;
	document.getElementById("numNickel").innerHTML = "Nickels : " + numNickels;
	document.getElementById("numPenny").innerHTML = "Pennies : " + numPennies;
	document.getElementById("totalMoney").innerHTML = "Total: $" + total();
}
