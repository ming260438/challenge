/**
 * Question 3:
 * ถ้า n มีค่าเท่ากับ 256 หลังจากจบการทำงานแล้ว r มีค่าเป็นเท่าใด?
 *
 * 1  i := n;
 * 2  r := 0;
 * 3  while (i >= 1) do
 * 4  begin
 * 5    for j:=1 to n do
 * 6      r := r+1;
 * 7    i := i/2;
 * 8  end;
 *
 * หมายเหตุ: ใช้ Math.floor สำหรับ integer division เหมือน Pascal
 */

const n = 256;
let i = n;
let r = 0;

console.log("=== Question 3 ===");
console.log(`เริ่มต้น: n = ${n}, i = ${i}, r = ${r}`);
console.log("---");

let outerCount = 0;

while (i >= 1) {
  outerCount++;
  for (let j = 1; j <= n; j++) {
    r = r + 1;
  }
  i = Math.floor(i / 2); // integer division
  console.log(`รอบที่ ${outerCount}: r = ${r}, i (ต่อไป) = ${i}`);
}

console.log("---");
console.log(`จำนวนรอบ outer loop: ${outerCount} (log2(${n}) + 1 = ${Math.log2(n) + 1})`);
console.log(`ผลลัพธ์: ค่าของ r = ${r}`);
console.log(`ตรวจสอบ: n × (log2(n) + 1) = ${n} × ${Math.log2(n) + 1} = ${n * (Math.log2(n) + 1)}`);
