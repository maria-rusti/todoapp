const input = document.getElementById("todo-input");
let arr = [];
input.addEventListener("keyup", function(event) {
    arr.push(event.target.value);
    sessionStorage.setItem("lista", arr);
})
const myList = sessionStorage.getItem("lista");
console.log(myList);