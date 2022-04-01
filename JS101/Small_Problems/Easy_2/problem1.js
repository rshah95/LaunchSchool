function greetings(arr, obj) {
  console.log(`Hello ${arr[0]} ${arr[1]} ${arr[2]}! Nice to have a ${obj['title']} ${obj['occupation']} around.`)
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });