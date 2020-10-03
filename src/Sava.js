
function maxElement (){
	let numbers = [2, 4, 6, 2, 5, 2, 5, 3, 2];
	let dublee = [];
	let uni = [];
	for(let i = 0; i < numbers.length; i++){
		for(let j = i+1; j < numbers.length; j++){
			if (numbers[i] == numbers[j]) {
				dublee.push(numbers[i]);
			}
		}
	}
	for (let str of dublee) {
		if (!uni.includes(str)) {
			uni.push(str);
		}
	}
	console.log(uni);
}

function zag() {
	var people = [
		{firstName: 'Eileen', lastName: 'Graham'},
		{firstName: 'Peter', lastName: 'Graham'},
		{firstName: 'Jared', lastName: 'Miller'},
		{firstName: 'Robert', lastName: 'Williams'},
		{firstName: 'Robert', lastName: 'Jolley'},
		{firstName: 'Robert', lastName: 'Graham'},
		{firstName: 'David', lastName: 'Jennings'}
	];
	var result = [];
	for (var i = 0; i < people.length; i++) {
		if (result.indexOf(people[i].firstName) == -1) {
			result.push(people[i].firstName);
		}
	}
	console.log(result);
}


let balance;
function calculateCount(amount) {
	let value = [500, 200, 100, 50, 20, 10];
	let count = [];
	for(let i = 0; i < value.length; i++){
		balance = value[i];
		while (amount - balance >= 0){
			amount -= balance;
			count.push(balance);
		}
	}
	if(amount % 10 > 0){
		return -1;
	} else {
		return count.length;
	}
}
//console.log(calculateCount(10));

function getLargestNumbers(numbers) {
	numbers = [-1, -2, -3, 4, 5, 0];
	const num = numbers.sort(function(a, b){return a - b});
	const nPlus = [];
	const nMinus = [];
	const n = [];
	const result = [];
	;
	for(let i = 0; i < num.length; i++){
		if(num[i] >= 0 ){
			nPlus.push(num[i]);
		} else {
			nMinus.push(num[i]);
		}
	}
	for(let i = num.length; i > num.length-6; i--){
		n.push(num[i]);
	}
	n.splice(0, 1);
	console.log(n);
}

function removeVowelKeys(object) {
	const word = "aeiouyAEIOUY";
	let n =[];
	let m = [];
	let res = [];
	const vowelsObj = {
		wheels: 10,
		Arms: 4,
		name: 'mate-bot',
		chip: 'Mate13',
		icon: 'img',
		coords: { x: 0, y: 9 },
	}


	for (let props in vowelsObj) {
		n.push(props);
	}
	for(let i = 0; i < n.length; i++){
		for(let j = 0; j < word.length; j++) {
			if(n[i].startsWith(word[j])){
				m.push(n[i]);
			}
		}
	}
	let difference = n.filter(x => m.indexOf(x) == -1);
	let result;

	for(let i = 0; i < vowelsObj.length; i++){
		if(vowelsObj.key() == difference[i]){
			console.log(vowelsObj[i]);
	}


	}
	console.log(difference);


}

function getYears(amount, percent, expectedLimit) {
	// write code here
	let i = 0;
	let x = amount*percent;

	while(amount <= expectedLimit){
		x = amount*(percent*0.01);
		amount += x;
		i++;
		console.log(amount);
		console.log(i);
	}

	return i;
}

console.log(getYears(2000, 10, 2400));

var sik;