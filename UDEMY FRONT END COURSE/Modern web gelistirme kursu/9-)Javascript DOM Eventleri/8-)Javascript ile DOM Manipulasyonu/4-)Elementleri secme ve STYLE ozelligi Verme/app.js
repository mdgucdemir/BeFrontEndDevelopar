

// [Delete All Tasks] uzerinden element style ler verip, dinamik ozellikler vermeye calisacagiz

// const element = document.querySelector("#clear-todos");

// Element ozellikleri



// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);

// console.log(element.style);



// Style ve Element ozelliklerini degistirme

// element.className = "btn btn-primary";
// element.style.color = "orange";
// element.style.marginLeft = "23px";
// element.href = "https://www.google.com";
// element.target = "_blank";
// element.textContent = "God Save the Queen";

// html etiketlerini vermek icin [innerHTML] i secin :))

// element.innerHTML = "<span style = 'color:black'>Good Boy ;)</span>";

// const elements = document.querySelectorAll(".list-group-item");

// elements.forEach(function(fun){
//     fun.style.color = "red";
//     fun.style.background = "#eee";
// });


// console.log(elements);

let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");
element2 = document.querySelector("li:first-child");
element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(fun){
    fun.style.background = "#ccc";
    fun.style.color = "red";
})



console.log(element2);