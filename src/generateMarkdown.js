// function to generate markdown for README
const generateMarkdown = data => {
	return `# ${data.title}
  
  ## Description
  ${data.description}

  The above should include 

  ###Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  NOTE: When this section is used, the end user should be taken to each corresponding section of the README.

  ## Installation

  "If a prospective employer wanted to download and test the readme generator, they'd first clone the repo, then run the command 'npm install' to download the application's dependencies into the node_modules folder. For this reason, we never upload the node_modules folder into GitHub"

  ## Usage

  NOTE: I have no idea what goes here yet...

  ## License
  ${data.licenses}

  NOTE: The licenses for the application need to be selected from a list of options with a badge that is added near the top of the README. In addition, there needs to be a notice added to this section of the README that explains which license the application is covered under.

  QUESTION: What are the options for licenses anyway?

  ## Contributing

  ## Tests

  ## Questions
  ${data.name}

  NOTE: This section should contain your GitHub username with a link to your GitHub profile. In addition, this section of the README should include the entered email with instructions on how to reach out.

`;
};

module.exports = generateMarkdown;
