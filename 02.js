//데이터 타입
//데이터 타입은 runtime에 결정된다.


// 1. 숫자 타입
// 1-1. 정수
let num1 = 10;
console.log(num1);
console.log(typeof num1); // num1 변수의 데이터 타입을 출력하는 것


// 1-2. 실수(float)
let num2 = 3.14;
console.log(num2);
console.log(typeof num2); //number

// 1-3. 지수형(exp)
let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3)
console.log(typeof num3); //number

//1-4.
// Nan : Not a Number - 나누기를 사용하려면 숫자형이여야 계산이 불가함
let num4 = "Hello" /2;
console.log(num4);

//1-5. infinity (무한대도 숫자형이다)
let num5 =1/0;
console.log(num5)
console.log(typeof num5); // number

//1-6. -infinity
let num6 =-1/0;
console.log(num6)
console.log(typeof num6); // number

