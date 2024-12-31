// // 산술 연산자 (+, -, *, /, %)

// // 1. 더하기 연산자 = 문자열
// console.log(2 + 3);       // 5
// console.log("2" + "3");   // "23"
// console.log("2" + 3);     // "23"
// console.log(2 + "3");     // "23"

// // 2. 빼기 연산자 = 숫자형
// console.log(1 - "2");       // -1
// console.log("5" - "2");   // 3
// console.log("5" - 2);     // 3
// console.log(5 - "2");     // 3
// console.log("five" - 2);  // NaN

// // 3. 곱하기 연산자 = 숫자형
// console.log(2 * 3);       // 6
// console.log("2" * "3");   // 6
// console.log("2" * 3);     // 6
// console.log(2 * "3");     // 6
// console.log("two" * 3);   // NaN

// // 4. 나누기 연산자(/) = 숫자형
// console.log(6 / 3);       // 2
// console.log("6" / "3");   // 2
// console.log("6" / 3);     // 2
// console.log(6 / "3");     // 2
// console.log("six" / 3);   // NaN

// // 5. 나머지 연산자(%) 
// console.log(7 % 3);       // 1
// console.log("7" % "3");   // 1
// console.log("7" % 3);     // 1
// console.log(7 % "3");     // 1
// console.log("seven" % 3); // NaN


// 할당 연산자(assignment)
// 2-1 등호 연산자(=) 
// let x = 10; // x에 값을 할당 하는 연산자

// 2-2. 더하기 등호 연산자 (+=)

// x += 5;
// console.log(x); // 15

// x= x+5
// console.log(x); // 20

// 2-3. 빼기 등호 연산자(-=)
// x -= 5; // 15
// x = x -20; // -5
// console.log(x); // -5

// 3-4. 곱하기 등호 연산자(*=)
// let a =10;
// a *= 2;

// console.log(a); // 20

// 비교 연산자  (true or false값으로 결과값이 나오는 연산자)
// 1. 일치 연산자(===)
// 데이터타입(숫자형,문자열)까지 일치해야 true를 반환하는 연산자

// 2. 불일치 연산자(!==)
// 데이터타입까지 다르면 true
// console.log(2 !== 2);   // false
// console.log("2" !== 2);   // true
// console.log(2 !== "2");   // true

// 3. 작다 연산자(<), 작거나 같다 연산자(<=), 크다, 크거나 같다
// console.log(2 < 3);   // true
// console.log(2 < "3");   // true
// console.log("2" < 3);   // true
// console.log(2 <= 3);   // true
// console.log(2 <= "3");   // true
// console.log("2" <= 3);   // true
// console.log(2 <= 2);   // true

// 논리 연산자 true와 false를 서로 비교하는 연산자
// 1. 논리곱 연산자(&&) 양쪽이 모두 true일때만 true 반환
// console.log(true && true);   // true
// console.log(true && false);   // false
// console.log(false && true);   // false
// console.log(false && false);   // false

// 2. 논리합 연산자(||) 두개 중 하나이상이 true일때 true
// console.log(true || true);   // true
// console.log(true || false);   // true
// console.log(false || true);   // true
// console.log(false || false);   // false


// 3. 논리부정 연산자(!) 원래 가진 값의 반대로
// console.log(!true);   // false
// console.log(!false);   // true
// console.log(!(2 > 1));   // false


// 삼항 연산자 조건 ? true : false; 삼항으로 이루어진 연산자

let x = 10;
let result = (x > 5) ? "크다" : "작다";
console.log(result);   // "크다"

let y =20;

let answer = (y<10) ? "작다" : "크다";
console.log(answer); // "크다"

// 타입연산자(typeof)
console.log(typeof 123);   // "number"
console.log(typeof "123");   // "string"
console.log(typeof true);   // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);   // "object"
console.log(typeof {});   // "object"
console.log(typeof []);   // "object"
console.log(typeof function(){});   // "function"
