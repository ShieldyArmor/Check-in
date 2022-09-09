// 1

// let changeVar = 8;
// console.log(changeVar)
// changeVar = 12;
// console.log(changeVar)


//2

// const staticVar = 5;
// console.log(staticVar)
// changeVar = 12;
// console.log(staticVar)


//3

// let mail = 'monicastef@viken.no';
// console.log(mail)
// console.log(mail.slice(-8))
// console.log(mail.substr(10, 1))
// console.log(mail.length)
// // Substr/Substring allows the user to specify the amount of characters it wants to cut from a certain point, instead of just the point at which to cut.
// console.log(mail.replaceAll("e", "q"))
// console.log(mail.replaceAll("o", "ø"))


//4

// // Modulus(%) shows the remainder of a division calculation, basically, if the modulus of something is *NOT* 0, it means that it is not perfectly dividable by said number.
// // Meanwhile regular division(/) simply divides a number by another number like any other calculation, and even if it doesn't divide perfectly, it'll return decimals.


//5

// const pi = 3.14;
// let radius = 20;

// console.log(pi*Math.pow(radius, 2))


//6

// let score = 3
// console.log(score)
// score += 2
// console.log(score)
// score = 5
// console.log(score)
// score =-1
// console.log(score)


//7

// // NaN means "Not a Number", which is the default return value for anything that is supposed to return a numerical value, but for some reason doesn't.
//console.log(Number('cheese'))
// // In this case, I am trying to get the number inside of the word "cheese" which of course, does not include a number.


//8
// // Undefined is when a value was not set when being made and is being used at one point in the code. But it does not break the code.
// let name;
// console.log("Where is " + name + "?");


//9

// let int = 3.14;
// console.log(int);
// int = int.toString();
// console.log(int);


//10

// let num = "3.14";
// console.log(num);
// num = Number(num)
// console.log(num);


//11

// let num = 3.14;
// console.log(num, "=", typeof num);


//12

// console.log("Monica has 12 students in class 2ITB")

// let classCode = "2ITB";
// let teacher = "Monica";
// let amount = 12;

// console.log(teacher, "has", amount, "students in class", classCode);


//13

// let countries = ["Poland", "Germany", "Norway", "Sweden", "Canada"]

// console.log(countries.length);
// console.log(countries[4]);
// console.log(countries[1], countries[2]);

// let countries2 = ["Denmark", "Ukraine", "Iraq", "Spain", "France"]

// console.log(countries.concat(countries2));
// countries2.push("Finland")
// console.log(countries2)
// console.log(countries2.pop())
// console.log(countries2)
// console.log(countries2.shift())
// console.log(countries2)


//14

// let check = prompt("What's your ID");

// if (!check) {
//     console.error("You are not logged in.");
// }
// else {
//     console.log("You are now logged in!")
// }


//15

// let points = prompt("What's your point sum?");

// if (points >= 90){
//   console.log("You've got an A!")
// }
// else if (points >= 80){
//   console.log("You've got a B!");
// }
// else if (points >= 70){
//     console.log("You've got a C!");
// }
// else if (points >= 60){
//   console.log("You've got a D!");
// }
// else if (points >= 50){
//     console.log("You've got an E!");
// }
// else {
//     console.error("You've got a F!!!!!")
// }

// // I believe it could be possible to use a switch statement for this, although because we are working with 100 numbers and the switch statement only being able to work off of individual values and not ranges, it could be possible although even worse/more tedious than the current method.


//16
// const pi = 3.14;

// function circle(radius) {
// let circle = pi*2*radius;
// console.log(circle) 
// }

// circle(10);


//17
// ballAreal = (radius) => "Your ball's Areal is " + pi*Math.pow(radius, 2);

// console.log(ballAreal(5))


//18
// function cube(area, num) {
//     console.log(`Volume of your cube would be ${(area*num)/100}L`);
//   }

// function square(num, cb) {
//     area = num*num
//     console.log(`Volume of your square would be ${num}cm\xB2`);
//     cb(num, area);
// }
  
//   square(5, cube);


//19

// let usernames = ["Kathleen Murphy", "Micheal Cervantes", "Robert Stevenson", "Jessica Palmer", "Brandon Zhang", "Aaron Young", "Brittany Moore", "Janet Schwartz", "Sarah Morales", "Michelle Lewis"]
// let firstNames = []

// for (let i = 0; i < usernames.length; i++) {
//     spaceIndex = usernames[i].indexOf(" ")
//     console.log(spaceIndex)
//     firstNames.push(usernames[i].slice(spaceIndex+1))
//     console.log(firstNames)
// }