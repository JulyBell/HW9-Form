let button = document.getElementById('addInfo');

let loginForm = document.forms.userData;
let userInput = loginForm.elements.username;
let passInput = loginForm.elements.password;

//обработчики:
button.addEventListener('click', processData);
userInput.addEventListener('input', observeUser);
passInput.addEventListener('input', observePass);

function observeUser(e){
	e.preventDefault();

	let regExpInput = /[a-zA-Z1-9]{2,15}/;
	let inputValid = regExpInput.test(userInput.value);
	console.log('login:', inputValid);

	if(inputValid === false){
		userInput.classList.add('invalidInput');
	}else{
		userInput.classList.remove('invalidInput');
	}

}

function observePass(e){
	e.preventDefault();

	//let regExpPass = /([a-zA-Z1-9](?=.*[$])(?=.*[#])){6,15}/;
	let regExpPass = /[a-zA-Z1-9]{6,15}(?=.*[$])(?=.*[#])/;

	let passValid = regExpPass.test(passInput.value);
	console.log('pass', passValid);

	if(passValid === false){
		passInput.classList.add('invalidInput');
	}else{
		passInput.classList.remove('invalidInput');
	}
}

function processData(e){
	e.preventDefault();

	if(userInput.className !== 'invalidInput' && passInput.className !== 'invalidInput'){
		console.log(userInput.value);
	}else{
		console.log('Please enter valid login and password!');
	}	
}


