//Understanding Variables, Scope, and Hoisting in JavaScript



// var name = "jimbo";
// var knight = 12;
// var castle = ["squires", "guards", "king"];
// if(name === "jimbo"){
//     console.log(true);
// }
// console.log(knight);

// var hunting = "tonight";
// hunting = "tomorrow";
// console.log(hunting);

// var roadTrip = "march"
// function rollOut(){
//     var roadTrip = "january";
//     console.log(roadTrip);
// }
// console.log(roadTrip);
// rollOut();
// console.log(roadTrip);

// var brainDead = true;
// let me = "cruising";
// if(brainDead){
//     let me = "fried";
//     console.log(`this work load is making me ${me}.`);
// }
// console.log(`this break will have me ${me}.`);

// console.log(x);
// var x = 10;

// console.log(x);
// x = 10;

// var x = 10;
// function hoist(){
//     if(false){
//         var x = 20;
//     }
//     console.log(x);
// }
// hoist();

// let x = false;
// function hoist(){
//     if(2 === 2){
//         let x = true;
//     }
//     console.log(x);
// }
// hoist();

// var x = "please";
// var x = "stop";
// console.log(x);

// let x = "help";
// let x = "me";
// console.log(x);

// const TIRED = true;
// TIRED = false;
// console.log(TIRED);

// const TIRED;
// console.log(TIRED);

// const CAR = {make: "honda", convertable: false}
// CAR.convertable = true;
// console.log(CAR);



//Understanding Objects in JavaScript



// const objectLiteral = {};
// const objectConstructor = new Object;

// const aragorn = {
//     name: "Aragorn",
//     race: "human",
//     weapon: "sword",
//     greeting: function(){
//         return `Hello there, I'm ${this.name}.`
//     },
//     charge: function(){
//         return `${this.weapon}s held high.  For Frodo.`
//     }
// };
// aragorn["title"] = "king";
// for(let key in aragorn){
//     console.log(aragorn[key]);
// }
// for(let key in aragorn){
//     console.log(key.toUpperCase() + ':', aragorn[key]);
// }



//Understanding Arrays in JavaScript



// let sharks = [
//     "leopard",
//     "sand",
//     "whale",
//     [
//         "baby",
//         "big"
//     ]
// ];

// let birds = [
//     "big",
//     "small",
//     "borbous",
//     "cool",
//     "funny"
// ];
// const lastIndex = birds.length - 1;

// let birdNest = [
//     [
//         "baby",
//         "egg"
//     ],
//     [
//         "hungry",
//         "loud"
//     ]
// ];

//console output
// birds[5] = "lorge";
// 'lorge'
// birds;
// (6) ['big', 'small', 'borbous', 'cool', 'funny', 'lorge']
// birds[7] = "nofly";
// 'nofly'
// birds;
// (8) ['big', 'small', 'borbous', 'cool', 'funny', 'lorge', empty, 'nofly']
// birds[6]
// undefined
// birds.push("penguin");
// 9
// birds;
// (9) ['big', 'small', 'borbous', 'cool', 'funny', 'lorge', empty, 'nofly', 'penguin']
// birds.unshift("blue");
// 10
// birds;
// (10) ['blue', 'big', 'small', 'borbous', 'cool', 'funny', 'lorge', empty, 'nofly', 'penguin']
// birds.splice(7,1);
// [empty]
// birds;
// (9) ['blue', 'big', 'small', 'borbous', 'cool', 'funny', 'lorge', 'nofly', 'penguin']
// let firstArray = birds.slice(0,7);
// undefined
// let secondArray = birds.slice(8,10)
// undefined
// firstArray.concat(secondArray)
// (8) ['blue', 'big', 'small', 'borbous', 'cool', 'funny', 'lorge', 'penguin']
// birds;
// (9) ['blue', 'big', 'small', 'borbous', 'cool', 'funny', 'lorge', 'nofly', 'penguin']
// birds.pop();
// 'penguin'
// birds;
// (8) ['blue', 'big', 'small', 'borbous', 'cool', 'funny', 'lorge', 'nofly']
// birds.shift();
// 'blue'
// birds;
// (7) ['big', 'small', 'borbous', 'cool', 'funny', 'lorge', 'nofly']
// birds[0] = "biggest";
// 'biggest'
// birds;
// (7) ['biggest', 'small', 'borbous', 'cool', 'funny', 'lorge', 'nofly']
// birds.splice(5,1,"lorger");
// ['lorge']
// birds;
// (7) ['biggest', 'small', 'borbous', 'cool', 'funny', 'lorger', 'nofly']

