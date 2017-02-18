module.exports.evenDoubler = (value, callback) => {
  if (value % 2) {
    callback(new Error("Odd"));
  } else {
    callback(null, value * 2);
  }
};

module.exports.evenDoublerSync = value => {
  if (value % 2) {
    throw new Error("Odd");
  } else {
    return value * 2;
  }
};
