// resolved

/* 
- มี Variable ตั้งต้น word ซึ่งบรรจุคำภาษาอังกฤษ เช่น “elephant”
- ให้เขียนโปรแกรมนับว่าจากคำภาษาอังกฤษมีตัว “e” ในคำนั้นกี่ตัว

โปรแกรมควรจะแสดงผลลัพธ์ออกมาทางหน้าจอแบบนี้
จำนวนตัว 'e' ในคำนี้: 2
*/



// ต้องมีตัวแปรมารับค่า เพื่อนับจำนวน
// for of vs for loop ธรรมดา ใช้อะไรดี

// ถ้าอยากเพิ่มความยาก ให้เขียน Function และทำโจทย์ต่อไปนี้
// ต้องแก้ยังไงดีถ้าเพิ่มความยากขึ้น โดยมี test case อื่นมาให้ด้วย 
// "apple" -> อยากให้นับว่ามี a กี่ตัว 
// "student" -> อยากให้นับว่ามี u กี่ตัว
function wordCounter(word, letterToCount){
    let counter = "";
    for (let letter of word) {
        if(letter === letterToCount){
            counter++;
        }
    }
    return `จำนวนตัว "${letterToCount}" ในคำนี้: ${counter}`
}

console.log(wordCounter("apple", "a"))
console.log(wordCounter("elephant", "e"))
console.log(wordCounter("student", "u"))