//화살표 함수
//ES6 신 문법


function add(x,y){
    return x+y
}

x=2;
y=3;
// 1-1. 기본적인 화살표 함수

let arrowfunc01 = (x,y) => {return x+y}

// 1-2. 한줄로 쓰는 방법
let arrowfunc02 = (x,y) => x+y 

console.log(arrowfunc02(x,y));
//함수안에 선언되는 로직이 한줄로 표현 가능할 때 return, {} 생략가능

function testFunc(x) {
    return x;
}

let arrowfunc03 = (x) = x;