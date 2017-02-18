const math = require('./math');
const should = require('should');

describe('Math', () => {
  describe('Sync', () => {
    it('should double even numbers', () => {
      math.evenDoublerSync(2).should.equal(4);
    });

    it('should throw on odd numbers', () => {
      (() => math.evenDoublerSync(3)).should.throw(/Odd/);
    });
  });

  describe('Async', () => {
    it('should double even numbers', done => {
      math.evenDoubler(2, (err, result) => {
        should.not.exist(err);
        result.should.equal(4);
        done();
      });
    });

    it('should throw on odd numbers', done => {
      math.evenDoubler(3, (err, result) => {
        err.should.not.be.null();
        should.not.exist(result);
        done();
      });
    });
  });
});
