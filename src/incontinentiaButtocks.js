var answer;
function findBiggestFraction(a,b) {
    if(a<b)
    answer="The smaller number is " + a;
    else if(b<a)
    answer="The smaller number is "+ b;
    else
    answer="The numbers are the same"
}

var firstFraction = Math.random();
var secondFraction = Math.random();

findBiggestFraction(firstFraction,secondFraction);
alert(answer);

 