// for(let i = 0; i < birds.length; i++){
//     console.log(i, birds[i])
// }

// for(let bird of birds){
//     console.log(bird);
// }



///For Loops, For...Of Loops and For...In Loops in JavaScript



// for(let i = 0; i < 4; i++){
//     console.log(i);
// }

// let i = 0
// for(;i < 4; i++){
//     console.log(i);
// }

// let i = 0
// for(; ; i++){
//     if(i > 6){
//         break;
//     }
//     console.log(i);
// }

// let i = 0
// for(; ;){
//     if(i > 5){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let array = [];
// for(let i = 0; i < 5; i++){
//     array.push(i);
//     console.log(array);
// }

// let homework = ["when", "is", "this", "over"];
// for(let i = 0; i < homework.length; i++){
//     console.log(homework[i]);
// }

// const shark = {
//     type: "blue",
//     color: "light blue",
//     tail: "long"
// }
// for(attribute in shark){
//     console.log(shark[attribute]);
// }
// for(attribute in shark){
//     console.log(`${attribute}`.toUpperCase() + `: ${shark[attribute]}`);
// }

// let sharks = ["big", "small", "angry"]
// for(let shark of sharks){
//     console.log(shark);
// }
// for(let [index, shark] of sharks.entries()){
//     console.log(index, shark);
// }

// let sharkName = "bitey";
// for(let shark of sharkName){
//     console.log(shark);
// }



//How To Define Functions in JavaScript



// function sleep(){
//     console.log("maybe tomorrow...")
// }
// sleep();
// script.js:272 maybe tomorrow...

// function sleep(phrase){
//     console.log(`${phrase} maybe tomorrow...`)
// }
// sleep("You want sleep?");
// script.js:278 You want sleep? maybe tomorrow...

// function multiply(x, y){
//     return x * y;
// }
// multiply(5,5)
// 25

// const difference = function subtract(x, y){
//     return x - y;
// }
// difference(6,5)
// 1
// const difference = function(x, y){
//     return x - y;
// }
// difference(6,5)
// 1

// const multiply = (x, y) => {
//     return x * y;
// }
// multiply(8, 5)
// 40
// const square = x => {
//     return x * x;
// }
// square(2);
// 4
// const square = x => x * x;
// square(4)
// 16



//Understanding Classes in JavaScript



// const x = function(){}
// const constructorFromFunction = new x();
// console.log(Object.getPrototypeOf(x));
// console.log(constructorFromFunction);
// const y = class{}
// const constructorFromClass = new y();
// console.log(Object.getPrototypeOf(y));
// console.log(constructorFromClass);

// function Monster(name, element){
//     this.name = name;
//     this.element = element;
// }
// Monster.prototype.roar = function(){
//     return `${this.name} howls with rage.`
// }
// function SubType(name, element, variant){
//     Monster.call(this, name, element);
//     this.variant = variant
// }
// const monster2 = new SubType("Stygian", "dragon", true);
// monster2;
// SubType {name: 'Stygian', element: 'dragon', variant: true}

// class Monster{
//     constructor(name, element){
//         this.name = name;
//         this.element = element;
//     }
//     roar(){
//         return `${this.name} howls with rage.`
//     }
// }
// class SubType extends Monster{
//     constructor(name, element, variant){
//         super(name, element);
//         this.variant = variant;
//     }
// }
// const monster3 = new SubType("Thunderlord", "lightning", true);
// monster3
// SubType {name: 'Thunderlord', element: 'lightning', variant: true}
// const monster1 = new Monster("Zinogre", "lightning");
// monster1;
// Monster {name: 'Zinogre', element: 'lightning'}



//How To Use Object Methods in JavaScript



// const car = {
//     make: 'honda',
//     model: 'civic',
//     isAvailable: true,
//     showDetails() {
//         const availability = this.isAvailable ? 'is currently in stock' : "is not at this dealership";
//         console.log(`The ${this.make} ${this.model} you were interested in ${availability}.`);
//     }
// };
// const buyer = Object.create(car);
// buyer.make = "chevy";
// buyer.model = "cavalier";
// buyer.isAvailable = false;
// buyer.showDetails();

