const os = require('os');

Object.keys(os).forEach(key => {
  const value = os[key];

  if (typeof value === 'function') {
    console.log(`Calling os.${key}:`);
    console.log(value());
  } else if (typeof  value === 'string') {
    console.log(`Value of os.${key}:`);
    console.log(value);
  }

  console.log();
});
