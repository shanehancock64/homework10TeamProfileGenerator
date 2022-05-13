// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

class Employee {
// I need a constructor for these object properties for each instance of this class
constructor(name, id, email){
  this.name = name;
  this.id = id;
  this.email = email;
}
getName() { 
  return this.name;
 }
 getId() {
   return this.id;
 }
 getEmail() {
   return this.email;
 }

 getRole() {
   return 'Employee';
 }

}

module.exports = Employee;