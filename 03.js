// 2. 문자 : string(문자열 = 문자의 나열)
// ''와 ""를 사용하여 감싼형태

let str = "Hello World!";
// console.log(str);
// console.log(typeof str);

// 2.1 문자열 길이 확인하기 
// console.log(str.length); 
//.은 JS에서 ~의 라는 의미 정도로 해석하면된다
// JS에서는 여러가지 미리 만들어 놓은 함수가 있는데 이를 메서드라고한다.
// 문자열.method 하면 문자열에 쓰도록 만들어진 함수들을 사용할 수 있다.
// 문자열 길이 확인하기 띄어쓰기 포함 12자

// 2.2 문자열 결합하기 (concat = concatenation)
let str1 = "hello, ";
let str2 = "world!"
let result = str1.concat(str2);
// console.log(result);

// 2.3 문자열 자르기 
let str3 = "Hello, World"
// console.log(str3.substr(7,5));
//  7번째 문자이후로(8번째)[출발점],5개 출력해줘 "World" 
// console.log(str3.slice(7,12));
// 7번째 문자이후로(8번째)[출발점],12번째 문자까지[종결점]
// index는 0부터 샌다고 생각하면 편할것같음 

// 2-4. 문자열 검색 search("")안에 있는 문자열 검색
let str4 = "Hello, World!";
console.log(str4.search("Woxld")); // 7 

// 2-5. 문자열 대체

let str5 = "Hello, World!"
let result01 = str5.replace("World","Javascript");
// console.log(result01);

// 2-6 문자열 분할

let str6 = "apple,banana,kiwi";
let result02 = str6.split(",");
console.log(result02);