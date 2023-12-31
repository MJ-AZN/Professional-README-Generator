// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  function renderLicenseBadge(license) {
    if (license !== "None") {
      return "![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)"
    }
  
    return "";
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return "[License](#license)"
  }

  return "";
};

  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    Licensed by ${license}`
  }

  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Features](#features)
* [Dependencies](#dependencies)
* [Technologies](Technologies)
* [Contributors](#contributors)
* [Questions](#questions)
## Features
${data.features}
## Dependencies
${data.require}
## Technologies
${data.usage}
## Contributors
${data.contributors}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;