const assert = require('assert');
const math = require('./math');

assert.equal(math.evenDoublerSync(2), 4);
assert.throws(() => math.evenDoublerSync(3), /Odd/);

math.evenDoubler(2, (err, result) => {
  assert.ifError(err);
  assert.equal(result, 4, "even doubler failed");
});

math.evenDoubler(3, (err, result) => {
  assert.notEqual(err, null);
  assert.equal(result, null);
});
