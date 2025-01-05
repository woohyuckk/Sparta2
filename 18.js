// while 

let i = 0;

// while (i < 10) {
//     //메인로직
//     console.log(i);
//     //증감
//     i++;
// }


// 3초과 100미만의 숫자 중 5의 배수인 것만 출력하는 예
// i = 4;
// while (3 < i && i < 100) {
//     if (i % 5 === 0) {
//         console.log(i + "는 5의 배수입니다.")
//     }
//     i++;
// }

// do-while 문 실행 먼저 조건은 나중에 확인
// i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// break 문 - 반복문을 종료하는 문 

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}


// continue 문 - 반복문을 한 사이클 넘기는 문
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
//  5가 생략됨 if문을 다음 순서로 넘기는 역할 