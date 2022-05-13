const { test } = require('picomatch');
const Employee = require('../lib/employee');

test('can create a new employee object', ()=> {
  const employee = new Employee();


  expect(typeof(employee)).toBe('object');
})

test('can set name to employee object', ()=> {
  const employeeName = 'Shane';
  const employee = new Employee('Shane');
  expect(employee.name).toBe(employeeName);
})

test('can set id to employee object', ()=> {
  const employeeId = 1;
  const employee = new Employee('Shane', 5);
  expect(employee.id).toBe(employeeId);
})

test('can get name with getName method', ()=> {
  const employeeName = 'Shane';
  const employee = new Employee('Shane');
  expect(employee.getName()).toBe(employeeName);
})