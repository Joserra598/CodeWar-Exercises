// function arrayDiff(a, b) {
// 	return a.filter((val) => !b.includes(val));
// }

const arrayDiff = (a, b) => a.filter((val) => !b.includes(val));
// console.log(newVal);

arrayDiff([1, 2], [1]);
// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

// Trolling coments

const disemvowelTwo = (str) => {
	const vowels = ["a", "e", "i", "o", "u"];

	return str
		.split("")
		.filter((val) => !vowels.includes(val.toLowerCase()))
		.join(" ");
};

const disemvowelOne = (str) => {
	const vowels = ["a", "e", "i", "o", "u"];

	return str
		.split("")
		.filter((val) => !vowels.includes(val.toLowerCase()))
		.join("");
};

// console.log(disemvowelOne("This website is for losers LOL!"));

const palindrome = (str) => {
	const removeWhiteSpace = str.toLowerCase().replaceAll(" ", "");

	const strReversed = removeWhiteSpace.split("").reverse().join("");

	if (removeWhiteSpace === strReversed) return true;

	return false;
};

// console.log(palindrome("Do geese see God"));

onlySortOdd = (array) => {
	const inparIndex = array.reduce((acc, val, i) => {
		if (val % 2 !== 0) acc.push([i, val]);
		return acc;
	}, []);

	const inparSort = inparIndex
		.map((val) => val[1])
		.sort((a, b) => a - b)
		.map((val, i) => [inparIndex[i][0], val]);

	inparSort.forEach((val) => (array[val[0]] = val[1]));
	return array;
};
// [3, 8, 6, 5, 4]
// onlySortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

// Find the unique number

const findUniq = (array) => {
	const remove = (pos) => array.splice(pos, 1)[0];
	if (array.length < 3) return array;
	const [first, second, third] = array;
	if (first === second) return remove(array.findIndex((val) => val !== first));

	if (first !== second) return first === third ? remove(1) : remove(0);
};

// console.log(findUniq([1, 1, 1, 2, 1, 1]));

const solution = (number) => {
	if (number < 3) return 0;
	const valid = [];
	for (let i = 3; i < number; i++) (i % 3 === 0 || i % 5 === 0) && valid.push(i);
	return valid.reduce((acc, val) => (acc += val), 0);
};
// console.log(solution(3));

const likes = (names) => {
	const static = names.slice(0, 3);
	let total = static.join(" and ");
	if (static.length > 2) total = total.replace(" and", ",");
	if (names.length >= 4) total = total.replace(static[2], `${names.length - 2} others`);

	return `${static.length === 0 ? "no one" : `${total}`} ${names.length < 2 ? "likes" : "like"} this`;
};

// console.log(likes([]));

// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Omar", "Miguel"]));

const uniqueInOrder = (iterable) => [...iterable].filter((val, i, iterable) => val !== iterable[i + 1]);
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));
// uniqueInOrder([1, 2, 2, 3, 3]);

const findOutlier = (integers) => {
	if (integers.length < 3) return;
	const [first, second, thrid] = integers;
	let type;

	first % 2 === second % 2 ? (type = first) : second % 2 === thrid % 2 ? (type = second) : (type = first);

	return integers[integers.findIndex((val) => Math.abs(val % 2) !== Math.abs(type % 2))];
};

// findOutlier([148900211, -28763955, -88784274, 45987929]);
// const rev = /[a-zA-Z]+/;
const order = (words) => {
	const rev = /[a-zA-Z]+/;
	return words
		.split(" ")
		.sort((a, b) => a.replace(rev, "")[0] - b.replace(rev, "")[0])
		.join(" ");
};

// console.log(order("is2 Thi1s T4est 3a"));

const deleteNth = (arr, n) => {
	return arr.reduce(
		([arr, obj], val) => {
			obj[val] ? (obj[val] += 1) : (obj[val] = 1);
			obj[val] <= n && arr.push(val);
			return [arr, obj];
		},
		[[], {}]
	)[0];
};

// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

const divisors = (integer) => {
	let array = [];
	for (let i = 2; i < integer; i++) integer % i === 0 && array.push(i);
	return array.length ? array : `${integer} is prime`;
};

// console.log(divisors(13));

const tribonacci = (signature, n) => {
	const values = (val) => {
		return val
			.reduce((acc, _, i, __) => {
				acc.push(acc[i] + acc[i + 1] + acc[i + 2]);
				return acc;
			}, val)
			.slice(-3);
	};

	while (signature.length < n) {
		signature = [...signature, ...values(signature.slice(-3))];
	}

	return signature.slice(0, n);
};

// console.log(tribonacci([0, 0, 1], 0));

const suma = (n) => {
	return n < 10 ? suma(n + 1) : n + 2;
};

