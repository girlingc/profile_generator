const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? (Nicknames are also acceptable :) ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(` Hello, my name is ${answer1}! \n I enjoy ${answer2} while listnening to ${answer3}.\n My favourite meal is ${answer5} for ${answer4}.\n My favourite sport it ${answer6}, and my superpower is ${answer7}!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
