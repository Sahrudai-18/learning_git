function Prime(num) {
output = true  
for (var i=2 ; i<num ; i++) { 
    if (num%i === 0)  {
       output = false ; break
    }
}
return output
}

function PrimeMover(num) {
var count = 0
for (var i=2 ; i<10000 ; i++)  { 
    if (Prime(i) === true) {
        count = count + 1 
    }
    if (count === num) {
        return i
        break
    } 
}
}
const number = parseInt(prompt("Enter a positive number: "));
print(PrimeMover(number));
