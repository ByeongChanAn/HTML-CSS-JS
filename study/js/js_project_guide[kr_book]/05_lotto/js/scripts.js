

let list = [];

for (let i=1; i<=45 ; i++){
	list.push(i);
}

//뽑아낸 숫자들을 담아낼 배열
let result = [];

for (let i=0;i<=6;i++){
	
	let index = Math.floor(Math.random() * list.length);	
	
	//랜덤으로 선택한 인덱스의 값
	let num= list[index];
	
	//배열에서 인덱스의 값 제거
	list.splice(index,1);
	
	result.push(num);
	
}


function compare(a,b){
	if (a<b){
		return -1;
	}	
	if (a>b){
		return 1;
	}
	
	return 0;
	
	
} 

/*
1)간단한 비교함수 만들기

숫자들만 정렬할때 nan이런거 빼고
function compare(a,b){
	return a-b; //-->오름차순
	//return b-a; -->내림차순
}

2)익명함수 : 이름이 존재하지 않는 함수. 자바스크립트에서는 자주 사용한다?
기존의 코드를 익명함수를 사용한 형태로 바꿔 보면
result.sort(function(a,b) {
	return a-b;
})
*/
//랜덥하게 뽑힌 숫자 6개를 정렬
result.sort(compare);




for (let i=0; i<6; i++){
	document.write('<span class="ball">' + result[i] +'</span>');
	
	
}
console.log('결과',result);