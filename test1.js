// ให้ประกาศตัวแปร
// scores ที่บรรจุคะแนนสอบนักเรียนในห้อง 1 ไว้ โดยมีคะแนนดังนี้ 80, 70, 90, 50, 45, 85
// scores ที่บรรจุคะแนนสอบนักเรียนในห้อง 2 ไว้ โดยมีคะแนนดังนี้ 60, 75, 80, 95, 95, 75
// scores ที่บรรจุคะแนนสอบนักเรียนในห้อง 3 ไว้ โดยมีคะแนนดังนี้ 40, 95, 85, 95, 95, 95

let room1Score = [80, 70, 90, 50, 45, 85];
let room2Score = [60, 75, 80, 95, 95, 75];
let room3Score = [40, 95, 85, 95, 95, 95];
let room4Score = [70, 80, 50];

function total(score){
    let scores = 0;

for (let i=0; i < score.length; i++){
    // console.log("รอบที่" + [i])
    scores = scores + score[i];
    // console.log("ผลลัพธ์หลังบวก = " + scores)
    }
    return scores / score.length;
}


// console.log(student1TotalScore/studentRoom1Score.length);
console.log(total(room1Score))
console.log(total(room2Score))
console.log(total(room3Score))
console.log(total(room4Score))