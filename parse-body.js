function firstStep(input) {
  return input.split('&')
}

function secondStep(input) {
  return input.map(item => item.split('='))
}

function thirdStep(input) {
  // for(let item of input){
  //   for(let ele in item){
  //     item[ele] = item[ele].replace('+', ' ')
  //   }
  // }
  return input.map(([key, value]) => [key, value.replace(/\+/g, " ")])
}

function fourthStep(input) {
  // Your code here
}

function fifthStep(input) {
  // Your code here
}

function parseBody(str) {
  // Your code here
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
