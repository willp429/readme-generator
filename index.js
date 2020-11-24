const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');

// array of questions for user
const questions = () => {
	console.log(`
	===============
	README MARKDOWN
	===============
	`);
	return inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your name? (Required)',
			validate: nameInput => {
				if (nameInput) {
					return true;
				} else {
					console.log('Please enter your name!');
					return false;
				}
			}
		},
		{
			type: 'confirm',
			name: 'confirmAbout',
			message:
				'Would you like to enter some information about yourself for an "About" section?',
			default: true
		},
		{
			type: 'input',
			name: 'about',
			message: 'Provide some information about yourself:',
			when: ({ confirmAbout }) => {
				if (confirmAbout) {
					return true;
				} else {
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'title',
			message: 'What is the title of your project? (Requried)',
			validate: title => {
				if (title) {
					return true;
				} else {
					console.log('Please enter a project name!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'description',
			message: 'Please provide a thorough description of your project:',
			validate: description => {
				if (description) {
					return true;
				} else {
					console.log('Please provide a description!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'reason',
			message: 'What prompted you to create this application?',
			validate: reason => {
				if (reason) {
					return true;
				} else {
					console.log('Please provide a reason!');
					return false;
				}
			}
		},
		{
			type: 'checkbox',
			name: 'licenses',
			message: 'Are there any licenses associated with this project?',
			choices: ['MIT', 'Eclipse', 'GNU', 'IBM', 'Mozilla'],
			validate: licenses => {
				if (licenses) {
					return true;
				} else {
					console.log('Please select a license for your project...');
					return false;
				}
			}
		}
	]);
};

const mData = {
	name: 'Jake',
	github: 'minnesotaNyst',
	title: 'Readme Generator',
	description:
		'This is a descrtiption of the project. It should be as detailed as possible.',
	confirmAbout: true,
	about:
		'Please feel free to call me Jake. To share a little about who I am, I will start with my professional life. As a motivated and goal oriented individual I embrace challenges; strive to help others learn and develop; work collaboratively with teams; push myself to further develop my current skill set and expect to succeed. On a more personal note, I am also a husband to an incredible wife and fur-father to an amazing pup. I enjoy days spent on the golf course and continually learning new things.',
	languages: ['HTML', 'CSS'],
	link: 'https://github.com/minnesotaNyst',
	email: 'jnystrom38@gmail.com',
	licenses: ['MIT', 'ICS']
};

questions().then(data => {
	const pageMD = generateMarkdown(data);

	fs.writeFile('./g-readme.md', pageMD, err => {
		if (err) throw new Error(err);
		/* }); */

		console.log(
			'Your README is complete! Check it out g-readme.md to see the output!'
		);
	});
});
