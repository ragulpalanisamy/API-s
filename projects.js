/* //generate quotes
/*
let quotes = document.getElementById("h");
let text = document.getElementById("h3");
let but = document.getElementById("button");
let a = [
    {
       quote: 'Quote : Live Life when life leaves you',
       author: 'Author : Ragul'
    },
    {
       quote: 'Quote : Be yourself; everyone else is already taken.',
       author: 'Author : Oscar Wilde'
    }];

but.addEventListener("click", quote);

function quote(){
    let change = Math.floor(Math.random() * a.length);
    quotes.innerHTML = a[change].quote;
    text.innerHTML = a[change].author;
}
*/

//counter Project
/*
let count =0;

document.getElementById('lower').onclick = function(){
    count -=1;
    document.getElementById('h').innerHTML = count;
}


document.getElementById('add').onclick = function(){
    count +=1;
    document.getElementById('h').innerHTML = count;
}
*/
/*
function ChangeColor(color){
    let container = document.getElementById("container");
    container.style.backgroundColor = color;
}
*/
/*
var weight = window.prompt("enter the weight");
let height = window.prompt("enter the height");
let measure = window.prompt("enter the measure");
let bmi = window.prompt("enter the bmi");
let error;

function calculate() {
	//weight = document.getElementById("weight").value;
	//height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
	} else if (bmi >= 30) {
		measure = "Your BMI is " + bmi + " which means " + "You are Obese";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}
*/
//class & Object.
/*
class fruits{
	constructor(name,color)
	{
		this.name = name;
		this.color = color;
	}
		sweet() {

			console.log(`Fruit Name : ${this.name}`);
			console.log(`Fruit color : ${this.color}`);
			console.log("Solid sweet with rich carbohydrate");
		
		}
	
}
	class apple extends fruits {
		//name='apple';
		//color='red';
		
	}


let appl = new fruits('apple','red');
console.log(appl.name);
appl.sweet();
*/
//stopwatch
/*
window.onload = function () {
  
	var seconds = 00; 
	var tens = 00; 
	var appendTens = document.getElementById("tens")
	var appendSeconds = document.getElementById("seconds")
	var buttonStart = document.getElementById('start');
	var buttonStop = document.getElementById('stop');
	var buttonReset = document.getElementById('reset');
	var Interval ;
  
	buttonStart.onclick = function() {
	  
	  clearInterval(Interval);
	   Interval = setInterval(startTimer, 10);
	}
	
	  buttonStop.onclick = function() {
		 clearInterval(Interval);
	}
	
  
	buttonReset.onclick = function() {
	   clearInterval(Interval);
	  tens = "00";
		seconds = "00";
	  appendTens.innerHTML = tens;
		appendSeconds.innerHTML = seconds;
	}
	
	 
	
	function startTimer () {
	  tens++; 
	  
	  if(tens <= 9){
		appendTens.innerHTML = "0" + tens;
	  }
	  
	  if (tens > 9){
		appendTens.innerHTML = tens;
		
	  } 
	  
	  if (tens > 99) {
		console.log("seconds");
		seconds++;
		appendSeconds.innerHTML = "0" + seconds;
		tens = 0;
		appendTens.innerHTML = "0" + 0;
	  }
	  
	  if (seconds > 9){
		appendSeconds.innerHTML = seconds;
	  }
	
	}
  }
*/
/*
let circle = document.getElementById("circle");
let square = document.getElementById("square");
let rect = document.getElementById("rect");
let tri = document.getElementById("tri");


circle.onclick = function(){
	circle.style.display = "none";
}
square.onclick = function(){
	square.style.display = "none";
}
rect.onclick = function(){
	rect.style.display = "none";
}
tri.onclick = function(){
	tri.style.display = "none";
}

document.getElementById("dis").onclick = function(){
	tri.style.display = "";
	rect.style.display = "";
	square.style.display = "";
	circle.style.display = "";
}
*/
/*
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
/*
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});

 */
