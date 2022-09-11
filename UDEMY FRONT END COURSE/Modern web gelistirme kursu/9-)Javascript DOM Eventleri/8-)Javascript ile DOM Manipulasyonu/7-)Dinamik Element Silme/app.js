
// Dinamik element Silme

// ornek ile gostermek gerekir ise [todo list] ler ile baslayalim

const todoList = document.querySelector("ul.list-group");

const todos = document.querySelectorAll("li.list-group-item");

// [Remove] Metodu


// todos[1].remove();  



// [Remove Child] Metodu


// son child i silme

// todoList.removeChild(todoList.lastElementChild);  

// yada

todoList.removeChild(todos[3]);


console.log(todos);
console.log(todoList);