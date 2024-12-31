// 조건부 실행


let x =10;

// if(x>0){
//     console.log("x는 양수입니다.")
// }

//  and 조건(&&)
(x>10) && console.log("x는 양수입니다.")


// or 조건(||)
// 삼항연산자와 단축평가

let y;
let z = y || 20; // y가 undefined이면 z에 20값을 셋팅해줘 

console.log(z);