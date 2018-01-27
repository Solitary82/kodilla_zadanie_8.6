var a = prompt('Enter a value'),
    b = prompt('Enter b value'),
    value = (a * a) - (2 * a * b) + (b * b);
                    
console.log(value);

if (value > 0) {
    alert('The result is above zero');
} else if (value < 0) {
    alert('The result is below zero');
} else {
    alert('The result is zero');
}