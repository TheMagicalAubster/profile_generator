const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = "";

rl.question('What is your name? Nicknames are also acceptable :) ', (name) => {
  console.log(`Nice to meet you ${name}!`);
  data = data + "Hi, my name is " + name;
  
  rl.question('What is an activity you like doing? ', (activity) => {
      // TODO: Log the answer in a database
      console.log(`${activity} is so much fun!`);
      data = data + ". The best activity for a Saturday is " + activity;
   
      rl.question('What do you listen to while doing that? ', (music) => {
        // TODO: Log the answer in a database
        console.log(`${music} you and I have something in common ;)`);
        data = data + ". My music tastes are around " + music;

        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
          // TODO: Log the answer in a database
          console.log(`${meal}! You and I REALLY have something in common ;)`);
          data = data + ". My favorite meal is " + meal;

          rl.question('What is your favourite thing to eat for that meal? ', (thing) => {
            // TODO: Log the answer in a database
            console.log(`${thing} is ok... I guess...`);
            data = data + ". My fave food is " + thing;

            rl.question('Which sport is your absolute favourite? ', (sport) => {
              // TODO: Log the answer in a database
              console.log(`${sport} is a pretty cool sport!`);
              data = data + ". The sport I like is " + sport;  
              
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                // TODO: Log the answer in a database
                console.log(`${answer} is a superpower indeed!`);
              
                console.log("My introduction: ", data);
                rl.close();
              });

            });
            
          });
          
        });
       
      });
    });
});








  