//window

console.log(window);

//window.open();

//window.close();
//window.moveTo();

//window.AnimationEffect();
/*console.log(navigator.cookieEnabled);
console.log(navigator.onLine);
console.log(navigator.appName);
console.log(navigator.platform);
console.log(navigator.language);
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.protocol);
console.log(navigator.vibrate(1000));

let a = prompt("enter Yes/No");


if(a = 'Yes'){
	console.log(navigator.vibrate(1000));
}
else{
console.log("Vibration API is not supported in your browser");
}
*/
/*
$(document).ready(function() {

	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
  
	$("#answer").hide();
  
	magic8Ball.askQuestion = function(question) {
	  $("#8ball").effect("shake");
  
	  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  
	  $("#answer").fadeIn(4000);
  
	  var randomNumber = Math.random();
  
	  var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
  
	  var randomIndex = Math.floor(randomNumberForListOfAnswers);
  
	  var answer = this.listOfAnswers[randomIndex];
  
	  $("#answer").text(answer);
  
	  console.log(question);
	  console.log(answer);
	};
  
	var onClick = function() {
  
	  $("#answer").hide();
  
	  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
  
  
	  setTimeout(function(){
		var question = prompt("ASK A YES/NO QUESTION!");
		magic8Ball.askQuestion(question);
	  }, 500);
  
  
	};
  
	$("#questionButton").click(onClick);
  
  });
*/
/*
let a= document.getElementById("US").value;
let b= document.getElementById("UK").value;
let content = document.querySelector(".h");
document.getElementById("click").onclick = function(){
	if(a == true){
		document.getElementById("h").innerHTML = "Hi Thanks for Choosing US";
	}
	else if(b == true){
		document.getElementById("h").innerHTML ="Hi Thanks for Choosing UK";
	}
	else{
		window.alert("You didn't choose anything");
	}
}  

content.style.visiblity = 'visible';
*/
/*
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
*/

//synchronous code
/*
console.log("Hi");
console.log("Hello");
console.log("welcome Ragul!..");

//Asynchronous code

console.log("Hello ");
setTimeout(("Hello"),1000);
console.log("Hi");
*/
//setInterval
/*
let count=0;
let x=prompt("Enter a Number:");
x=(Number)(x);
let t = setInterval(countup, 1000);

function countup(){

	for(let i=count;i<=x;i++){
		console.log(i);	
	}
	clearInterval(t);
}
*/
//another way
/*
let c =0;
let a =prompt("Enter the value:");
a=Number(a);
let t1 = setInterval(counter, 1000);
function counter(){
	c = c + 1;
	if(c <= a){
		window.alert(c);
	}
		
}
*/
//stopwatch
/* 
const showTime = document.querySelector("#showTime");
const start = document.querySelector("#start");
const pause = document.querySelector("#stop");
const reset = document.querySelector("#pause");

let startTime =0;
let elapsedTime =0;
let currentTime =0;
let paused = true;
let intervalId = 0;
let hrs =0;
let min=0;
let sec =0;

start.addEventListener("click", () => {
	if(paused){
		paused = false;
		startTime = Date.now() - elapsedTime;
		intervalId = setInterval(updateTime, 75);
	}
});
pause.addEventListener("click", ()=> {
	if(!paused){
		paused=true;
		elapsedTime = Date.now() - startTime;
		clearInterval(intervalId);
	}
});
reset.addEventListener("click", () => {
	paused = true;
	clearInterval(intervalId);
		 startTime =0;
		 elapsedTime =0;
		 currentTime =0;
		 hrs =0;
		 min=0;
		sec =0;
		showTime.textContent="00:00:00";
});
	
	


	
function updateTime(){
	elapsedTime = Date.now() - startTime;

	sec = Math.floor((elapsedTime / 1000) % 60);
	min = Math.floor((elapsedTime / (1000 * 60)) % 60);
	hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
	
	sec = pad(sec);
	min = pad(min);
	hrs = pad(hrs);

	showTime.textContent = `${hrs}:${min}:${sec}`;
	
	function pad(unit){
		return (("0") + unit).length > 2 ? unit : "0" + unit;
	}
}

 */
