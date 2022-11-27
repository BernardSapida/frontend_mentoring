function generatePassword(){
	let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let lowercase = "abcdefghijklmnopqrstuvwxyz";
	let numbers = '1234567890';
	let symbols= "!@#$%&";
	let capital = document.getElementById("uppercaseEl").checked
	let notCapital = document.getElementById('lowercaseEl').checked
	let numerals = document.getElementById('numbersEl').checked
	let symbolVar = document.getElementById('symbolsEl').checked
	let passLength = document.getElementById('customRange1').value
	let charNum = document.getElementById('charNum')
	let num="";
	
	if (capital == false && notCapital == false && numerals == false && symbolVar == false) console.log('click buttons down there'); 
	if (notCapital == true) num+=lowercase;
	if(capital == true)  num+=uppercase;
	if (numerals == true) num+=numbers;
	if (symbolVar == true)  num+=symbols;

	let passChar = "";
	for(i=0;i<passLength;i++) passChar+=num.charAt(Math.floor(Math.random(num.length)*num.length));
	
	document.getElementById("password").innerText= passChar;
	document.getElementById('charNum').innerText="Number of Characters: "+ passLength;
}
