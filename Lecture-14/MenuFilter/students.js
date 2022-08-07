const students = [
    { name: "Dhruv Sehgal", age: 24, marks: 100 },
    { name: "Mosina Ashraf", age: 20, marks: 90 },
    { name: "Sharavan Kishore", age: 27, marks: 80 },
    { name: "Anjali", age: 18, marks: 85 },
    { name: "Himanshu", age: 18, marks: 85 }
];

const students85 = students.filter((student)=>{
    if(student.marks >= 85) return true;
    return false;
})
console.log(students85);


const students85Names = students.filter((student)=>{
    if(student.marks >= 85) return true;
    return false;
}).map((student)=>student.name);

/*
const students85Names = students.filter((student)=>{
    if(student.marks >= 85) return true;
    return false;
}).map(function(student){
    return student.name;
});
*/

console.log(students85Names);

const newStudents = students.filter((stu)=>{
    if(stu.marks >= 85) return true;
    return false;
}).filter((stu)=>{
    if(stu.age>=20) return true;
    return false;
});
console.log(newStudents);

let sum = students.filter((stu)=>{
    if(stu.marks >= 85) return true;
    return false;
}).filter((stu)=>{
    if(stu.age>=20) return true;
    return false;
});
console.log(sum);


// USING INBUILT METHODS ONLY
sum = students.filter((stu)=>{
    if(stu.marks >= 85) return true;
    return false;
}).filter((stu)=>{
    if(stu.age>=20) return true;
    return false;
}).map((stu)=>stu.marks)
.reduce((accum,value)=>{
    return accum+value
});
console.log(sum);

// let ans = 0;
// sum.forEach((ele)=>{
//     ans += ele.marks;
// })
// console.log(ans);