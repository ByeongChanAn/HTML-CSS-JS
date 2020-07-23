
const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('js-greeting');
const USER_KEY = 'USER';

function saveName(text){
	
	localStorage.setItem(USER_KEY,text);
}

function handleSubmit(event){
	event.preventDefault();
	const current_value = input_value;
	saveName(current_value);
}

function loadName(){
	const currentUser = localStorage.getItem(USER_KEY);
	printGreeting(currentUser);
}

function printGreeting(name){
	
	
}
form.addEventListner('submit',handleSubmit);

