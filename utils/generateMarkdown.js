// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

  ## Installation
  To install the necessary dependencies, run the following command:
    ${data.installation}

  ## Usage
  ${data.repo}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contribution}

  ## Tests
  To run tests, run the following command: 
  ${data.tests}

  ## Questions
  If you have any questions, about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}) or you can find more of my work at [${data.username}](https://github.com/${data.username}).

`;
}

module.exports = generateMarkdown;