/* 
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelector(".btn");
let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
	player = button.textContent;
	computerTurn();
	playerText.textContent = `Player: ${player}`;
	computerText.textContent= `Computer: ${computer}`;
	resultText.textContent = checkWinner();
}));

function computerTurn(){
	const ran = Math.floor(Math.random() * 3) + 1;
	switch(ran){
		case 1:
			computer = "ROCK";
			break;
		case 2:
			computer = "PAPER";
			break;
		case 3:
			computer = "SCISSORS";
			break;

	}
}

function checkWinner(){
	if (player == computer){
		return "Draw!"
	}
	else if(computer == "ROCK"){
		return (player == "PAPER") ? "You Win!" : "You Lose...";
	}
	else if(computer == "PAPER"){
		return (player == "SCISSORS") ? "You Win!" : "You Lose...";
	}
	else if(computer == "SCISSORS"){
		return (player == "ROCK") ? "You Win!" : "You Lose...";
	}
}
 */
/* A */
/* 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");


var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
 */
/* function sumOfEvenNumbers(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
	  if (numbers[i] % 2 === 0) {
		sum += numbers[i];
	  }
	}
	return sum;
  }
  
  // example usage
  let input = prompt("Enter a list of comma-separated numbers:");
  let numbers = input.split(",").map(Number);
  let result = sumOfEvenNumbers(numbers);
  console.log(result);
 */  
/* 
  document.getElementById("input").innerHTML = "CONVERSIONS";
  document.getElementById("meter").onclick = function(){
	let number = document.getElementById("number1").value;
	let c = Number(number);  

	document.getElementById("input").innerHTML = (c * 1000) + " meters";
  }
  document.getElementById("cen").onclick = function(){
	let number = document.getElementById("number2").value;
	let c = Number(number);  

	document.getElementById("input").innerHTML = (c * 100) + " centimeters";
  }
  document.getElementById("mil").onclick = function(){
	let number = document.getElementById("number3").value;
	let c = Number(number);  

	document.getElementById("input").innerHTML = (c * 10) + " millimeters";
  }

  let  ="Ragul";
	name.slice();   */
/* 
	const btn = document.querySelector('button');
	btn.addEventListener('click', display);
	function display(){

		const input = document.getElementById("input");
		const city = input.options[input.selectedIndex].value;

		let pop =0,lit =0,lan =0;
		switch(city){
			case 'bangalore':
				pop = 8443675
				lit = 88.71
				lan = 'Kannada'
				break;
				
			case 'Chennai':
				pop = 9443675
				lit = 89.71
				lan = 'Tamil'
				break;
				
			case 'Trichy':
				pop = 7543675
				lit = 86.71
				lan = 'Tamil'
				break;
				
			case 'New Delhi':
				pop = 9543675
				lit = 90.71
				lan = 'Hindi'
				break;
		}
		let text =`The Indian city of ${city} has a population of ${pop} . Language Spoken ${lan} and its literature survey ${lit}.`
		document.getElementById("p").innerHTML = text;
	}


	let user = {
		name: "ragul",
		username:"ragul1010",
		password: 12345678
	};
//.notation
	console.log(user.password);
//square bracket notation
	console.log(user['username']);
//change
	let uname = 'username';
	console.log(user[uname] = "ragul1432")

	let arr=['ECE','CSE','IT','EEE','MECH','CIVIL'];
	//let b=arr.length;
	var option ="";
	
	for(let i=0;i<arr.length;i++){
	option += '<option value ="'+arr[i] +'">' + arr[i] + "</option>";		
	}
	document.getElementById("input").innerHTML=option;
	
    /* let select = document.querySelector("input");
	document.getElementsByTagName("option").innerHTML = b[0];
	document.getElementsByTagName("option").innerHTML = b[1];
	document.getElementsByTagName("option").innerHTML = b[2];
	document.getElementsByTagName("option").innerHTML = b[3];
	document.getElementsByTagName("option").innerHTML = b[4];
	document.getElementsByTagName("option").innerHTML = b[5];
	document.getElementsByTagName("option").innerHTML = b[0]; */
	 

