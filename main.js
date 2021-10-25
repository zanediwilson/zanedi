const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/h1.png'){
		myImage.setAttribute('src','images/h2.png');
	}else {
		myImage.setAttribute('src','images/h1');
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
	let myName = prompt('Please Enter Your User Name');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla is Cool,' + myName; 
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}