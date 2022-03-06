let employees = [];
let selectedIndex = -1;

function addEmployee(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let birthday = document.getElementById("birthday").value;
    let level = document.getElementById("level").value;
    let position = document.getElementById("position").value;
    let number = document.getElementById("number").value;
    let region = document.getElementById("region").value;

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("level").value = "";
    document.getElementById("position").value = "";
    document.getElementById("number").value = "";
    document.getElementById("region").value = "";



    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        birthDay: birthday,
        level: level,
        position: position,
        number: number,
        region: region
    }

    if (selectedIndex >= 0){
        employees[selectedIndex] = newEmployee;
        selectedIndex = -1;
    } else {
        employees.push(newEmployee);
    }
    drawPage();
}


function deleteEmployee(index) {
    employees.splice(index, 1);
    drawPage();
}

function editEmployee(index) {
    document.getElementById("firstName").value = employees[index].firstName;
    document.getElementById("lastName").value = employees[index].lastName;
    document.getElementById("age").value = employees[index].age;
    document.getElementById("birthday").value = employees[index].birthDay;
    document.getElementById("level").value = employees[index].level;
    document.getElementById("position").value = employees[index].position;
    document.getElementById("number").value = employees[index].number;
    document.getElementById("region").value = employees[index].region;

    selectedIndex = index
}

function drawPage() {
    let result = "";

    for (let i = 0; i < employees.length; i++){
        result +=
            "<div class='col-4 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h3>"+ employees[i].firstName + " " + employees[i].lastName +"</h3></div>" +
            "<div class='card-body'>" +
            "<h5>Age: "+ employees[i].age +"</h5>" +
            "<h5>Bithday: "+ employees[i].birthDay +"</h5>" +
            "<h5>Level: "+ employees[i].level +"</h5>" +
            "<h5>Position: "+ employees[i].position +"</h5>" +
            "<h5>Number: "+ employees[i].number +"</h5>" +
            "<h5>Region: "+ employees[i].region +"</h5>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#modal' onclick='editEmployee("+ i +")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' data-target='#delete' data-toggle='modal'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result").innerHTML = result;
}