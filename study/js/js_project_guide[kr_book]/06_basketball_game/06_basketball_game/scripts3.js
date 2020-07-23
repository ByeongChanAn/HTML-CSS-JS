let computer = {
	score:0,
	percent2:0.5,
	percent3:0.33
};

let user = {
	score:0,
	percent2:0.5,
	percent3:0.33
};

let game= {
	isComputerTurn:true,
	shotsLeft:15
};


function onComputerShoot(){
	if (!game.isComputerTurn)
		return;
		
	updateAI();
	
	let $textElem= $('#text');
	let shootType= Math.random() < 0.5 ? 2 : 3;
	let $comScoreElem= $('#computer-score');

	
	if (Math.random() <computer['percent'+shootType]){
		showText('컴퓨터가'+shootType+'점슛이 성공했습니다!');
		updateComputerScore(shootType);
	}else {
		showText('컴퓨터가'+shootType+'점슛이 실패했습니다.')
	}
	
	
	game.isComputerTurn=false;

	disableComputerButtons(true);
	disableUserButtons(false);
}



function onUserShoot(shootType){
	if(game.isComputerTurn)
		return;
	
	let $textElem=$('#text');
	let $userScoreElem=$('#user-score');

	if (Math.random() <user['percent'+shootType]){
		showText(shootType+'점슛이 성공했습니다!');
		updateUserScore(shootType);
	}else {
		showText(shootType+'점슛이 실패했습니다.')
	}
	
	game.isComputerTurn=true;
	
	disableComputerButtons(false);
	disableUserButtons(true);
	
	game.shotsLeft--;
	
	let $shotsLeftElem=$('#shots-left');
	$shotsLeftElem.html(game.shotsLeft);
	
	if(game.shotsLeft===0){
		if(user.score>computer.score)
			showText('승리했습니다!');
		else if (user.score < computer.score)
			showText('아쉽게도 졌습니다...');
		else
			showText('비겼습니다.');
		
		
		
	disableComputerButtons(true);
	disableUserButtons(true);
		
		
	}
}
function showText(s) {

	let $textElem=$('#text');
	$textElem.fadeOut(400, function() {
	$textElem.html(s);
	$textElem.fadeIn(100);
	});
}
function updateComputerScore(score) {
	computer.score +=score;
	let $comScoreElem =$('#computer-score');

	$comScoreElem.animateNumber({
		number: computer.score
	});
	
}
function updateUserScore(score) {
	user.score +=score;
	let $userScoreElem =$('#user-score');

	$userScoreElem.animateNumber({
		number: user.score
	});
}

function disableComputerButtons(flag){

	$('.btn-computer').prop('disabled',flag);

}
function disableUserButtons(flag){

	$('.btn-user').prop('disabled', flag);
}

function updateAI() {
	let diff= user.score-computer.score;
	if(diff >=10){
		computer.percent2=0.7;
		computer.percent3=0.43;
	}else if(diff>=6) {
		computer.percent2=0.6;
		computer.percent3=0.38;
	}else if(diff<=-10){
		computer.percent2=0.3;
		computer.percent3=0.23;
	}else if(diff<=-6){
		computer.percent2=0.4;
		computer.percent3=0.28;
	}

}
$(function() {
	showText(3);

	setTimeout(function() {
		showText(2);

		setTimeout(function() {
			showText(1);

			setTimeout(function() {
				showText('컴퓨터부터 시작합니다!');
				disableComputerButtons(false);
			},1000);
		},1000);

	},1000);		
});
/*
<script src="http://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>

*/