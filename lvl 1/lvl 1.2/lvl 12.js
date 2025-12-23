// 1
console.log(1)
var num = 123
console.log(String(num)[0]);

// 2
console.log(2)
console.log(String(num).at(-1));

// 3
console.log(3)
console.log((+String(num)[0]) + (+String(num).at(-1)))

// 4
console.log(4)
console.log(String(num).length)

// 5
console.log(5)
var num1 = 150
var num2 = 10

if (String(num1)[0] == String(num2)[0]) {
    console.log("Nice")
} else {
    console.log("bad")
}