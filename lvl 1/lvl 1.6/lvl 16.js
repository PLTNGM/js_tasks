// 1
console.log(1)
const arr = [1, 2, 3, 4]
for (var i = 0; i <= arr.length - 1; i++) {
   arr[i] = arr[i] ** 2
}
console.log(arr)

// 2
console.log(2)
const arr2 = [1, 2, 3, 4]
let sumkv = 0
for (var el = 0; el <= arr2.length - 1; el++) {
   arr2[el] = arr2[el] ** 2
   sumkv += arr2[el]
}
console.log(sumkv)

// 3
console.log(3)
const arrs = [1, 2, 3, 4, -1, -2]
let sumt = 0
for (var els = 0; els <= arrs.length - 1; els++) {
    if (arrs[els] >= 0) {
        sumt += arrs[els]
    }
}
console.log(sumt)

// 4
console.log(4)
const arrbig = [1, 2, 3 , 4, 10, 100, -20, 1]
let bigsum = 0;
for (let elbig = 0; elbig <= arrbig.length - 1; elbig++) {
    if (arrbig[elbig] > 0 & arrbig[elbig] < 10) {
        bigsum += arrbig[elbig]
    }
}
console.log(bigsum)