// อยากได้ผลลัพธ์แบบนี้  [ 'TechUp-2-James', 'TechUp-2-K', 'TechUp-2-Q', 'TechUp-2-GG', 'TechUp-2-Book', 'TechUp-2-Salah' ]

//โค้ดตั้งต้นคือ 
const studentNames = ["James", "K", "Q", "GG", "Book", "Salah"]
const code = "TechUp-2"

for (let name of studentNames){
    console.log(code + "-" + name)
}