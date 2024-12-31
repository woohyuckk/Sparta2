// for, while => ~동안 : 반복문

// 1-1. 기본적인 for문 
//  i라는 변수는 0부터 시작
//  i가 10보다 작다면 계속 실행
//  한 사이클을 돌면 i를 1증가시킴)
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


//1-2. 배열과 for문은 짝꿍이다.
// let numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

let solution = (i) => i % 2 ? "홀수 입니다." : i;

for (i = 0; i < 11; i++) {
    if (i % 2 === 0 && i > 0) {
        console.log(i + "는 2의 배수입니다.")
    }
}

// 1-3 for~in 문
// 객체의 속성을 출력하는 문법 
let person = { name: "John", age: 30, gender: "male" };

for (let key in person) {
    console.log(key + ": " + person[key]);
    //value에 접근하는 방법 person[key]
}