// const eliteFour = {
//     rika: 'ground',
//     poppy: 'steel',
//     larry: 'flying',
//     hassel: 'dragon'
// }

// const keys = Object.keys(eliteFour);
// console.log(keys);
// Object.keys(eliteFour).forEach(key => {
//     let value = eliteFour[key];
//     console.log(`${key}: ${value}`);
// });
// const members = Object.keys(eliteFour).length;
// console.log(members);

// const type = Object.values(eliteFour);
// console.log(type);

// const memberCards = Object.entries(eliteFour);
// console.log(memberCards);
// memberCards.forEach(entry => {
//     let key = entry[0];
//     let value = entry[1];
//     console.log(`${key}: ${value}`);
// });

// const eliteFourNames = {
//     member1: 'Rika',
//     member2: 'Poppy',
//     member3: 'Larry',
//     member4: 'Hassel'
// }
// const eliteFourTypes = {
//     memberType1: 'ground',
//     memberType2: 'steel',
//     memberType3: 'flying',
//     memberType4: 'dragon'
// }
// const eliteFour = Object.assign(eliteFourNames, eliteFourTypes);
// const eliteFour = {...eliteFourNames, ...eliteFourTypes}
// console.log(eliteFour);

// const champion = {
//     name: 'Geeta',
//     strength: 'weak'
// };
// const paldeaChamp = Object.freeze(champion);
// paldeaChamp.strength = 'tough';
// paldeaChamp.badLineup = true;
// console.log(paldeaChamp);
// const paldeaChamp = Object.seal(champion);
// paldeaChamp.name = 'Steven';
// paldeaChamp.strength = 'strong';
// paldeaChamp.active = true;
// console.log(paldeaChamp);

// const trainers = ['Red', 'Blue', 'Lt.Serge'];
// console.log(Object.getPrototypeOf(trainers));
// console.log(Object.getPrototypeOf(trainers) === Array.prototype);



//Understanding Destructuring, Rest Parameters, and Spread Syntax in JavaScript



// const tod = {
//     date: '12/2/2022',
//     time: '12:41 am',
//     causeOfDeath: 'brain melted',
//     canGetSomeSleepNow: true,
//     whatCouldSaveHim: {
//         treat: '27s',
//         food: 'spaghetti'
//     }
// }
// const date = tod.date;
// const time = tod.time;
// const causeOfDeath = tod.causeOfDeath;
// const canGetSomeSleepNow = tod.canGetSomeSleepNow;
// const { date: todTime, time, causeOfDeath, canGetSomeSleepNow } = tod;
// console.log(todTime)
// console.log(time)
// console.log(causeOfDeath)
// console.log(canGetSomeSleepNow)
// const { date, time, causeOfDeath, canGetSomeSleepNow, whatCouldSaveHim: {treat, food}} = tod
// console.log(`${treat} and ${food}`)
// const {whatCouldSaveHim, whatCouldSaveHim: {treat, food}} = tod
// console.log(whatCouldSaveHim)

// const { length } = 'fucking kill me'
// console.log(length)

// const cigarettes = ['27s', 'reds', 'turkish blends']
// const [number1, , number2] = cigarettes;
// console.log(number1)
// console.log(number2)
// console.log(number3)

// const numbers = [1, 2, [3, 4], 5]
// const [one, two, [three, four], five] = numbers
// console.log(one, two, three, four, five)

//  const tod = {
//      date: '12/2/2022',
//      time: '12:41 am',
//      causeOfDeath: 'brain melted',
//      canGetSomeSleepNow: true
//     }
//     Object.entries(tod).forEach(([key, value]) => {
//         console.log(`${key}: ${value}`)
//     })
//     for(let [key, value] of Object.entries(tod)){
//         console.log(`${key}: ${value}`)
//     }

// const tod = {
//     date: '12/2/2022',
//     whatCouldSaveHim: {
//         treat: '27s',
//         food: 'spaghetti'
//         },
//     tags: ['personal', 'writing', 'investigations'],
// }
// const {
//     date1 = new Date(),
//     whatCouldSaveHim: {treat},
//     tags: [personalTag, writingTage]
// } = tod
// console.log(date1)

// const treats = ['bleach', 'razor blades']
// const more = ['rat poison', 'demoisture package']
// const allTreats = [...treats, ...more]
// console.log(allTreats)

