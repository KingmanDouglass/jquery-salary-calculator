console.log( 'JS' );
$( document ).ready(readyNow);

const roster = [];
//let totalSalary = 0;
//let clearButton = $('<button id="clearButton">X</button>')

function readyNow() {
    $('#submitButton').on('click', addEmployee);
    $('#employeeList').on('click', '.rendering', '#clearButton', removeEmployee);
}

 //The application should have an input form that collects _employee first name, 
 //last name, ID number, job title, annual salary_.

 class Employee{
    constructor(firstName, lastName, idNumber, title, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.title = title;
    this.salary = salary;
    }
 }

 function addEmployee() {
    console.log('in add employee');
    let newEmployee = new Employee ( $( '#firstNameIn').val(), $('#lastNameIn').val(), $('#idNumberIn').val(), $('#titleIn').val(), $('#salaryIn').val() );
    roster.push(newEmployee);
    render();
    clearInputFields();
    // totalMonthlySalaries();   NOTE:moving these down to render cause its called on both add and delete
    // ifExceeds();
    



    //console.log(newEmployee);
    
    //$('#tableBody').append(`<tr><td>${newEmployee.firstName}</td><td>${newEmployee.lastName}</td><td>${newEmployee.idNumber}</td><td>${newEmployee.title}</td><td>${newEmployee.salary}</td><td><button id="clearButton">Clear</button></td></tr>`)
    
    //$('#total').remove();
}

 function clearInputFields() {
    $('#firstNameIn').val('') 
    $('#lastNameIn').val('') 
    $('#idNumberIn').val('') 
    $('#titleIn').val('') 
    $('#salaryIn').val('')
 }

//  function totalMonthlySalaries(){
//     for( i=0; i<roster.length; i++){
//        totalSalary = totalSalary + Number(roster[i].salary)  
//      }
//      return totalSalary = totalSalary / 12;
// //NOTE: okay so why is my calculation concatenating and not creating the exact math
// //i.e. through my console log when i run 12 a few times as each salary its should just go
// //1,2,3,etc but its going 1, 2.08333333, 3.17366666, etc.....
//  }

// function ifExceeds() {
//     console.log('totalSalary', totalSalary);
//     if (totalSalary > 20000){
//         return $('#monthlySum').css('color', 'red').append(`<span id="total">${(totalSalary).toFixed(2)}</span>`);
//     } else {
//         return $('#monthlySum').append(`<span id="total">${(totalSalary).toFixed(2)}</span>`);
//     }
// }

function mathTakeTwo() {
    let totalMonthly = 0;
    $('#total').remove();
    for( let i=0; i<roster.length; i++){
        totalMonthly = totalMonthly + Number(roster[i].salary)/12; 
    }
    if(totalMonthly>2000){
        $('#monthlySum').css('color', 'red').append(`<span id="total">$ ${totalMonthly.toFixed(2)}</span>`);
    } else{
        return $('#monthlySum').append(`<span id="total">${totalMonthly.toFixed(2)}</span>`);
    }
}


function removeEmployee() {
    console.log('in remove employee');
    let doubleCheck = $(this).data();

    for(let i=0; i<roster.length; i++){
        let employee = roster[i];
        if (employee.firstName == doubleCheck.firstName && employee.lastName == doubleCheck.lastName && employee.idNumber == doubleCheck.idNumber && employee.title == doubleCheck.title && employee.salary ==doubleCheck.salary){
            roster.splice(i, 1);
        }
    }
    render();
}

//function removeEmployee() {
        //$(this).remove()
    //$('#useClear').remove();
    
    //$('#tableBody').remove('<span id="useClear">`<tr><td>${newEmployee.firstName}</td><td>${newEmployee.lastName}</td><td>${newEmployee.idNumber}</td><td>${newEmployee.title}</td><td>${newEmployee.salary}</td><td><button id="clearButton">Clear</button></td></tr>`)</span>');

    //$('#tableBody').append('<span id="useClear">`<tr><td>${newEmployee.firstName}</td><td>${newEmployee.lastName}</td><td>${newEmployee.idNumber}</td><td>${newEmployee.title}</td><td>${newEmployee.salary}</td><td><button id="clearButton">Clear</button></td></tr>`)</span>')
    //$('#tableBody').append('<span id="useClear"></span>');  
    //let clearData = $(this).data();
//}
  

function render() {
    //totalMonthlySalaries();
    //ifExceeds();
    mathTakeTwo();
    $('#tableBody').empty();
    for( let employee of roster) {
        let $employee = $(`<tr class='rendering'>
        <td class="tdStyle">${employee.firstName}</td>
        <td class="tdStyle">${employee.lastName}</td>
        <td class="tdStyle">${employee.idNumber}</td>
        <td class="tdStyle">${employee.title}</td>
        <td class="tdStyle">${employee.salary}</td>
        <td class="tdStyle"><button id="clearButton">Clear</button></td></tr>`)
        $employee.data(employee);
        $('#tableBody').append($employee)
    }
}

 //A 'Submit' button should collect the form information, store the information 
 //to calculate monthly costs, append information to the DOM and clear the input 
 //fields. Using the stored information, calculate monthly costs and append this 
 //to the to DOM. If the total monthly cost exceeds $20,000, add a red background 
 //color to the total monthly cost.