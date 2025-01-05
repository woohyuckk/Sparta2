/* 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.*/

function solution(s) {
    let splits = s.toLowerCase().split("");
    let filteredp = splits.filter(function (p) {
        return p === "p"
    });
    console.log(splits);
    console.log(filteredp);
    let filteredy = splits.filter(function (y) {
        return y === "y"
    });
    console.log(filteredy);

    if (filteredp.length === filteredy.length) {
        return true
    }
    else {
        return false;
    }
    console.log(filteredp.length)
}

let result = solution("tYoopPpyy");
console.log(result);


// let evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// });


function solution2(absolutes, signs) {

    let result = [];
    for (i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            result.push(absolutes[i]);
        }
        else {
            result.push(-1 * absolutes[i]);
        }
        // let sum = result.reduce(function(a,b){
        //     return a+b;
        // });
    }
    answer = result.reduce(function(accumulator, currntValue){
        return accumulator + currntValue;
    },0);
    console.log(answer);
    console.log(result);
}
let result2 = solution2([4,7,12],[false,false,true]);
