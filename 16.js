// 배열

// 1. 생성
// 1-1. 기본 생성
// let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
// let numbers = new Array(5);
// 크기가5인 Array를 만들어줘

// 2. 요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);


// 3. 배열 메소드
// 3-1. push 배열의 마지막 요소 추가

// let fruits = ["사과", "바나나"];
// fruits.push("오렌지");
// console.log(fruits);   // ["사과", "바나나", "오렌지"]


// 3-2 pop 배열의 마지막 요소 삭제
// let fruits = ["사과", "바나나", "오렌지"];

// fruits.pop();

// console.log(fruits);   // ["사과", "바나나"]

// 3-3 shift 배열의 첫번째 요소를 삭제

// fruits.shift();
// console.log(fruits);   // ["바나나", "오렌지"]


// 3-4, unshift 배열의 첫번째 요소를 추가

// let fruits = ["바나나", "오렌지"];
// fruits.unshift("사과");
// console.log(fruits);   // ["사과", "바나나", "오렌지"]

// 3-5. splice 메서드 splice(n, n, "포도")
// let fruits = ["사과", "바나나", "오렌지"];

// fruits.splice(1, 1, "포도");
// (몇번째 부터, 몇개 지워, 그자리에 "포도" 끼우기) =>바나나부터 1개지워 바나나삭제

// console.log(fruits);
// ["사과", "포도", "오렌지"]

// 3-6. slice 메서드
// let fruits = ["사과", "바나나", "오렌지"];

// let slicedFruits = fruits.slice(1, 2); // 1부터 2전까지

// console.log(slicedFruits);   // ["바나나"]


// foreach, map, filter, reduce 메소드
// let numbers = [1, 2, 3, 4, 5];
// foreach 배열의 원소를 순서대로 넣어서 반복하는 메소드
// numbers.forEach(function (number) { //매개변수자리가 함수를 넣는 것 : 콜백 함수
// 함수의 매개변수 명은 아무거나 넣어도 상관없음 numbers의 요소가 순서대로 하나씩 들어감
// console.log("배열의 원소입니다. =>", number);
// });

// (2) map  새로운 배열을 만드는 메서드기 때문에 새로 저장할 변수가 필요하다.
// return문이 필요하다. -> 원본 길이의 길이와 똑같은 배열이 리턴된다.
// let newNumbers = numbers.map(function (item) {
// return item * 2;
// });
// console.log(newNumbers);

// (3) filter 새로운 배열을 만듦 -> 새로 저장 할 변수 필요
// return문에 map과 달리 조건을 만족하는 요소를 모두 생성
// let numbers = [4, 1, 5, 4, 5];

// let evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// });

// console.log(evenNumbers);   // [4, 4]

// (4) find filter와 유사하지만 조건을 만족하는 첫번째 요소를 반환함
// let numbers = [4, 5, 4, 3, 5];

let foundNumber = numbers.find(function (number) {
    return number > 3;
});

console.log(foundNumber);   // 4


// (5) some return 조건을 만족하는 요소가 있는지 확인해서 true or false를 반환하는 메서드
// true  요소가 하나라도 있으면 true를 반환
// let numbers = [1, 2, 3, 4, 5];

let hasEvenNumber = numbers.some(function (number) {
    return number % 2 === 0;
});

console.log(hasEvenNumber);   // true


// (6) every some과 비슷하지만 some과 달리 모든요소가 true인지 확인하고 true or false 반환 
// let numbers = [2, 4, 6, 8, 10];

let isAllEvenNumbers = numbers.every(function (number) {
    return number % 2 === 0;
});

console.log(isAllEvenNumbers);   // true

// (7) sort  객 배열의 요소를 순서대로 a - b에 넣어 음수면 a반환 양수면 b를 반환해 오름차순 정렬 b - a는 내림차순

// let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

numbers.sort(function (a, b) {
    return a - b;
});

console.log(numbers);   // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// (8) reverse 배열의 요소를 역순으로 정렬 

let numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers);   // [5, 4, 3, 2, 1]