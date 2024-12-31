
// 기본 객체 생성 key - value pair
// let person = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자"
// };

// value에 오는 데이터타입의 제한은없다. 함수, 배열, 객체, boolean 다 가능


// 1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 25, "여자");

// console.log(person1); //{ name: '홍길동', age: 30, gender: '남자' }


// 2. 접근하는 방법 .keys로 접근하기
// console.log("1", person.name); // 1 홍길동
// console.log("2", person.age); // 2 30
// console.log("3", person.gender); // 3 남자



// 객체 메소드(method) 객체가 가진 여러가지 기능 : Object.~~~
// 3-1. Object.key() : key를 가져오는 메소드
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};

let keys = Object.keys(person);
// console.log("keys =>", keys);   //  keys => ["name", "age", "gender"]
// console.log(keys);   // ["name", "age", "gender"]



// 3-2. Object.value() : value를 가져오는 메소드


let values = Object.values(person);

// console.log(values);   // ["홍길동", 30, "남자"]

//  3-3. entries key : value가 하나의 요소가 되어 배열을 만듦

let entries = Object.entries(person);

// console.log(entries); // [ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ] ]


// 3-4. assign 객체를 복사하는 메서드
let newPerson = Object.assign({}, person, { age: 35 }); // age 속성은 35로 바꿔줘
// assign(어디에 복사, 무엇을 복사)
console.log(Object.assign(newPerson, person)) // { name: "홍길동", age: 35, gender: "남자" }
console.log(newPerson);   // { name: "홍길동", age: 35, gender: "남자" }


// 객체 비교
// 크기가 상당히 커요!! -> 메모리에 저장할 때 별도의 공간에 저장
// person1 별도 공간에 댛나 주소


// let person1 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자"
// };

// let person2 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자"
// };

// console.log(person1 === person2);   // false
// 객체의 key, value는 값을 저장하는게 아니라 주소를 저장한다 .
// console.log(JSON.stringify(person1) === JSON.stringify(person2));   // true 
// 객체의 주소로 되어있던것을 문자화 시키는 메서드 방법 



// 객체 병합 

let person1 = {
    name: "홍길동",
    age: 30
};

let person2 = {
    gender: "남자"
};

let mergedPerson = { ...person1, ...person2 }; // ... : spread operator
// ...person1 : name: "홍길동",  age: 30 ...person : gender: "남자" 괄호{}를 없애고 가져오기

console.log(mergedPerson);   // { name: "홍길동", age: 30, gender: "남자" }