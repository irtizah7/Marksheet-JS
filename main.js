
// Marksheet

var eng = Number(prompt("Enter your English Marks"));
var urd = Number(prompt("Enter your Urdu Marks"));
var math = Number(prompt("Enter your Maths Marks"));
var phy = Number(prompt("Enter your Physics Marks"));
var che = Number(prompt("Enter your Chemistry Marks"));

var sum = eng + urd + math + phy + che
console.log("Total Marks: " + sum);

var per =  sum * 100 / 500
console.log("Percentage: " + per);

if(per >= 85 && per <=100){
    alert("A+")
}
else if(per >= 70 && per < 85){
    alert("A")
}
else if(per >= 60 && per < 70){
    alert("B")
}
else if(per >= 45 && per < 60){
    alert("C")
}
else if(per >= 0 && per < 45){
    alert("Fail")
}



