const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const createHTML = require('./src/createHTML');
// Employee roles
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const employeeArray = [];
// Add roles of Employee's 
const addEmployee = () => {
  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: 'Choose Employee Roles',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
      type: 'input',
      name: 'employeeName',
      message: "What is the employee's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter employee ID",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter employee email address",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter Manager's Office Number",
      when: (input) => input.role === 'Manager',
    },
    {
      type: 'input',
      name: 'github',
      message: "Enter Employee Github Account",
      when: (input) => input.role === 'Engineer',
    },
    {
      type: 'input',
      name: 'school',
      message: "Enter Intern's current School Name",
      when: (input) => input.role === 'Intern',
    },
    {
      type: 'confirm',
      name: 'confirmAddNewEmployee',
      message: "Add more employee's?",
      default: false
      
    },

  ])
  .then (employeeInput => {
    let {role, employeeName, id, email, officeNumber, github, school, confirmAddNewEmployee} = employeeInput;
    let employee;

    if (role === 'Manager') {
      employee = new Manager (employeeName, id, email, officeNumber);
      // console.log(employee);
    
    } else if (role === 'Engineer') {
      employee = new Engineer (employeeName, id, email, github);
      // console.log(employee);
    
    } else if (role === 'Intern') {
      employee = new Intern (employeeName, id, email, school); 
      // console.log(employee);
    }
    employeeArray.push(employee);
    
    if (confirmAddNewEmployee === true) {
      return addEmployee();
    } else {
      return employeeArray;
    }
    
    
  })
  
};


const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
      // if there is an error 
      if (err) {
          console.log(err);
          return;
      } else {
          console.log("The index.html has been created!")
      }
  })
}; 

addEmployee()
.then(employeeArray => {
  return createHTML(employeeArray);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});














