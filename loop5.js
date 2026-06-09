// resolved (need review)

/* 
ให้คำนวณเกรดวิชาคณิตศาสตร์ และเพิ่มข้อมูลเกรดเข้าไปใน Object

มีเกณฑ์ในการตัดเกรดดังนี้
A เมื่อได้คะแนน 80 ขึ้นไป
B เมื่อได้คะแนนอยู่ระหว่าง 70-79
C เมื่อได้คะแนนอยู่ระหว่าง 60-69
D เมื่อได้คะแนนอยู่ระหว่าง 50-59
F เมื่อได้คะแนนต่ำกว่า 50
*/

const students = [
  {
    name: "James",
    scores: [
      { subject: "Math", score: 46 },
      { subject: "English", score: 55 },
      { subject: "Social", score: 72 },
    ],
  },
  {
    name: "JJ",
    scores: [
      { subject: "Math", score: 75 },
      { subject: "English", score: 82 },
      { subject: "Social", score: 68 },
    ],
  },
  {
    name: "Q",
    scores: [
      { subject: "Math", score: 91 },
      { subject: "English", score: 77 },
      { subject: "Social", score: 85 },
    ],
  },
];

function gradeCounter(array){
  for (let student of array){
    if (student.scores[0].score >= 80){
      student.scores[0].grade = "A"
    } else if (student.scores[0].score >= 70){
      student.scores[0].grade = "B"
    } else if (student.scores[0].score >= 60){
      student.scores[0].grade = "C"
    } else if (student.scores[0].score >= 50){
      student.scores[0].grade = "D"
    } else {
      student.scores[0].grade = "F"
    }
  }
}
gradeCounter(students)
console.log(students[0].scores[0])
console.log(students[1].scores[0])
console.log(students[2].scores[0])

/* ตัวอย่างผลลัพธ์ 
[
  {
    name: "James",
    scores: [
      { subject: "Math", score: 46, grade: "F" },
      { subject: "English", score: 55 },
      { subject: "Social",score: 72 }
    ]
  },
  {
    name: "JJ",
    scores: [
      { subject: "Math", score: 75, grade: "B" },
      { subject: "English", score: 82 },
      { subject: "Social", score: 68 }
    ]
  },
  {
    name: "Q",
    scores: [
      { subject: "Math", score: 91, grade: "A" },
      { subject: "English", score: 77 },
      { subject: "Social", score: 85 }
    ]
  }
]
*/