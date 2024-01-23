const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const teamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const createManager = () => {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: "What is the Team Managers name? (Required)",
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log('Please enter the Team Managers name!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'employeeId',
          message: "Enter the Team Manager's ID (Required)",
          validate: employeeId => {
              if (employeeId) {
                  return true;
              } else {
                  console.log("Please enter the Team Manager's employee ID!");
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Enter the Team Manager's email address (Required)",
          validate: email => {
              if (email) {
                  return true;
              } else {
                  console.log("Please enter the Team Manager's email address!");
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'officeNumber',
          message: "Enter the Team Manager's office number (Required)",
          validate: officeNumber => {
              if (officeNumber) {
                  return true;
              } else {
                  console.log("Please enter the Team Manager's office number!");
                  return false;
              }
          }
      },
  ]).then(answers => {
      console.log(answers);
      const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
      teamMembers.push(manager);
      createMenu();
  })
};

const createMenu = () => {
  return inquirer.prompt([
      {
          type: 'list',
          name: 'menu',
          message: 'Please select which option you would like to continue with:',
          choices: ['add an engineer', 'add an intern', 'finish building your team']
      }])
      .then(userChoice => {
          switch (userChoice.menu) {
              case "add an engineer":
                  createEngineer();
                  break;
              case "add an intern":
                  createIntern();
                  break;
              default:
                  generateHTML();
          }
      });
};

const createEngineer = () => {
  console.log('Add a New Engineer');

  return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is the name of the engineer? (Required)',
          validate: engineerName => {
              if (engineerName) {
                  return true;
              } else {
                  console.log('Please enter the name of the engineer!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'employeeId',
          message: 'Enter the Engineers employee ID (Required)',
          validate: employeeId => {
              if (employeeId) {
                  return true;
              } else {
                  console.log('Please enter the Engineers employee ID!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: 'Enter the Engineers email address (Required)',
          validate: email => {
              if (email) {
                  return true;
              } else {
                  console.log('Please enter the Engineers email address!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'githubUsername',
          message: 'Enter the Engineers Github username. (Required)',
          validate: githubUsername => {
              if (githubUsername) {
                  return true;
              } else {
                  console.log('Please enter the Engineers Github username!');
                  return false;
              }
          }
      }
  ]).then(answers => {
      console.log(answers);
      const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
      teamMembers.push(engineer);
      createMenu();
  })
};

const createIntern = () => {
  console.log('Add a New Intern');

  return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is the name of the intern? (Required)',
          validate: internName => {
              if (internName) {
                  return true;
              } else {
                  console.log('Please enter the name of the intern!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'employeeId',
          message: 'Enter the interns employee ID (Required)',
          validate: employeeId => {
              if (employeeId) {
                  return true;
              } else {
                  console.log('Please enter the interns employee ID!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: 'Enter the interns email address (Required)',
          validate: email => {
              if (email) {
                  return true;
              } else {
                  console.log('Please enter the interns email address!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'school',
          message: 'Enter the interns school name. (Required)',
          validate: school => {
              if (school) {
                  return true;
              } else {
                  console.log('Please enter the interns school name!');
                  return false;
              }
          }
      }
  ]).then(answers => {
      console.log(answers);
      const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
      teamMembers.push(intern);
      createMenu();
  })
};

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// Function to generate HTML and write it to the output file
function generateHTML() {
  const html = render(teamMembers);
  fs.writeFileSync(outputPath, html, "utf-8");
}

createManager();

