function userInput(el) {
    if (el.value == "font")
        el.style.fontSize = "20px";
    
    if (el.value == "color")
        el.style.color = "red";
    
    console.log(el.value)
}
userInput();