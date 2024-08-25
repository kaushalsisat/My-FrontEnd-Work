document.addEventListener("DOMContentLoaded",function(){
    const employeeForm = document.getElementById("employeeForm");
    const employeeName = document.getElementById("employeeName");
    const employeeTittle = document.getElementById("employeeTittle");
    const employeeList = document.getElementById("employeeList");

    //load employee from local storage
     
     function loadEmployees(){
          employeeList.innerHTML = '';
          const employees = JSON.parse(localStorage.getItem('employees')) ||[];
          employees.forEach((employee,index) =>{
            const row = document.createElement("tr");
            row.innerHTMl = `
                <td>${employeeForm.Name}</td>
                <td>${employeeForm.Tittle}</td>
                       
                <td>
                    <button onClick="editEmployee($(index))">Edit</button>
                    <button onClick="deletEmployee($(index))">Delete</button>
                </td>; `

                employeeList.appendChild(row);
      }
    }
    // add a new Employee
    employeeForm.addEventListener("submit",function(e){
        e.praventDefault();
        const newemployeeName = employeeName.value.trim();
        const newemployeeTitle = employeeTittle.value.trim();

        if(newemployeeName !==""&& newemployeeTitle !== ""){
            const employees  = JSON.parse(localStorage.getItem("employee"));
            const employee  =  { name: newemployeeName, tittle: newemployeeTitle};
            employee.push(newEmployee);
            localStorage.setItem("emplyees", JSON.stringify(employees));
            employeeName.value =""
            employeeTittle.value =""
            loadEmployees();
        }
    
    });
 
     
    




    // Delete an Employee
     window.deleteEmployee = function (index){
        const emplyees = JSON.paras(localStorage.getItem("emplyees"))
     }
    
    
    
    //Enitial Load  of Employee
    loadEmployees();
});
     








})