/* let btn = document.getElementById("btn");
let color = document.getElementById("color");
let wrap = document.getElementById("wrap");
let back = wrap.getElementsByTagName("div");
let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',fun);
function fun(){
	let col = '#';
	for(let i=0;i<6;i++){
		col += random();
	}
	color.innerHTML = col;
	wrap.style.background = col;
}
function random(){
	let random = Math.floor(Math.random(hex) * 16);
	return hex[random]; 
}

function fact(n){
	if(n==1){
		return 1;
	}
	else{
		return n * fact(n-1); 
	}
}
console.log(fact(5));


let n= [1,2,3,4,5]
let find = function(n){
	let sum = 0
	for(let val of n){
		sum += val; 
	}
	return sum;
} 
console.log(find(n));
console.clear();

n.forEach((val,index,n)=>{
	n[index] = 1;
});
console.log(n);

//add positive number only
let input = [6,-5,7,-2,4,6,-1];
let sum=0;
for(let val of input){
	if(val > 0){
		sum+=val;
	}
}
console.log(sum); */

//array reduce
/* let a =[
	['a','b','c'],
	['c','b','d'],
	['e','d','f']
];

console.log(a.flat());
let count = a.flat().reduce(
	(acc,el) =>{
		if(acc[el]){
			acc[el]++;
		}
		else{
			acc[el]=1;
		}
		return acc;
	}
	,{});
console.log(count);

console.clear();

//remove duplicates 
let arr = [4,6,2,3,1,1,3,5,7,8,4,3];

let dup = new Set(arr);
/* .filter((c,ind) =>{
	return arr.indexOf(c) === ind;
}); */
	/* console.log(dup);

	//abbrivate first letter in a word
	let n = "Robert Andrew George";
	let res = n.charAt(0)+""+ n.charAt(7)+""+ n.charAt(14);
	console.log(res);	

	//add positive number

	let z=[6,-5,7,-2,4,6,-1];
	let co=0;
	for(let i=0; i<z.length;i++){
		if(z[i] > 0){
			co += z[i];
		}
	}

	console.log(co);

	//closure

	function add(x){
		return function(y){
			return x+y;
		}
	}
	let ad = add(25);
	console.log(ad(1));

	let f;
	f.add(6);
	f.add('h');
	f.add(9);
	console.log(f); */ 


// Add two numbers and return their address with equal 
/* 	let twoSum = function(nums, target) {
		for(let i=0;i<nums.length;i++){
			for(let j=i+1;j<nums.length;j++){
				if(nums[i] + nums[j] == target){
					return [i,j];
				}
			}
		}
	};
	 */


/* 	class user{
		static count=0;
		constructor(name,age){
			this.name = name;
			this.age = age;
			user.count++;
		}

		login(){
			console.log(`hi, ${this.name}`);
			console.log(`Welcome back , ${this.name}`);
		}
		logout(){
			console.log("You logged Out");
		}
	}

	let user1 = new user("Ragul",21);
	let user2 = new user("sachin",13);
 	console.log(user1);
	user1.login();
	user1.logout();
	console.log(user2);
	user2.login();
	console.log(" " + user.count);

	class subscriber extends user{
		constructor(name,age){
			super(name,age);
			this.storage = 100;
		}
		message(){
			alert(`You have 100GB free Storage`);
		}
		//method overridding from base class method.
		login(){
			console.log("Thanks for Enrolling.");
		}
	}

	let sub1 = new subscriber("raj",21);
	console.log(sub1);
	sub1.login();
	sub1.message();
 */	
	//without using a class we can create object:
