function fizzBuzz(n) {
  const result = []
  for (let i = 1; i <= n ; i++){
    if(i % 3 === 0){
      result.push("Fizz");
    }else if (i % 5 === 0){
      result.push("Buzz")
    }else if (i % 3 === 0 & i % 5 ===0){
      result.push("FizzBuzz");
    }else{
      result.push(i)
    }
  }
  return result
}

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]


// - Function นี้จะ Return ค่าเป็น Array ที่มีสมาชิกเป็น String จำนวน `n` ตัว โดยสมาชิกใน Array จะเป็นไปตามกฎต่อไปนี้:
//     - ถ้าตำแหน่งของสมาชิกหารด้วย 3 ลงตัว ให้ใส่ `"Fizz"` แทนตัวเลข
//     - ถ้าตำแหน่งของสมาชิกหารด้วย 5 ลงตัว ให้ใส่ `"Buzz"` แทนตัวเลข
//     - ถ้าตำแหน่งของสมาชิกหารด้วยทั้ง 3 และ 5 ลงตัว ให้ใส่ `"FizzBuzz"` แทน