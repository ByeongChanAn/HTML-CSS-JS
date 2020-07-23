let comScore=0;
let userScore=0;
let isComputerTurn =true;
let shotsLeft=15;
function onComputerShoot(){
	if (!isComputerTurn)
		return;
		
	
	let textElem= document.getElementById('text');
	let shootType= Math.random() < 0.5 ? 2 : 3;
	let comScoreElem= document.getElementById('computer-score');

	
	
	if (shootType ===2){
		if (Math.random() < 0.5){
			textElem.innerHTML='컴퓨터가 2점슛을 성공시켰습니다!';
			
			comScore+=2;
			comScoreElem.innerHTML=comScore;
			
		}else{
			textElem.innerHTML='컴퓨터가 2점슛을 실패했습니다';
		}
		
		
	}
	else{
		if (Math.random() < 0.33){
			textElem.innerHTML='컴퓨터가 3점슛을 성공시켰습니다!';
			
			comScore+=3;
			comScoreElem.innerHTML=comScore;
			
		}else{
			textElem.innerHTML='컴퓨터가 3점슛을 실패했습니다';
		}
		
		
	}
	
	
	isComputerTurn=false;
	let computerButtons = document.getElementsByClassName('btn-computer');
	for (let i = 0 ;i<computerButtons.length;i++){
		computerButtons[i].disabled = true;
	}
	
	
	let userButtons = document.getElementsByClassName('btn-user');
	
	for (let i=0; i <userButtons.length;i++){
		userButtons[i].disabled=false;
	}
}



function onUserShoot(shootType){
	if(isComputerTurn)
		return;
	
	let textElem=document.getElementById('text');
	let userScoreElem=document.getElementById('user-score');
	
	if (shootType ===2){
		if (Math.random() < 0.5){
			textElem.innerHTML='2점슛이 성공했습니다!';
			
			userScore+=2;
			userScoreElem.innerHTML=userScore;
			
		}else{
			textElem.innerHTML='2점슛이 실패했습니다.';
		}
		
		
	}
	else{
		if (Math.random() < 0.33){
			textElem.innerHTML='3점슛이 성공했습니다!';
			
			userScore+=3;
			userScoreElem.innerHTML=userScore;
			
		}else{
			textElem.innerHTML='3점슛이 실패했습니다';
		}
		
		
	}
	isComputerTurn=true;
	
	
	let computerButtons = document.getElementsByClassName('btn-computer');
	for (let i = 0 ;i<computerButtons.length;i++){
		computerButtons[i].disabled = false;
	}
	
	
	let userButtons = document.getElementsByClassName('btn-user');
	
	for (let i=0; i <userButtons.length;i++){
		userButtons[i].disabled=true;
	}
	
	shotsLeft--;
	
	let shotsLeftElem=document.getElementById('shots-left');
	shotsLeftElem.innerHTML =shotsLeft;
	
	if(shotsLeft===0){
		if(userScore>comScore)
			textElem.innerHTML='승리했습니다!';
		else if (userScore < comScore)
			textElem.innerHTML='아쉽게도 졌습니다...';
		else
			textElem.innerHTML='비겼습니다.';
		
		for (let i=0; i<computerButtons.length;i++){
			computerButtons[i].disabled=true;
			
		}
		for (let i=0; i<userButtons.length;i++){
			userButtons[i],disabled=true;
		}
		
	}
}