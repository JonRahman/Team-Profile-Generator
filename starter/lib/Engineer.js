// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        }
}

// Exporting the Engineer class so that it can be accessed by other files in our application
module.exports = Engineer;