// console.log(suma(0));

const persistence = (num) => {
	if (num < 10) return 0;
	let times = 1;
	const total = String(num)
		.split("")
		.reduce((acc, val) => val * acc, 1);

	return total < 10 ? times : (times += persistence(total));
};

// console.log(persistence(999));

const expandedForm = (num) => {
	return String(num)
		.split("")
		.reverse()
		.map((val, i) => val * 10 ** i)
		.filter((val, i) => val > 0)
		.reverse()
		.join(" + ");
};

// expandedForm(70304);

const pigIt = (str) => {
	return str
		.split(" ")
		.map((val) => `${val.slice(1)}${val[0].match(/[!?????]/g) ? val[0] : `${val[0]}ay`}`)
		.join(" ");
};

// pigIt("0 tempora o mores !");

const anagrams = (word, words) => {
	const wordOrder = word.split("").sort().join("");
	return words.filter((word) => {
		if (word.length < word) return false;
		return wordOrder === word.split("").sort().join("");
	});
};

// console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));

const cakes = (recipe, available) => {
	if (Object.keys(recipe).length > Object.keys(available).length) return 0;
	return Object.keys(recipe).reduce((acc, ingredient) => {
		if (!available.hasOwnProperty(ingredient)) acc = false;
		if (available.hasOwnProperty(ingredient)) {
			const cant = Math.floor(available[ingredient] / recipe[ingredient]);
			if (acc > cant || (acc === 0 && acc !== false)) acc = cant;
		}
		return acc;
	}, 0);
};

// cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });

const base = new Map([
	["zero", 0],
	["one", 1],
	["two", 2],
	["three", 3],
	["four", 4],
	["five", 5],
	["six", 6],
	["seven", 7],
	["eight", 8],
	["nine", 9],
	["ten", 10],
	["eleven", 11],
	["twelve", 12],
	["thirteen", 13],
	["fourteen", 14],
	["fifteen", 15],
	["sixteen", 16],
	["seventeen", 17],
	["eighteen", 18],
	["nineteen", 19],
	["twenty", 20],
	["thirty", 30],
	["forty", 40],
	["fifty", 50],
	["sixty", 60],
	["seventy", 70],
	["eighty", 80],
	["ninety", 90],
	["hundred", 100],
	["thousand", 1000],
	["million", 1000000],
]);

const parseInt = (string) => {
	const acumulate = string
		.trim()
		.toLowerCase()
		.split(" and")
		.join("")
		.split(" ")
		.map((word) =>
			!word.includes("-") ? base.get(word) : word.split("-").reduce((acc, number) => (acc += base.get(number)), 0)
		)
		.reduce(
			(acc, number) => {
				number % 100 === 0 ? (acc.count *= number) : (acc.count += number);
				if (number > 100) {
					acc.carring += acc.count;
					acc.count = 0;
				}
				return acc;
			},
			{ count: 0, carring: 0 }
		);
	// console.log(acumulate);
	return acumulate.count + acumulate.carring;
};

// parseInt("four hundred fifty-six thousand seven hundred eighty-nine");

const doneOrNot = (board) => {
	let status = "Try again!";
	if (board.length !== 9) return status;
	let sections = [];

	for (let i = 0; i < board.length; i++) {
		// obtengo los numeros de las filas
		const row = new Set([...board[i]]);
		if (row.size != 9) break;

		// obtengo las columnas

		let col = [];
		for (let j = 0; j < board.length; j++) col.push(board[j][i]);
		col = new Set([...col]);

		if (col.size != 9) break;

		// Separamos las secciones
		if (i % 3 === 0) sections = [];

		const left = board[i].slice(0, 3),
			center = board[i].slice(3, 6),
			right = board[i].slice(6, 9);

		if (!sections[0]) {
			sections = [[...left], [...center], [...right]];
		} else {
			sections = [
				[...sections[0], ...left],
				[...sections[1], ...center],
				[...sections[2], ...right],
			];
		}

		if (i === 2 || i === 5 || i === 8) {
			const right = new Set([...sections[0]]);
			const center = new Set([...sections[1]]);
			const left = new Set([...sections[2]]);
			if ((right.size || center.size || left.size) != 9) break;
		}

		if (i === board.length - 1) status = "Finished!";
	}

	return status;
};

doneOrNot([
	[5, 3, 4, 6, 7, 8, 9, 1, 2],
	[6, 7, 2, 1, 9, 5, 3, 4, 8],
	[1, 9, 8, 3, 4, 2, 5, 6, 7],
	[8, 5, 9, 7, 6, 1, 4, 2, 3],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 6, 1, 5, 3, 7, 2, 8, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 4, 5, 2, 8, 6, 1, 7, 9],
]);
