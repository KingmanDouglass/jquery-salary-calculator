$( document ).ready(readyNow);

const roster = [];

function readyNow() {
    $('#submitButton').on('click', addEmployee);
    $('#employeeList').on('click', '.rendering', '#clearButton', removeEmployee);
}

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
    roster.push(newEmployee);
    render();
    clearInputFields();
}

 function clearInputFields() {
    $('#firstNameIn').val('') 
    $('#lastNameIn').val('') 
    $('#idNumberIn').val('') 
    $('#titleIn').val('') 
    $('#salaryIn').val('')
 }

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

function render() {
    mathTakeTwo();
    $('#tableBody').empty();
    for( let employee of roster) {
        let $employee = $(`<tr class='rendering'>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.title}</td>
        <td>${employee.salary}</td>
        <td><button id="clearButton">Delete</button></td></tr>`)
        $employee.data(employee);
        $('#tableBody').append($employee)
    }
}