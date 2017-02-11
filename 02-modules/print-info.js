module.exports = (timestamp, os) => {

  console.log(`${timestamp} Host: ${os.hostname}`);
  console.log(`${timestamp} Average load: ${os.loadavg}`);
  console.log(`${timestamp} Free Memory: ${os.freemem} of ${os.totalmem} MB free`);

};