// const people = [
//     {first: 'Harold', last: 'Lots'},
//     {first: 'Jack', last: 'Cover'}
// ]
// const newPerson = {first: 'Gary', last: 'Han'}
// people.push(newPerson)
// const updatePeople = [...people, newPerson]
// console.log(people)
// console.log(newPerson)

// const oldArray = ['three', 'two', 'one']
// const newArray = oldArray
// newArray.pop()
// console.log(oldArray)
// const oldArray = ['three', 'two', 'one']
// const newArray = [...oldArray]
// newArray.pop()
// console.log(oldArray)

// const set = new Set()
// set.add('small')
// set.add('big')
// set.add('red')
// const birds = [...set]
// console.log(birds)

// const string = "killme"
// const stringArray = [...string]
// console.log(stringArray)

// const oldObject = {tired: true, feeling: 'dog water'}
// const newObject = {...oldObject}
// console.log(newObject)

// const Ron = {
//     is: 'a man',
//     theMan: true,
//     hobbies:{
//         one: 'woodWorking',
//         two: 'eating meat'
//     }
//   }
//   const updatedRon = { ...Ron, isLoggedIn: true }
//   console.log(updatedUser)
// const updateRon = {...Ron, hobbies:{three: 'drinking'}}
// console.log(updateRon)

// function multiply(a, b, c){
//     return a * b * c
// }
// multiply(6, 2, 2)
// 24
// const numbers = [6, 2, 2]
// multiply(...numbers)
// 24

// function restTest(one, two, ...args) {
//     console.log(one)
//     console.log(two)
//     console.log(args)
//   }
//   restTest(1,2,3,4,5,6,7,8,9)
// script.js:581 1
// script.js:582 2
// script.js:583 (7) [3, 4, 5, 6, 7, 8, 9]



//Understanding Arrow Functions in JavaScript



// const sum = (a, b) => {
//     return a + b
// }
// sum(1, 2)

// const someNumbers = {
//     numbersTag: 'values:',
//     numbers: [1, 2, 3, 4, 5, 6, 7],
//     loop() {
//       this.numbers.forEach(
//         function (number) {
//           console.log(this.numbersTag, number)
//         }.bind(this),
//       )
//     }
//   }
//   someNumbers.loop()
// const someNumbers = {
//     numbersTag: 'current value:',
//     numbers: [1, 2, 3, 4, 5, 6],
//     loop() {
//       this.numbers.forEach((number) => {
//         console.log(this.numbersTag, number)
//       })
//     },
//   }
//   someNumbers.loop()

// function aNumber(){
//     this.value = 9
// }
// const moment = new aNumber()
// console.log(moment.value)

// const product = (a, b) => ({done: a * b})
// product(3, 4)

// const exponent = x => x * x

// const wave = () => 'whats up'



//Understanding the Event Loop, Callbacks, Promises, and Async/Await in JavaScript



// function one() {
//     console.log(1)
//   }
//   function two() {
//     setTimeout(() => {
//         console.log(2)
//     }, 0)
//   } 
//   function three() {
//     console.log(3)
//   }
//   console.log(one(), two(), three())

// function one() {
//     console.log(1)
//   }
//   function two(callback) {
//     setTimeout(() => {
//         console.log(2)
//         callback()
//     }, 0)
//   } 
//   function three() {
//     console.log(3)
//   }
//   console.log(one(), two(three))

// function nestedCalls() {
//     setTimeout(() => {
//       console.log(1)
//       setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//           console.log(3)
//         }, 50)
//       }, 200)
//     }, 100)
//   }
//   console.log(nestedCalls())

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('We did it!'),500)
// })
// .then((firstResponse) => {
//     return firstResponse + ' And chaining!'
//   })
//   .then((secondResponse) => {
//     console.log(secondResponse)
//   })

// function getUsers(onSuccess) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (onSuccess) {
//             resolve([
//               {id: 1, name: 'Jerry'},
//               {id: 2, name: 'Elaine'},
//               {id: 3, name: 'George'},
//             ])
//           } else {
//             reject('Failed to fetch data!')
//           }
//       }, 1000)
//     })
//   }
//   getUsers(true)
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// fetch('https://api.github.com/users/octocat')
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// async function getUser() {
//     return {}
//   }
//   console.log(getUser())
//   getUser().then((response) => console.log(response))
// async function getUser() {
//     const response = await fetch('https://api.github.com/users/octocat')
//     const data = await response.json()
//     console.log(data)
//   }
//   getUser()