const inquirer = require('inquirer');

async function init() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'whatToDo',
            message: 'What would you like to do?',
            choices: ['Add', 'View', 'Update Role']
        }
    ]);

    if(answers.whatToDo === "Add") {
        const addAnswers = await inquirer.prompt([
        {
            type: 'list',
            name: 'whatToDo',
            message: 'What would you like to add?',
            choices: ['Department', 'Role', 'Employee']
        }
    ]);
    } else if (answers.whatToDo === "View") {
        const viewAnswers = await inquirer.prompt([
        {
            type: 'list',
            name: 'whatToDo',
            message: 'What would you like to view?',
            choices: ['Department', 'Role', 'Employee']
        }
    ]);
    } else if (answers.whatToDo === "Update Role") {
        const updateAnswers = await inquirer.prompt([
        {
            type: 'input',
            name: 'whatToDo',
            message: 'Employee name you like to update?',
        }
    ]);
    } else {
        console.log("Nothing selected. bye!");
    }
}

init();