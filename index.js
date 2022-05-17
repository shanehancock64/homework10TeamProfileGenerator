const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const createHMTL = require('./createHTML');
// Employee roles
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Employee = require('./lib/employee')
const teamArray = [];
// Add Manager Role 
const addManager = () => {
  return inquirer.prompt ([
    {
    type: 'input',
    name: 'Name',
    message: 'Name of Team Manager',
    },
    {
      type: 'input',
      name: 'ID',
      message: 'Enter Employee ID of Team Manager',
    },
    {
      type: 'input',
      name: 'Employee Email Address',
      message: 'Please enter email address of Team Manager',
    },
    {
      type: 'input',
      name: 'Office Number',
      message: 'Please enter manager office number',
    }
  ]) 
   .then(managerInput => {
  const  { name, id, email, officeNumber } = managerInput; 
  const manager = new Manager (name, id, email, officeNumber);

  teamArray.push(manager); 
  console.log(manager); 
})
};





// function addEmployee() {
//   inquirer .prompt([{
//       type: "input",
//       message: "What is your name?",
//       name: "name",
//   },
//   {
//       type: "input",
//       message: "What is your ID?",
//       name: "id",
//   }, {
//       type: "input",
//       message: "What is your email address?",
//       name: "email",
//   },
//   {
//       type: "list",
//       message: "What is your role?",
//       name: "role",
//       choices: ["Engineer", "Intern", "Manager"]
//   }
//   ])
  
  
    
// }