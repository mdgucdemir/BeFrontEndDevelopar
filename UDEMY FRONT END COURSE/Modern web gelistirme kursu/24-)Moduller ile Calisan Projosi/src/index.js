// console.log("Test");
// console.log("Test-2");
// console.log("Testing Testing. Houston this is testing. Copy");
// // console.log("fine");

// ------- Imports -------------------

import { Request } from "./request";
import { UI } from "./ui";

// ------------------------------------

// ------ --- ---- Elementleri Secme -------- ---------- --------
const form = document.getElementById("employee-form");  //form 
const nameInput = document.getElementById("name"); // name input
const departmentInput = document.getElementById("department"); // department input
const salaryInput = document.getElementById("salary"); // salary input
const employeesList = document.getElementById("employees"); // tbody
const updateEmployeeButton = document.getElementById("update"); // update button

// ---------------------------------------------------------------

// ------------------ objects --------------------------------
// import edilen request ten bir tane object olusturalim ve end point olarak ("http://localhost:3000/employees") verelim
const request = new Request("http://localhost:3000/employees"); 
const ui = new UI();
let updateState = null;
// -----------------------------------------------------------

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded",getAllEmployees); // sayfa yuklendiginde calismasini istedigimiz ilk event
    form.addEventListener("submit",addEmployee);
    employeesList.addEventListener("click",UpdateOrDelete);
    updateEmployeeButton.addEventListener("click",updateEmployee);

    
}

function getAllEmployees(){
    request.get()
    .then(employees => {ui.addAllEmployeeToUI(employees)})  
    .catch(err => console.log(err));
}

function addEmployee(e){

    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if(employeeName === "" || employeeDepartment === "" || employeeSalary === ""){
        // bos olup olmadiklerini kontrol et
        alert("Lutfen tum alanlari doldurunuz");
    }
    else{
        request.post({name:employeeName,department:employeeDepartment,salary:Number(employeeSalary)})
        .then(employee => {
            ui.addEmployeeToUI(employee);
        })
        .catch(err => console.log(err));
    }


    ui.clearInput();
    e.preventDefault(); // form olayi oldugu icin kullandik
}

function UpdateOrDelete(e){
    if (e.target.id === "delete-employee"){
        // silme islemi
        deleteEmployee(e.target);
    }
    else if (e.target.id === "update-employee"){
        // update islemi
        updateEmployeeController(e.target.parentElement.parentElement);
    }
}

function deleteEmployee(targetEmployee){
    const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;

    request.delete(id)
    .then(message => {
        ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement)
    })
    .catch(err => console.log(errr))
}

function updateEmployeeController(targetEmployee){
    ui.toggleUpdateButton(targetEmployee);
    
    if(updateState === null){
        updateState = {
            updateId: targetEmployee.children[3].textContent,
            updateParent: targetEmployee
        }
    }
    else{
        updateState = null;
    }
}
function updateEmployee(){
    if (updateState){
        // put request
        const data = {name:nameInput.value.trim(),department:departmentInput.value.trim(),salary:Number(salaryInput.value.trim())}

        request.put(updateState.updateId,data)
        .then(updatedEmployee => {
            ui.updateEmployeeOnUI(updatedEmployee,updateState.updateParent);
        
        })
        .catch(err => console.log(err));

    }
}





// request.get()
// .then(employees => console.log(employees))
// .catch(err => console.log(err));

// request.post({name: "Donald Trump",department: "IT",salary:4321})
// .then(employee => console.log(employee))
// .catch(err =>console.log(err));

// request.put(2,{name:"Edward Deniz Coch",department:"IT",salary:2314})
// .then(employee => console.log(employee))
// .catch(err => console.log(err));

// request.delete(5)
// .then(message => console.log(message))
// .catch(err => console.log(err));