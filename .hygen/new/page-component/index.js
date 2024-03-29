const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'pageName',
        message: 'What is the page name?',
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?',
      },
    ];
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { componentName, pageName } = answers;

        const path = `src/components/pages/${capitalize(pageName)}/${capitalize(componentName)}`;
        return { componentName: capitalize(componentName), path };
      });
  },
};