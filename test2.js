/* 
ครูสอนภาษาอังกฤษมีไอเดียอยากลดภาระงาน โดยเขียนโปรแกรมช่วยจัดการคะแนนสอบ
โปรแกรมควรทำได้ดังนี้
1. ช่วยเพิ่มคะแนนได้ หลังพบว่าข้อสอบเฉลยผิดหนึ่งข้อ ทำให้ต้องเพิ่มคะแนนให้ทุกคน 1 คะแนนในข้อนั้น
2. ช่วยลดคะแนนได้ หลังพบว่านักเรียนแอบส่งโพยให้กัน ทำให้ต้องลดคะแนนลงทั้งห้อง คนละ 10 คะแนน
3. ช่วยคิดเกรดรายคน โดยมีเกณฑ์ดังนี้ 
80 ขึ้นไปได้ A
70 ขึ้นไปได้ B
ต่ำกว่านั้นได้ F

คำถามเพิ่มเติม กรณีอยากให้โปรแกรมช่วยคำนวณคะแนนเฉลี่ยของทั้งห้อง จำเป็นต้องใช้ callback ไหม เพราะอะไร
*/

const scores = [50, 60, 70, 80, 90];

function increasePoint(scores) {
    return scores += 1;
}

function decreasePoint(scores) {
    return scores -= 10;
}

function gradeCalculator(scores) {
    if (scores >= 80) {
        return "A"
    } else if (scores >= 70 && scores <=79) {
        return "B"
    } else {
        return "F"
    }
}

console.log(increasePoint(scores[1]));
console.log(decreasePoint(scores[4]));
console.log(gradeCalculator(scores[0]));

function total(num) {
    let score = 0;
    for (let i=0 ; i<num.length ; i++){
        score = num[i] + score;
    }
    return score / num.length
}

console.log(total(scores));