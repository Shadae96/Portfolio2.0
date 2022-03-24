import CodeQuiz from "./Assets/Projects/CodeQuiz.png";
import PasswordGenerator from "./Assets/Projects/PasswordGenerator.png";
import RestfulFitness from "./Assets/Projects/RestfulFitness.png";
import GuardiansoftheCode from "./Assets/Projects/GuardiansOfTheCode.png";


export const PROJECTS = [
  {
    image: RestfulFitness,
    name: "Restful Fitness",
    technologyUsed: "Node.js, Javascript, NPM, Bootstrap, mysql, Heroku, Express.js",
    description: "fitness-tracking tool designed to help you achieve your goals!",
    url: "https://restful--fitness.herokuapp.com/",
  },
  {
    image: GuardiansoftheCode,
    name: "Guardians of the Code Galaxy",
    technologyUsed: "html,CSS, Bootstrap,",
    description: "Get a recommended list of Marvel Movies to watch next!",
    url: "https://nsoroma.github.io/Guardians-of-the-Code-Galaxy/",
  },
  {
    image: PasswordGenerator,
    name: "Password Generator",
    technologyUsed: "ReactNative, Javascript, Redux",
    description: "Generate a Random Password!",
    url: "https://shadae96.github.io/Homework3-Redo-Password-Generator/",
  },
  {
    image: CodeQuiz,
    name: "Code Quiz",
    technologyUsed: "ReactJs, Typescript, Redux",
    description: "Test your JavaScript skills!",
    url: "https://shadae96.github.io/Code-Quiz/",
  },
];

export const SKILLS = [
  { name: "ReactJs", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Nodejs", initialRating: 3 },
  { name: "Html", initialRating: 5 },
  { name: "CSS", initialRating: 4 },
  { name: "Heroku", initialRating: 3 },
  { name: "Restful APIs", initialRating: 4 },
  { name: "Graphql", initialRating: 4 },
  { name: "Apollo", initialRating: 3 },
  { name: "Bootstrap", initialRating: 4 },
  { name: "Bash/Shell", initialRating: 4 },
  { name: "Express.js", initialRating: 4 },
  { name: "Handlebars", initialRating: 3},
  { name: "SQL", initialRating: 3 },
  { name: "Agile App Development", initialRating: 4 },
  { name: "Testing", initialRating: 4 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "Heroku", "Postman"]
