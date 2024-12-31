// 문 loop(if, else if, switch ~)

// 조건문 - if, else if, else, switch

// 1. if 문
// if(true 또는 False가 나올 수 있는 조건=True일때만 실행){}


//  1-1
// let x = 10;
// if (x > 0) {
//     console.log("x는 양수입니다");
// }

// 1-2
// let y = "hello world";

// y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력
// if (y.length > 5) {
//     console.log(y.length);
// }


// 2 if - else문 
let x = 22;

if (x < 0) {
    console.log("x는 음수입니다.");
} else if (0 < x <= 20) { //  0 <= x <10 조건 쓰면안됨 
    // 22인데도 else if문으로 들어와버린다. 0< x && x <=20 으로 선언해야 두 범위 안으로 온다
    console.log("x는 양수입니다.");
} else {
    console.log("x는 0입니다.");
}

// 3 switch 문

let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log("사과는 빨간색입니다.");
        break; // case마다 다돌아서 꼭 넣어 주어야 한다 case문을 나간다
    case "바나나":
        console.log("바나나는 노란색입니다.");
        break;
    case "오렌지":
        console.log("오렌지는 주황색입니다.");
        break;
    default:
        console.log("해당하는 과일이 없습니다.");
        break;
}
