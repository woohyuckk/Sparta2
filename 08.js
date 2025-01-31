// 스코프, 전역변수, 지역변수, 화살표함수

// 스코프 : 변수가 영향을 끼치는 범위
// 전역변수 : 스코프 범위가 전체영역일때
// 지역변수 : 스코프 범위가 함수영역일때
// 블록 스코프 : 스코프 범위가 {} 안에 있는 함수 일때 
// 주의: var는 {}안에 선언해도 지역(함수) 스코프를 가진다.

// 전역변수 x 
let x = 10;

function printX() {
    console.log(x);
}

console.log(x); //10
printX(); //10