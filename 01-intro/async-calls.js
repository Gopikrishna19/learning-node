const maxTime = 1000;

const evenDoubler = (value, callback) => {

  const waitTime = Math.floor(Math.random() * (maxTime + 1));

  setTimeout(() => {
    if (value % 2) {
      callback(new Error("Odd input"));
    } else {
      callback(null, value * 2, waitTime);
    }
  }, waitTime);

};

let count = 0;

for (let i = 0; i < 10; i++) {

  console.log(`Calling evenDoubler for value: ${i}`);

  evenDoubler(i, (err, results, time) => {
    if (err) {
      console.log(`ERROR: ${err.message}`);
    } else {
      console.log(`The results are: ${results} (${time}ms)`);
    }

    if (++count === 10) {
      console.log("Done!");
    }
  });

}
