// 함수 = function 
// input, output을 가진 기능
// 기능에 단위로 묶어서 재활용이 가능해서 편리하다


// 1. 함수 선언문
// function add(매개변수){
    // 함수 내부에서 실행할 로직
// }
//  두 개의 숫자를 입력 받아서 덧셈을 한후 내보내는 함수

a =10;
b =10;
//함수 선언문 방식
function add(x,y){
    return x+y;
}

//  2. 함수 표현식 => 함수의 이름을 가지지 않는다고 해서 익명함수라고 한다.
// add2라는 함수이름을 가지는 것 아닌가요? 
// -> add2라는 변수를 선언해 해당함수를 value로 준 것이므로 함수의 이름이 아니다
let add2 = function(x,y) {
    return x + y;
};

//함수를 호출한다(= 사용한다)
// 함수명() -> add(입력값)
console.log(add(a,b)); //20
let functionResult = add2(3,4);
console.log(functionResult); //7



// 함수의 input : 매개변수(매개체가 되는 변수)
// 함수의 output : return : 반환값