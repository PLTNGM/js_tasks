// 1 
console.log(1);
var sum = 0;
for (var i = 0; i != 101; i++) {
    sum += i
}
console.log(sum)

// 2
console.log(2)
var sumchet = 0
for (var el = 0; el != 101; el++) {
    if (el % 2 == 0) {
        sumchet += el
    }
}
console.log (sumchet)

// 3
// скип изи

// 4
// skip

// 5
console.log(5)
var stroka = "syper text"

for (var sym = stroka.length - 1; sym >= 0; sym--) {
    console.log(stroka[sym]);
}