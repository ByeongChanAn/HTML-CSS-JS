/* refactoring*/
let SCISSORS = '가위';
let ROCK = '바위';
let PAPER = '보';

// '가위', '바위', '보' 버튼 클릭 핸들러
function onButtonClick(userInput) {
  let comInput;
  var rnd = Math.random();

  if (rnd < 0.33) {
    comInput = SCISSORS;
  } else if (rnd < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  var result = '컴퓨터: ' + comInput;

  if (userInput === SCISSORS) {
    if (comInput === SCISSORS) {
      result += ' - 컴퓨터와 비겼습니다.';
    } else if (comInput === ROCK) {
      result += ' - 컴퓨터에게 졌습니다...';
    } else {
      result += ' - 컴퓨터를 이겼습니다!!';
    }
  } else if (userInput === ROCK) {
    if (comInput === SCISSORS) {
      result += ' - 컴퓨터를 이겼습니다!!';
    } else if (comInput === ROCK) {
      result += ' - 컴퓨터와 비겼습니다.';
    } else {
      result += ' - 컴퓨터에게 졌습니다...';
    }
  } else {
    if (comInput === SCISSORS) {
      result += ' - 컴퓨터에게 졌습니다...';
    } else if (comInput === ROCK) {
      result += ' - 컴퓨터를 이겼습니다!!';
    } else {
      result += ' - 컴퓨터와 비겼습니다.';
    }
  }

  alert(result);
}



/*
let SCISSORS = '가위';
let ROCK = '바위';
let PAPER = '보';



function onScissorsClick() {
	let comInput;
	let rnd=Math.random();
	
	if (rnd < 0.33) {
		comInput =SCISSORS;
		
	}	else if (rnd <0.66) {
		comInput=ROCK;
	}	else{
		comInput= PAPER;
	}
	
	
	if(comInput === SCISSORS) {
		alert('컴퓨터: '+ comInput +' - 컴퓨터와 비겼습니다.');
	}
	else if(comInput ===ROCK){
		alert('컴퓨터: '+ comInput +' - 컴퓨터에게 졌습니다...');
	}
	else {
		alert('컴퓨터: '+ comInput +' - 컴퓨터를 이겼습니다!!');
	}
}


function onRockClick() {
	let comInput;
	let rnd=Math.random();
	
	if (rnd < 0.33) {
		comInput =SCISSORS;
		
	}	else if (rnd <0.66) {
		comInput=ROCK;
	}	else{
		comInput= PAPER;
	}
	
	
	if(comInput === SCISSORS) {
		alert('컴퓨터: '+ comInput +' - 컴퓨터를 이겼습니다!!');
	}
	else if(comInput ===ROCK){
		alert('컴퓨터: '+ comInput +' - 컴퓨터와 비겼습니다.');
	}
	else {
		alert('컴퓨터: '+ comInput +' - 컴퓨터에게 졌습니다...');
	}
}


function onPaperClick() {
	let comInput;
	let rnd=Math.random();
	
	if (rnd < 0.33) {
		comInput =SCISSORS;
		
	}	else if (rnd <0.66) {
		comInput=ROCK;
	}	else{
		comInput= PAPER;
	}
	
	
	if(comInput === SCISSORS) {
		alert('컴퓨터: '+ comInput +' - 컴퓨터에게 졌습니다...');
	}
	else if(comInput ===ROCK){
		alert('컴퓨터: '+ comInput +' - 컴퓨터를 이겼습니다!!');
	}
	else {
		alert('컴퓨터: '+ comInput +' - 컴퓨터와 비겼습니다.');
	}
}

*/