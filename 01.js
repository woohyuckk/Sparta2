//변수, 상수 
//실행은 terminal에 node "파일명" -> node 01.js
//메모리에 저장한다. 읽어들여서 재사용한다. 변수.
//똑같이 써야하는 말들을 변수를 통해 재사용하는 메커니즘


//변수의 5가지 주요개념
// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어 오는 것


// 변수를 선언할 수 있는 3가지 방법 : var, let, const 
//var
var myVar = "hello World"; 
var myVar = "test1";   // 같은 이름의 변수 ,.  선언이 가능하다.
 myVar = "Goodbye";   // 같은 이름의 변수 ,.  선언이 가능하다.

console.log(myVar);

// let
let myLet = "hello World2";
myLet ="Goodbye2"
// let myLet = "test2"; // 같은 이름의 변수 선언이 불가능하다.
console.log(myLet);

// const
const myConst = "hello World3";
myConst = "Goodbye3"
// const myConst = "test3"; // 같은 이름의 변수 선언이 불가능하다
console.log(myConst);


//Q myVar에 재할당하면 두 선언한 값중에 어디로 저장되나요?