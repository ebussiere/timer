'use strict';

const inputArgs = function() {
  return process.argv.slice(2);
};

const beep = () => {
  let userArgs = inputArgs();
  for (let i = 0; i < userArgs.length; i++) {
    if (((typeof Number(userArgs[i])) !== "number") || (Number(userArgs[i]) > 1)) {
      setTimeout(() => {
        console.log(userArgs[i]);
        process.stdout.write('\x07');
      }, userArgs[i] * 1000);
    }
  }
};

beep();
