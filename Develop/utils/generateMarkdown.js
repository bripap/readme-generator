const licenseArr = ["Academic Free License v3.0", "Educational Community License v2.0", "ISC", "Microsoft Public License", "Mozilla Public License 2.0", "Open Software License 3.0"]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArr[0]) {
    return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)";
  } else if (license === licenseArr[1]) {
    return "[![License: ECL-2.0](https://img.shields.io/badge/License-ECL--2.0-lightgrey.svg)](https://opensource.org/licenses/ECL-2.0)";
  } else if (license === licenseArr[2]) {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license === licenseArr[3]) {
    return "[![License: MS-PL](https://img.shields.io/badge/License-MS--PL-lightgrey.svg)](https://opensource.org/licenses/MS-PL)";
  } else if (license === licenseArr[4]) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === licenseArr[5]) {
    return "[![License: OSL-3.0](https://img.shields.io/badge/License-OSL--3.0-lightgrey.svg)](https://opensource.org/licenses/OSL-3.0)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArr[0]) {
    return `[${licenseArr[0]}](https://opensource.org/licenses/AFL-3.0)`;
  } else if (license === licenseArr[1]) {
    return `[${licenseArr[1]}](https://opensource.org/licenses/ECL-2.0)`;
  } else if (license === licenseArr[2]) {
    return `[${licenseArr[2]}](https://opensource.org/licenses/ISC)`;
  } else if (license === licenseArr[3]) {
    return `[${licenseArr[3]}](https://opensource.org/licenses/MS-PL)`;
  } else if (license === licenseArr[4]) {
    return `[${licenseArr[4]}](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === licenseArr[5]) {
    return `[${licenseArr[5]}](https://opensource.org/licenses/OSL-3.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArr[0]) {
    return `Read more about ${licenseArr[0]} here:`;
  } else if (license === licenseArr[1]) {
    return `Read more about ${licenseArr[1]} here:`;
  } else if (license === licenseArr[2]) {
    return `Read more about ${licenseArr[2]} here:`;
  } else if (license === licenseArr[3]) {
    return `Read more about ${licenseArr[3]} here:`;
  } else if (license === licenseArr[4]) {
    return `Read more about ${licenseArr[4]} here:`;
  } else if (license === licenseArr[5]) {
    return `Read more about ${licenseArr[5]} here:`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Badges
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.testing}
  
  ## Questions?
  ### Reach me here: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}`;
}

module.exports = generateMarkdown;