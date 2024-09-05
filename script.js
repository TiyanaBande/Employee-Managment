let employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  let outputDiv = document.getElementById("output");
  
  // 1. Print all developers using .map()
  function PrintDeveloperbyMap() {
    outputDiv.innerHTML = ""; // Clear previous output
    employees.map((employee) => {
      if (employee.profession === "developer") {
        outputDiv.innerHTML += `<p>${employee.name} (ID: ${employee.id}, Age: ${employee.age}, Profession: ${employee.profession})</p>`;
      }
    });
  }
  
  // 2. Print all developers using .forEach()
  function PrintDeveloperbyForEach() {
    outputDiv.innerHTML = ""; // Clear previous output
    employees.forEach((employee) => {
      if (employee.profession === "developer") {
        outputDiv.innerHTML += `<p>${employee.name} (ID: ${employee.id}, Age: ${employee.age}, Profession: ${employee.profession})</p>`;
      }
    });
  }
  
  // 3. Add a new employee and print the updated array
  function addData() {
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    displayEmployees();
  }
  
  // 4. Remove the admin and print the updated array
  function removeAdmin() {
    employees = employees.filter((employee) => employee.profession !== "admin");
    displayEmployees();
  }
  
  // 5. Concatenate with another array of 3 new employees and print the result
  function ConcatinateArray() {
    let newEmployees = [
      { id: 5, name: "Alice", age: "21", profession: "manager" },
      { id: 6, name: "Bob", age: "22", profession: "developer" },
      { id: 7, name: "Charlie", age: "23", profession: "designer" }
    ];
    
    let concatenatedArray = employees.concat(newEmployees);
    outputDiv.innerHTML = ""; // Clear previous output
    concatenatedArray.forEach(employee => {
      outputDiv.innerHTML += `<p>${employee.name} (ID: ${employee.id}, Age: ${employee.age}, Profession: ${employee.profession})</p>`;
    });
  }
  
  // Helper function to display all employees
  function displayEmployees() {
    outputDiv.innerHTML = ""; // Clear previous output
    employees.forEach((employee) => {
      outputDiv.innerHTML += `<p>${employee.name} (ID: ${employee.id}, Age: ${employee.age}, Profession: ${employee.profession})</p>`;
    });
  }
  