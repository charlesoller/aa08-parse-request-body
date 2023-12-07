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
  return input.map(([key, value]) => [key, decodeURIComponent(value)])
}

function fifthStep(input) {
  return input.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc
  }, {});
}

function parseBody(str) {
  const first = firstStep(str);
  const second = secondStep(first);
  const third = thirdStep(second);
  const fourth = fourthStep(third);
  return fifthStep(fourth);
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
