const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  return tutorials.map((tutorial) => tutorial.split(" ").map((mapUpper)=>mapUpper[0].toUpperCase() + mapUpper.slice(1)).join(" "))
}
//it splits the array and changes the string into sub-array then changes the first letter 
// to upper case then joins it into a new array