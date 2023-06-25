function studentMarks(){
const marks = parseInt(prompt("Enter marks(between 0 and 100):"));

let grade;

if (marks > 100) {
  grade = "Invalid. Grade must be between 0 and 100";
}else if (marks > 79) {
  grade = 'A';
} else if (marks >= 60) {
  grade = 'B';
} else if (marks >= 50) {
  grade = 'C';
} else if (marks >= 40) {
  grade = 'D';
} else if (marks >=0 && marks < 39){
  grade = 'E'; 
} else {
  grade = "Invalid. Grade must be between 0 and 100";
}
 return `The student's grade is: ${grade}`;
}
studentMarks(64);











