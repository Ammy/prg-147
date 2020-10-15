var answer;
function findBiggestFraction(a,b) {
    if(a>b)
    answer="The bigger number is " + a;
    else if(b>a)
    answer="The bigger number is "+ b;
    else
    answer="The numbers are the same"
}

var firstFraction = Math.random();
var secondFraction = Math.random();

findBiggestFraction(firstFraction,secondFraction);
alert(answer);

 