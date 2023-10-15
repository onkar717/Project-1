let y = Math.floor(Math.random() * 100)
let z = document.getElementById('list-container')
// let guess = 1;




const start = document.getElementById('start')
start.addEventListener('click', function () {
    window.location.reload()
})




const result = document.getElementById("submitguess")

result.addEventListener('click', function () {

    let x = document.getElementById("guessField").value;

    if (x == y) {
        // alert()
        document.getElementById('Result').innerHTML = "Wow ! You Won Congratulation Correct Guess!";
        let li = document.createElement("li");
        li.innerHTML =`You Gussed ${x}`;
        z.appendChild(li)
    }
    else if (x < y) {
        // alert()
        document.getElementById('Result').innerHTML = "Please Try a big number ";
        let li = document.createElement("li");
        li.innerHTML =`You Gussed ${x}`;
        z.appendChild(li)
    }
    else if (x > y) {
        // alert() 
        document.getElementById('Result').innerHTML = " Please Try a small number ";
        let li = document.createElement("li");
        li.innerHTML =`You Gussed ${x}`;
        z.appendChild(li)
    }
    else {
        // alert()
        // document.getElementById('Result').innerHTML = "Invalid Input "
        alert("Enter Valid Input")
    }
})