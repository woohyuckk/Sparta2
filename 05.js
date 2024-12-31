//형 변환
//명시적 형 변환-의도한 대로 형을 변환, 암시적 형 변환-개발자가 정의하지 않아도 형을 변환



// 암시적 형 변환

// 1-1. 문자열

let = result1 = 1 + "2";
// console.log(result1);
// console.log(typeof result1)

// "12", string  숫자와 문자가 만나면 문자열이 된다.


let = result2 = "1"+true;

// console.log(result2);
// console.log(typeof result2);
// "1true", string 문자열과 boolean이 만나면 문자열이 된다.
// 결론 : +는 문자열이 지배한다.

// {}, null, undefined + "1" => 문자열이 된다. 


// 1-2. 숫자
let result3 = 1 - "2";
let result4 = "2" * "3";
// console.log(result3);
// console.log(typeof result3);
// -1, number 

// console.log(result4);
// console.log(typeof result4);
// 6, number 

// 연산자 -, *, %, /는 문자형의 타입을 숫자형으로 변환하여 계산한다.



// 2. 명시적 형 변환 (직접적으로 형을 명시해 주는 방법)
// 2-1. Boolean
// console.log(Boolean(0)); //false
// console.log(Boolean("")); //false
// console.log(Boolean(null)); //false 
// console.log(Boolean(undefined)); //false
// console.log(Boolean(NaN)); // false
// console.log("------------");
// console.log(Boolean("false")); // true 빈문자열이 아니면 true를 반환한다
// console.log(Boolean({})); // 빈객체은 true로 반환된다
// console.log(Boolean(2)); //0이 아닌값은 true
// console.log(Boolean([])); // 빈배열은 true로 반환된다.


// 2-2. 문자형 

let result5 = String(123); // 소문자 string 안됨 String만 가능
console.log(typeof result5); // string
console.log(result5); // 123

let result6 = String(true); // string
console.log(typeof result6); // true
console.log(result6);

let result7 = String([]); // string
console.log(typeof result7); // flase
console.log(result7);

let result8 = String(null); 
console.log(typeof result8);
console.log(result8);

let result9 = String(undefined);
console.log(typeof result9);
console.log(result9);


//2-3. 숫자형

let result10 = Number("123");
console.log(typeof result10);