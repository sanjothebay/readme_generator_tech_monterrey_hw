// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
   ## What is your GitHub UserName ✨ ❓
   ### ${data.username}
   - - -
   ## What is your Email Address 📧 ❓
   ### ${data.email}
   - - -
   ## What is your Your Projects Name 📃 ❓
   ### ${data.projectsName}
   - - -
   ## Please Write A Short Description Of Your Project 📝
   ### ${data.description}
   - - -
   ## What Command Should Be Run To Install Dependencies 🚀 ❓
   ### ${data.commandDependencies}
   - - -
   ## What Command Should Be Run To Test 🚀 ❓
   ### ${data.commandTest}
   - - -
   ## What Does The User Need To Know About Using This Repo 🔱 ❓
   ### ${data.RepoKnowledge}
   - - -
   ## What Does The User Need To Know About Using Contributing To This Repo ✒️ ❓
   ### ${data.contribution}
   - - -
`;
}
module.exports = generateMarkdown;
