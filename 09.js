// 스코프, 전역변수, 지역변수, 화살표함수

// 스코프 : 변수가 영향을 끼치는 범위
// 전역변수 : 스코프 범위가 전체영역일때
// 지역변수 : 스코프 범위가 함수영역일때


// 전역변수 x 

function print() {

    let x = 10;
    console.log(x);

}
console.log(x); // error
printX(); 