/* 
	function user(name,age){
		this.name=name;
		this.age=age;
	}
	user.prototype.login  = function(){
		alert(`Hi ,${this.name}`);
		alert(`welcome back, ${this.name}`)
	}
	let user1 = new user('Ragul',21);
	console.log(user1);
	user1.login();

	//get and set

	class student{
		constructor(name,sec){
			this._name=name;
			this._sec=sec;
		}
		get stud(){
			return 	`${this._name} and the section ${this._sec}`;
		}
		set stud(_name){
				if(_name  != 0){
					alert('Not A Number');
				}
		}
	}

	let stud1 = new student(12,'A');
	console.log(stud1.stud);

	 */
//setTimeOut and SetInterval.
/* 
setInterval(() => alert("Welcome!..."),2000);

console.log("hi,....");

function synch(){
	console.log("1");
	console.log("2");
	console.log("3");
}
synch();

setTimeout(() => console.log("3"),1000);
setTimeout(() => console.log("2"),2000);
setTimeout(() => console.log("1"),3000);
setTimeout(() => console.log("Let's Go"),3500);
 */
//promise
/* 
const takal = new Promise((resolve,reject) => {
	let booking = true;
	if(booking){
		resolve();
	}
	else{
		reject();
	}
})

takal.then(success).catch(failure);

function success(){
	alert("Thanks Buddy , I will share the amount.");
}
function failure(){
	alert("OOPS Something went wrong and you can book a bus ticket");
}


 let frd1 = new Promise((resolve,reject) => {
	let reached = true;
	if(reached){
		setTimeout(resolve,3000,"Raj reached Home");
	}
	else{
		reject("raj is not reached");
	}
 }) 

  let frd2 = new Promise((resolve,reject) => {
	let reached = false;
	if(reached){
		setTimeout(resolve,2000,"Sachin reached Home");
	}
	else{
		reject("sachin is not reached");
	}
 }) 
*//* 
  let frd3 = new Promise((resolve,reject) => {
	let reached = false;
	if(reached){
		setTimeout(resolve,1000,"Ragul reached Home");
	}
	else{
	 	reject("Ragul is not reached");
	}
 })  */
/*
 Promise.any([frd1,frd2,frd3])
 .then((message) => console.log(message))
 .catch((message) => console.log(message));
 */
/* 
 try{
	num = prompt("Enter a Number:");
	if(num == ''){
		throw "Cannot be empty";
	}
	if(isNaN(num)){
		throw "Enter a valid number";
	}
	alert(num ** 2);
 }
 catch(error){
	alert(error);
 } */
/* 
 async function fun(){
	return "hello";
 }
 fun();

 async function async(){
	try{
	console.log("hi...");
	res = await frd3;
	console.log(res);
	console.log("bye");
	}
	catch(err){
		console.log(err);
	}
 }

 async();
 */
/* 
 fetch('https://api-thirukkural.vercel.app/api?num=4')
 .then(re => re.json())
 .then(ms => console.log(ms.line1,ms.line2))
 .catch(err => console.log(err)) */

 /* fetch('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/')
 .then(res => res.json())
 .then(ms => ms)
 .catch(err => console.log(err));

 let n=prompt("Enter the String:");
   regexp = /^[A-Z]/;
   if(regexp.test(n)){
	alert("Upper Case");
   }
   else{
	alert("Lower Case");
   }
   */

/*    let n=prompt("Enter a String:");
   regexp =/[aeiou]/gi;
   if(regexp.test(n)){
	alert("Vowels");
   }
   else{
	alert("Consonents");
   } */
/* 
   let myPromise = new promise(function(resolve,reject){

	let h=1;
	if(h){
		resolve();
		console.log(setTimeout("Yes Its fine"),3000);
	}
	else{
		reject();
		alert("Its not Fine");
	}
   });
   myPromise.then( value => console.log(value))
   myPromise.then(value => console.log(value))
   .catch(err => console.log(err));

   let n = document.querySelector("#loader");
   document.getElementById("x").onclick = function{
	n.style.display = "none";
   } */
