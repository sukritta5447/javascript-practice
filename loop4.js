//การเข้าถึงข้อมูลที่ซับซ้อน
/* 
ให้แสดงคะแนนวิชาภาษาอังกฤษของนักเรียนแต่ละคนออกมาในรูปแบบ
ชื่อนักเรียน ได้คะแนน...คะแนน 
เช่น
James ได้ 55 คะแนน
JJ ได้ 82 คะแนน
*/

// 
const students = [
    {
        name: "James",
        scores: [
            { subject: "Math", score: 46 },
            { subject: "English", score: 55 },
            { subject: "Social", score: 72 }
        ]
    },
    {
        name: "JJ",
        scores: [
            { subject: "Math", score: 75 },
            { subject: "English", score: 82 },
            { subject: "Social", score: 68 }
        ]
    },
    {
        name: "Q",
        scores: [
            { subject: "Math", score: 91 },
            { subject: "English", score: 77 },
            { subject: "Social", score: 85 }
        ]
    }
];