function greet() {
    let name = prompt("What is your name?");
    
    if (name !== null) {
        alert("Hello, " + name + ".");
        let age = prompt("How old are you?");
        if (age !== null) {
            console.log(parseInt(age));
            if (confirm("Have you had a birthday this year?")) {
            const birthYear = new Date().getFullYear() - age;
            alert("You were born in the year " + birthYear + ".");
            } else {
                const birthYear = new Date().getFullYear() - age + 1;
                alert("You were born in the year " + birthYear + ".");
            }
        }
    }
}

greet()