/* 
   let ul = document.getElementById("ul");
   let f= document.getElementById("add");
   let input = document.querySelector("input");

   f.addEventListener('click',() =>{
	let item = input.value;
	input.value ='';
	let d = document.createElement('li');
	let litext = document.createElement('span');
	let listbtn = document.createElement('button');

	d.appendChild(litext);
	litext.textContent = item;
	d.appendChild(listbtn);
	listbtn.textContent = 'Delete';
	ul.appendChild(d);

	listbtn.addEventListener('click',()=>{
		ul.removeChild(d);
	});

   });

   let parsed = JSON.parse();
   fetch('https://scrape.abstractapi.com/v1/? api_key = YOUR_API_KEY& url = https://www.apple.com')
   .then((res)=>res.json())
   .then((msg)=>msg.setup)
   .catch((err)=>console.log(err)); */
   /* const reviews = [
	{
	  id: 1,
	  name: 'Ragul P',
	  job: 'web developer',
	  img: '',
	  text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
	  id: 2,
	  name: 'Dharu',
	  job: 'web designer',
	  img: '',
	  text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
	  id: 3,
	  name: 'Sri',
	  job: 'intern',
	  img: '',
	  text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	},
	{
	  id: 4,
	  name: 'Sachin',
	  job: 'the boss',
	  img: '',
	  text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
	  currentItem = 0;
	}
	showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
	currentItem--;
	if (currentItem < 0) {
	  currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
  });
  // show random person
  /* 
  randomBtn.addEventListener('click', function () {
	console.log('hello');
  
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson(currentItem);
  });


      var rows = prompt("How many rows for your multiplication table?");
    var cols = prompt("How many columns for your multiplication table?");
    if(rows == "" || rows == null)
   		 rows = 10;
    if(cols== "" || cols== null)
   		 cols = 10;
    createTable(rows, cols);
    function createTable(rows, cols)
    {
      var j=1;
      var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
      for(i=1;i<=rows;i++)
      {
    	output = output + "<tr>";
        while(j<=cols)
        {
  		  output = output + "<td>" + i*j + "</td>";
   		  j = j+1;
   		}
   		 output = output + "</tr>";
   		 j = 1;
    }
    output = output + "</table>";
    document.write(output);
    }
 */

