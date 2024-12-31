//  falsy한 값, truthy한 값


// if문에 사용되는 조건들에 대해서 해보기 


//falsy한 값 
if (0) {
    console.log("이 코드는 실행되지 않습니다.");
}

if ("") {
    console.log("이 코드는 실행되지 않습니다.");
}

if (null) {
    console.log("이 코드는 실행되지 않습니다.");
}

if (undefined) {
    console.log("이 코드는 실행되지 않습니다.");
}

if (NaN) {
    console.log("이 코드는 실행되지 않습니다.");
}

if (false) {
    console.log("이 코드는 실행되지 않습니다.");
}

// truthy한 값 

if(true){
    console.log("이 코드만 실행됩니다.");
    }