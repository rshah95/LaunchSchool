let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    });
  },
};


// within the map callback function, the value of this is 
// set to the global object.

//Solution: 

let franchise1 = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};