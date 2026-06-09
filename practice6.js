// อยากสร้างตัวแปรมาเก็บอุณหภูม ในหน่วยองศาเซลเซียส เช่น 37 40 58 90 56
// (celsius * 9 / 5) + 32;
// อยากรู้ว่า 40 องศาเซลเซียส เท่ากับกี่องศาฟาเรนไฮต์

let celsiusTemp = [37, 40, 58, 90, 56];

function fahrenheitTemp(temp) {
    return (temp * 9 / 5) + 32;
}

console.log(fahrenheitTemp(celsiusTemp[1]));