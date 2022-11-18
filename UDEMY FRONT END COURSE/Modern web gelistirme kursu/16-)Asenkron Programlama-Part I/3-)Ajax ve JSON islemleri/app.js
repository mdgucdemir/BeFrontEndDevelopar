 
// ilk basta button a bir event atiyacagiz

document.getElementById("ajax").addEventListener("click",getAllEmployees);

function getAllEmployees(){

    // ilk once ( XMLHttpRequest ) bir tane object olusturacaz
    const xhr = new XMLHttpRequest();

    // daha sonra baglantimiz kurmamiz gerikiyor
    xhr.open("GET","employees.json",true);

    xhr.onload = function(){

        let list = document.getElementById("employees");



        if(this.status == 200) {

            const employees = JSON.parse(this.responseText);
            
            // forEach ile eployee lerde gezinelim ve innerHTML ile Employees leri yazdiralim
            employees.forEach(function(employee){
                list.innerHTML += `
                <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                </tr>

                `
            });
        }
    }


    // istegimizi (request) gondermemiz gerekiyor
    xhr.send();
    // get request yaprigimiz icin parentez icerisine birsey yazmamiz gerekmiyor
}