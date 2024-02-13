
var tall = Math.round(Math.random()*100)

while (true) {
    let userinput = prompt("Please enter a value:");
    value = parseFloat(userinput);
    
    if (tall > value) {
        window.alert("Write a bigger number");
    } else if (tall < value) {
        window.alert("Write a smaller number");
    } else {
        window.alert("You did it the number was: " + tall);
        break;
    }
}