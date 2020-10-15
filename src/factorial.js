function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  var facNum = Math.round(Math.random()*10)
  alert("The factorial of "+facNum+" is "+factorialize(facNum));