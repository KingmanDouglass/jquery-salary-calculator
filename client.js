console.log( 'JS' );
$( document ).ready(readyNow);

const roster = [];
let totalSalary = 0;

function readyNow() {
    $('#submitButton').on('click', addEmployee)
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
    let newEmployee = new Employee ( $( '#firstNameIn').val(), $('#lastNameIn').val(), $('#idNumberIn').val(), $('#titleIn').val(), $('#salaryIn').val() );
    console.log(newEmployee);
    $('#tableBody').append(`<tr><td>${newEmployee.firstName}</td><td>${newEmployee.lastName}</td><td>${newEmployee.idNumber}</td><td>${newEmployee.title}</td><td>${newEmployee.salary}</td></tr>`)
    roster.push(newEmployee)
    clearInputFields();
    $('#total').remove();
    totalMonthlySalaries();
    ifExceeds();
 }

 function clearInputFields() {
    $('#firstNameIn').val('') 
    $('#lastNameIn').val('') 
    $('#idNumberIn').val('') 
    $('#titleIn').val('') 
    $('#salaryIn').val('')
 }

 function totalMonthlySalaries(){
    for( i=0; i<roster.length; i++){
       totalSalary = Number(totalSalary) + Number(roster[i].salary)  
     }
     return totalSalary = totalSalary / 12;
 }

function ifExceeds() {
    if (totalSalary > 20000){
        return $('#monthlySum').css('color', 'red').append(`<span id="total">${(totalSalary).toFixed(2)}</span>`);
    } else {
        return $('#monthlySum').append(`<span id="total">${(totalSalary).toFixed(2)}</span>`);
    }
}

 //A 'Submit' button should collect the form information, store the information 
 //to calculate monthly costs, append information to the DOM and clear the input 
 //fields. Using the stored information, calculate monthly costs and append this 
 //to the to DOM. If the total monthly cost exceeds $20,000, add a red background 
 //color to the total monthly cost.