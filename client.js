$( document ).ready(readyNow); //get doc set up

const roster = [];

function readyNow() { //ready upon load
    $('#submitButton').on('click', addEmployee); //add employee and refresh render
    $('#employeeList').on('click', '.rendering', '#clearButton', removeEmployee); //same as above but delete
}

 class Employee{ //create employee class
    constructor(firstName, lastName, idNumber, title, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.title = title;
    this.salary = salary;
    }
 }

 //get values for the employee from inputs and add to array then display on DOM
 function addEmployee() {
    console.log('in add employee');
    let newEmployee = new Employee ( $( '#firstNameIn').val(), $('#lastNameIn').val(), $('#idNumberIn').val(), $('#titleIn').val(), $('#salaryIn').val() );
    roster.push(newEmployee);
    render();
    mathTakeTwo();
    clearInputFields();
}

//after inputs are put on DOM addEmployee runs this function to set values back to empty
 function clearInputFields() {
    $('#firstNameIn').val('') 
    $('#lastNameIn').val('') 
    $('#idNumberIn').val('') 
    $('#titleIn').val('') 
    $('#salaryIn').val('')
 }

//math function to check divivde salary totals by 12 and check to see if cap is met
function mathTakeTwo() {
    let totalMonthly = 0;
    $('#total').remove();
    for( let i=0; i<roster.length; i++){
        totalMonthly = totalMonthly + Number(roster[i].salary)/12; 
    }
    if(totalMonthly>2000){
        $('#monthlySum').css('background-color', 'red').append(`<span id="total">${totalMonthly.toFixed(2)}</span>`);
    } else{
        return $('#monthlySum').append(`<span id="total">${totalMonthly.toFixed(2)}</span>`);
    }
}

//remove employee function and take it off the dom and array
function removeEmployee() {
    let doubleCheck = $(this).data();

    for(let i=0; i<roster.length; i++){
        // compare the .data with the what is in the array
        let employee = roster[i];
        if (employee.firstName == doubleCheck.firstName && employee.lastName == doubleCheck.lastName && employee.idNumber == doubleCheck.idNumber && employee.title == doubleCheck.title && employee.salary ==doubleCheck.salary){
            roster.splice(i, 1);
        }
    }
    render();
    mathTakeTwo();
}

// This displays things on the DOM
function render() {
    // Empty the existing ul
    $('#tableBody').empty();
    // Loop through the array, add a table row for each employee
    for( let employee of roster) {
        let $employee = $(`<tr class='rendering'>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.title}</td>
        <td>${employee.salary}</td>
        <td><button id="clearButton">Delete</button></td></tr>`) //create the delete button
        // Setting data so that we know what object matches when trying to delete
        $employee.data(employee);
        $('#tableBody').append($employee)
    }
}