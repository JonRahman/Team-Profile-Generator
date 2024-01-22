// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return 'Employee';
    }
}

// Exporting the Employee class
module.exports = Employee;

// Question 2 - Create a new instance of the Employee class using the employee object literal provided
const employeeObjectLiteral = {
    name: "John Doe",
    id: "1001",
    email: "john.doe@company.com"
};