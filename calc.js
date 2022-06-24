alert("Welcome to Nenny's Js Calculcator")
let number1 = Number(prompt("Enter your first number "))
let number2 = Number(prompt("Enter your second number "))
let userInput = (prompt("Enter operator: [+, -, *, /]"))

if (userInput == "+"){
    let a = number1 + number2
    alert(a)
}
else if (userInput == "-"){
    let b = number1 - number2
    alert(b)
}
else if (userInput == "*"){
    let c = number1 * number2
    alert(c)
}
else if (userInput == "/"){
    let d = number1 / number2
    alert(d)
}
else {
    alert("Invalid")
    let e = (prompt("Would you like to try again? "))
    if (e == "yes") {
        let number1 = Number(prompt("Enter your first number "))
        let number2 = Number(prompt("Enter your second number "))
        let userInput = (prompt("Enter operator: [+, -, *, /]"))
        if (userInput == "+"){
        let a = number1 + number2
        alert(a)
    }
        else if (userInput == "-"){
            let b = number1 - number2
            alert(b)
    }
        else if (userInput == "*"){
            let c = number1 * number2
            alert(c)
    }
        else if (userInput == "/"){
            let d = number1 / number2
            alert(d)
    }
}
}
