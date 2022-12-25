export class UI {

    constructor(){
        this.employeesList = document.getElementById("employees"); // tbody
        this.updateButton = document.getElementById("update"); // update button
        this.nameInput = document.getElementById("name"); // input name
        this.departmentInput = document.getElementById("department"); // input department
        this.salaryInput = document.getElementById("salary"); // input salary
    }


    addAllEmployeeToUI(employees){
    
        let result = "";
    
        employees.forEach(employee => {
            result += `
            
            <tr>                                                
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
    
       
            `;
        });
        this.employeesList.innerHTML = result;
    }
    clearInput(){
        this.nameInput.value = "";
        this.departmentInput.value = "";
        this.salaryInput.value = "";
    }
    addEmployeeToUI(employee){
        this.employeesList.innerHTML += `

        <tr>                                               
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>

        `;
    }

    deleteEmployeeFromUI(elemnet){
        elemnet.remove();
    }

    toggleUpdateButton(target){
        if (this.updateButton.style.display === "none"){
            this.updateButton.style.display = "block";
            this.addEmployeeInfoToInputs(target);
        }
        else{
            this.updateButton.style.display = "none";
            this.clearInput();
        }
    }
    addEmployeeInfoToInputs(target){
        const children = target.children;

        this.nameInput.value = children[0].textContent;
        this.departmentInput.value = children[1].textContent;
        this.salaryInput.value = children[2].textContent;
    }

    updateEmployeeOnUI(employee,parent){
        parent.innerHTML = `
        <tr>                                        
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>
        `;
        this.clearInput();
        
    }
}


