// resolved

/* 
ให้แสดงคะแนนของนักเรียนแต่ละคนออกมาในรูปแบบ
ชื่อนักเรียน ได้คะแนน...คะแนน 
เช่น
James ได้ 55 คะแนน
JJ ได้ 82 คะแนน
*/

const students = [
    {
        name: "James",
        score: 55
    },
    {
        name: "JJ",
        score: 82            
    },
    {
        name: "Q",
        score: 77
    }
];

for (let key of students){
    console.log(`${key.name} ได้คะแนน ${key.score} คะแนน`)
}