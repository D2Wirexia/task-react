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
hello("V");
//console.log(person);

var a = {
	name: 'Wirexia',
	age: 18,
	friends: ['Misha', 'Oleg', 'Nika', 'Nastya'],
	isOnline: true,
	classroom: {
		teacher: {
			name: 'Dimuch',
			age: 27
		}
	}
};

var b = {...a};

b.name = 'Dima';
b.isOnline = false;
b.friends = [...a.friends];
b.friends.push('Vika');
b.classroom.teacher.name = "Wirexia";


console.group("test:");
console.log(a);
console.log(b);

