function getGrade(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3
  let grade = '';

  if (avg >= 90) {
    grade = 'A';
  } else if (avg >= 80 && avg < 90) {
    grade = 'B';
  } else if (avg >= 70 && avg < 80) {
    grade = 'C';
  } else if (avg >= 60 && avg < 70) {
    grade = 'D';
  } else grade = 'F';

  return grade;
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));