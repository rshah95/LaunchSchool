let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

console.log(arr);

// .fill() replaces values in the array with a specified argument
// .fill() can take a second and third argument representing the start and end of fill

// tested whether it is destructive by logging arr to console after .fill()
// since changes were sustained without assignment, .fill() is destructive 