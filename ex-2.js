function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

    let bigNumberOfPositives = 0;
    let sumNegatives = 0; 

  for (let i = 0; i <= input.length ; i++){
    if (input[i] > 0) {
      bigNumberOfPositives += 1;
    } else if (input[i] < 0) {
      sumNegatives += input[i];
    }
}
return [bigNumberOfPositives, sumNegatives];
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []

// - Function นี้จะ Return ค่าออกมาเป็น Array ที่มีสมาชิก 2 ตัว
//     - สมาชิกตัวแรกคือจำนวนของตัวเลขที่เป็นจำนวนบวกใน `input`
//     - สมาชิกตัวที่สองคือผลรวมของตัวเลขที่เป็นจำนวนลบใน  `input`
// - เงื่อนไขเพิ่มเติม:
//     - 0 ไม่ถือว่าเป็นทั้งจำนวนบวกหรือจำนวนลบ
//     - ถ้า `input` เป็น Array ว่างหรือเป็น `null` ให้ Return `[]`