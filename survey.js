const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let results = [];
const question1 = () => {
  return new Promise((resolve) => {
    rl.question(`What's your name?`, (answer) => {
      answer1 = `Hello ${answer}`;
      results.push(answer1);
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve)=> {
    rl.question(`What's an activity you like doing?`, (answer) => {
      answer2 = ` you like to do ${answer}`;
      results.push(answer2);
      resolve()
    })
  })
}
const question3 = () => {
  return new Promise((resolve)=> {
    rl.question(`What do you listen to while doing that?`, (answer) => {
      answer3 = ` while doing that you like to listen to ${answer}.`;
      results.push(answer3);
      resolve()
    })
  })
}
const question4 = () => {
  return new Promise((resolve)=> {
    rl.question(`Which meal is your favourite?`, (answer) => {
      answer4 = ` Your favourite meal is ${answer}`;
      results.push(answer4);
      resolve()
    })
  })
}
const question5 = () => {
  return new Promise((resolve)=> {
    rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
      answer5 = `,and you like to eat ${answer} in this meal.`;
      results.push(answer5);
      resolve()
    })
  })
}
const question6 = () => {
  return new Promise((resolve)=> {
    rl.question(`Which sport is your absolute favourite?`, (answer) => {
      answer6 = ` To add to that, Your favourite sport is ${answer}.`;
      results.push(answer6);
      resolve()
    })
  })
}
const question7 = () => {
  return new Promise((resolve)=> {
    rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
      answer7 = ` Finally, your superpower is ${answer}. thank you for your answers`;
      results.push(answer7);
      resolve()
    })
  })
}
const survey = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  await question5()
  await question6()
  await question7()
  console.log("*******************************SURVEY******************************************");
  results.forEach(item => {
    process.stdout.write(item);
  });
  
  rl.close()
}

survey();