/* 	function generateUniqueId() {
		return Math.random().toString(36).substr(2, 9);
	  }
	const uniqueId = generateUniqueId();
	console.log(uniqueId);
 

	(function() {
		var questions = [{
		  question: "What is 2*5?",
		  choices: [2, 5, 10, 15, 20],
		  correctAnswer: 2
		}, {
		  question: "What is 3*6?",
		  choices: [3, 6, 9, 12, 18],
		  correctAnswer: 4
		}, {
		  question: "What is 8*9?",
		  choices: [72, 99, 108, 134, 156],
		  correctAnswer: 0
		}, {
		  question: "What is 1*7?",
		  choices: [4, 5, 6, 7, 8],
		  correctAnswer: 3
		}, {
		  question: "What is 8*8?",
		  choices: [20, 30, 40, 50, 64],
		  correctAnswer: 4
		}];
		
		var questionCounter = 0; //Tracks question number
		var selections = []; //Array containing user choices
		var quiz = $('#quiz'); //Quiz div object
		
		displayNext();
		
		$('#next').on('click', function (e) {
		  e.preventDefault();
		  
		  if(quiz.is(':animated')) {        
			return false;
		  }
		  choose();
		  
		  if (isNaN(selections[questionCounter])) {
			alert('Please make a selection!');
		  } else {
			questionCounter++;
			displayNext();
		  }
		});
		
		$('#prev').on('click', function (e) {
		  e.preventDefault();
		  
		  if(quiz.is(':animated')) {
			return false;
		  }
		  choose();
		  questionCounter--;
		  displayNext();
		});
		
		$('#start').on('click', function (e) {
		  e.preventDefault();
		  
		  if(quiz.is(':animated')) {
			return false;
		  }
		  questionCounter = 0;
		  selections = [];
		  displayNext();
		  $('#start').hide();
		});
		
		$('.button').on('mouseenter', function () {
		  $(this).addClass('active');
		});
		$('.button').on('mouseleave', function () {
		  $(this).removeClass('active');
		});
		
		
		function createQuestionElement(index) {
		  var qElement = $('<div>', {
			id: 'question'
		  });
		  
		  var header = $('<h2>Question ' + (index + 1) + ':</h2>');
		  qElement.append(header);
		  
		  var question = $('<p>').append(questions[index].question);
		  qElement.append(question);
		  
		  var radioButtons = createRadios(index);
		  qElement.append(radioButtons);
		  
		  return qElement;
		}
		
		function createRadios(index) {
		  var radioList = $('<ul>');
		  var item;
		  var input = '';
		  for (var i = 0; i < questions[index].choices.length; i++) {
			item = $('<li>');
			input = '<input type="radio" name="answer" value=' + i + ' />';
			input += questions[index].choices[i];
			item.append(input);
			radioList.append(item);
		  }
		  return radioList;
		}
		
		function choose() {
		  selections[questionCounter] = +$('input[name="answer"]:checked').val();
		}
		
		function displayNext() {
		  quiz.fadeOut(function() {
			$('#question').remove();
			
			if(questionCounter < questions.length){
			  var nextQuestion = createQuestionElement(questionCounter);
			  quiz.append(nextQuestion).fadeIn();
			  if (!(isNaN(selections[questionCounter]))) { 
				*/

				const APIURL = 'https://api.github.com/users/'
				const main = document.getElementById('main')
				const form = document.getElementById('form')
				const search = document.getElementById('search')
				async function getUser(username) {
				try {
				const { data } = await axios(APIURL + username)
				createUserCard(data)
				getRepos(username)
				} catch(err) {
				if(err.response.status == 404) {
				createErrorCard('No profile with this username')
				}
				}
				}
				async function getRepos(username) {
				try {
				const { data } = await axios(APIURL + username + '/repos?sort=created')
				addReposToCard(data)
				} catch(err) {
				createErrorCard('Problem fetching repos')
				}
				}
				function createUserCard(user) {
				const userID = user.name || user.login
				const userBio = user.bio ? `<p>${user.bio}</p>` : ''
				const cardHTML = `
				<div class="card">
				<div>
				<img src="${user.avatar_url}" alt="${user.name}" class="avatar">
				</div>
				<div class="user-info">
				<h2>${userID}</h2>
				${userBio}
				<ul>
				<li>${user.followers} <strong>Followers</strong></li>
				<li>${user.following} <strong>Following</strong></li>
				<li>${user.public_repos} <strong>Repos</strong></li>
				</ul>
				<div id="repos"></div>
				</div>
				</div>
				`
				main.innerHTML = cardHTML
				}
				function createErrorCard(msg) {
				const cardHTML = `
				<div class="card">
				<h1>${msg}</h1>
				</div>
				`
				main.innerHTML = cardHTML
				}
				function addReposToCard(repos) {
				const reposEl = document.getElementById('repos')
				repos
				.slice(0, 5)
				.forEach(repo => {
				const repoEl = document.createElement('a')
				repoEl.classList.add('repo')
				repoEl.href = repo.html_url
				repoEl.target = '_blank'
				repoEl.innerText = repo.name
				reposEl.appendChild(repoEl)
				})
				}
				form.addEventListener('submit', (e) => {
				e.preventDefault()
				const user = search.value
				if(user) {
				getUser(user)
				search.value = ''
				}
				})