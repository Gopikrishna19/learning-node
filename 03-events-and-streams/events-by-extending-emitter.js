const EventEmitter = require('events').EventEmitter;

class Resource extends EventEmitter {

  constructor(times) {
    super();

    process.nextTick(() => {

      let count = 0;

      this.emit('start');

      const t = setInterval(() => {

        this.emit('data', ++count);

        if (count === times) {
          this.emit('end', count);
          clearInterval(t);
        }
      }, 10);
    });
  }
}

const resource = new Resource(5);

resource.on('start', () => console.log("Started!"));

resource.on('data', item => console.log(`\tReceived data -> ${item}`));

resource.on('end', times => console.log(`Done, with ${times} data events.`));
