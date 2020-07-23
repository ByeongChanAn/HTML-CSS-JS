
const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');


function getTime() {
	const date = new Date()
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	//삼항연산자 써서 0시처럼 0 나오게하기
	clockTitle.innerText= `${hours}:${minutes}:${seconds}`
}

function init(){
	getTime();
	setInterval(getTime,1000);
	
}
init();