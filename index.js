const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');

    const members = [];

    // this prompts manager inputs using inquirer
    const addManager = () => {
        return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: "Enter Manager's name.",
            confirm: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: "Enter Manager's ID number.",
            confirm: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Manager's email.",
            confirm: email => {
                if (email) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter Manager's office number.",
            confirm: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then(dataInput => {
        const {name, id, email, officeNumber} = dataInput;
        const manager = new Manager (name, id, email, officeNumber);
        members.push(manager);
        console.log(Manager);
    })
};

const addEmployee = () => {
    console.log("You can now add employee's to your team!");

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name?",
            confirm: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What role do you want to give this employee?',
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is your Employee's ID number?",
            confirm: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email?",
            confirm: email => {
                if (email) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the school for your Intern.",
            when: (input) => input.role === 'Intern',
            confirm: school => {
                if (school) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's github user name?",
            when: (input) => input.role === 'Engineer',
            confirm: github => {
                if (github) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: "Add more employees to your team?",
            default: false
        }
    ])
    .then(teamMemberData => {
        // this is the info on the different employees depending on their roles

        var {name, ID, email, github, school, role, confirmEmployee} = teamMemberData;
        var employee;
        if (role === 'Intern') {
            employee = new Intern (name, ID, email, school);
            console.log(employee);
        } else if (role === 'Engineer') {
            employee = new Engineer (name, ID, email, github);
            console.log(employee);
        }
        
        members.push(employee);
        if (confirmEmployee) {
            return addEmployee(members);
        } else {
            return members;
        }
    }) 
        
    };

    // this generates the data in the form of HTML using the fs module
    const writeFile = data => {
        fs.writeFile('./output/index.html', data, err => {
            // if error occurs
            if (err) {
                console.log(err);
                return;
            } else {
                console.log('Profiles have been generated for your team. This file can be located in the output folder!')
            }
        })
    };

    addManager()
    .then(addEmployee)
    .then(members => {
        return generateHTML(members);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });