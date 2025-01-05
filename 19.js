// 반복문

// for ([초기문]; [조건문]; [증감문]){
// 동작
// }    

// 초기문과 증감문은 필수선언 조건이 아닙니다. 조건문이 true라면 for문이 실행됩니다.



//for 문 
Arr = [1, 2, 3, 4];

for (i = 0; i < Arr.length; i++) {

    Arr[i] = Arr[i] * 2;

}

console.log(Arr);

//while 문과 do..while문 
//두개는 같은 조건처럼 보이지만 do while문은 먼저 조건을 확인하는게 아니고,
//실행한 다음 조건을 확인한다.
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (i < 10);


// break 문 

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // 0 1 2 3 4
}

// for문은 i가 10보다 작으면 동작하지만 i가 5가되면 조건문에 의해 break = for문을 중단한다.


// continue 문 

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// continue 문은 i가 5가되면 i문 조건에 들어가고 continue에 의해 5는 출력되지 않고
// 다음 반복문을 호출한다.


