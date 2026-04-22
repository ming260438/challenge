/**
 * Question 2:
 * x := 1;
 * i := 1;
 * while (x <= 1000)
 * begin
 *   x := 2^x;   (x = 2 ยกกำลัง x)
 *   i := i + 1;
 * end;
 *
 * หลังจากจบการทำงานแล้ว ค่าของ i มีค่าเป็นเท่าใด?
 */

let x = 1;
let i = 1;

console.log("=== Question 2 ===");
console.log("เริ่มต้น: x =", x, ", i =", i);
console.log("---");

while (x <= 1000) {
  x = Math.pow(2, x); // x := 2^x
  i = i + 1;
  console.log(`x = 2^(prev_x) = ${x}, i = ${i}`);
}

console.log("---");
console.log("ผลลัพธ์: ค่าของ i =", i);
