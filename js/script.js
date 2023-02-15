// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var addForm = document.getElementById('addForm');
var employees = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count = employees.getElementsByTagName('tr').length - 1;
var empCount = document.getElementById('empCount');
empCount.innerText = `(${count})`;

// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var extension = document.getElementById('extension').value;
    var email = document.getElementById('email').value;
    var department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    var row = employees.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    var idCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var extCell = row.insertCell(2);
    var emailCell = row.insertCell(3);
    var deptCell = row.insertCell(4);
    var delCell = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.appendChild(document.createTextNode(id));
    nameCell.appendChild(document.createTextNode(name));
    extCell.appendChild(document.createTextNode(extension));
    emailCell.appendChild(document.createTextNode(email));
    deptCell.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    var delButton = document.createElement('button');
    delButton.className = 'btn btn-danger btn-sm delete';
    delButton.appendChild(document.createTextNode('X'));
    delCell.appendChild(delButton);

    // RESET THE FORM
    addForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.textContent = `(${count})`;
    
});

// DELETE EMPLOYEE
employees.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        var row = e.target.closest('tr');
        if(confirm('Press OK to delete the employee')) {
        row.remove();
        count--;
        empCount.textContent = `(${count})`;
        }
    }
});