function triangle(angle1, angle2, angle3) {
  let arr = [angle1, angle2, angle3];
  if (arr.reduce((prev, curr) => prev + curr) !== 180 || arr.some(angle => angle === 0)) return `invalid`;
  if (arr.some(angle => angle === 90)) return 'right';
  if (arr.every(angle => angle < 90)) return 'acute';
  return 'obtuse'; 
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
