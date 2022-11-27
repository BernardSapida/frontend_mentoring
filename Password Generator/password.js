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
	let tempPassword="";
	let password = "";
	
	// Updating tempPassword based on checkbox
	if(notCapital == true) tempPassword += lowercase;
	if(capital == true)  tempPassword += uppercase;
	if(numerals == true) tempPassword += numbers;
	if(symbolVar == true)  tempPassword += symbols;

	// Shuffling Password
	for(i=0; i<passLength; i++) password += tempPassword.charAt(Math.floor(Math.random()*tempPassword.length));
	
	// Manipulating DOM
	document.getElementById("password").innerText = password;
	document.getElementById('charNum').innerText = "Number of Characters: " + passLength;
}
