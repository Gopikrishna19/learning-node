let count = 0;

const t = setInterval(() => {
  count++;
  console.log("Interval of 10 ms, count = " + count);
  if (count === 10) {
    clearInterval(t);
  }
}, 10);

setTimeout(() => {
  console.log("Timeout at 200 ms");
},200);

console.log("Running!");
