let person = {
	name: null,
	age: null,
	say: undefined,
	getAge(age){this.age = age},
	getName(name){this.name = name},
	getHi(){this.say = `Hi, ` + this.name}
};

let hello = (name) => {
	person.getName(name);
	person.getHi();
	switch (name[0]) {
		case 'A': age = 10; break;
		case 'V': age = 20; break;
		case 'N': age = 30; break;
		case 'O': age = 40; break;
		case 'D': age = 50; break;
		default: null;
	}
	person.getAge(age);

	return person;
};
hello("");
console.log(person);

