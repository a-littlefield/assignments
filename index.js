// Question 1

var x = 9
var y = 4
console.log (x+y)

// Q1 pt B

var hi = "hello "
var hello = "hi"
console.log (hi+hello)

// Question 2

var movies = ['Lord of the Rings', 'Edge of tomorrow', 'Planet of the Apes'];
var games = ['Borderlands', 'Soul Calibur', 'Binding of Isaac'];
var dailyUse = ['Phone', 'Computer', 'Bed'];

var multiArray = [movies, games, dailyUse];
console.log (multiArray[2][0]);
console.log (multiArray[0][1]);

// Question 3

var num = prompt ('Enter your number below', '100')
if (num < 100) {
	alert('Your variable is less than 100!');
} else if (num == 100)  {
	alert ('Your Variable is 100!!');
}else {
	alert (num + ' Your variable is over 100!');
}
// Question 4: I ran the program with multipule different numbers, only problem is when you enter 100 it says
// "your variable is over 100", fixing now.

// Question 5

var one = prompt ('What is the capital of Norway?', "Type answer here")
if (one == "Olso" || one == "olso"){
	alert ('Correct!')
}else {
	alert ('Incorrect')
}
// Question 6

function sayHi(name) {
	alert (name);
}
sayHi('Shanaynay')

// Question 7

function you() {
	console.log ('Why you do dis?')
}
you()

// Question 8

function open(door) {
	if (door === 1) {
		alert ('Oooo a piece of candy!');
	}
	if (door === 2) {
		alert ('You win a 2002 Toyota Camery! CONGRAGULATIONS');
	}
	if (door === 3) {
		alert ('You\'ve won a trip to Detroit!');
	}
}
open (3)
