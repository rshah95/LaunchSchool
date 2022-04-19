var o = {
  name: 'student'
};
o.self = o; // o = {name: student, self: {name: student}}
console.log(o.self);
o.self.self = {};

console.log(o);