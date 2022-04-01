function isLeapYear(year) {
  if (year > 1752) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) return true;
        return false;
      } 
      return true;
    } else return false;
  } else return (year % 4 === 0); 
}