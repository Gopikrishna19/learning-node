const EventEmitter = require('events').EventEmitter;

const getResource = (times) => {

  const emitter = new EventEmitter();

  process.nextTick(() => {

    let count = 0;

    emitter.emit('start');

    const t = setInterval(() => {

      emitter.emit('data', ++count);

      if (count === times) {
        emitter.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });

  return emitter;
};

const resource = getResource(5);

resource.on('start', () => console.log("Started!"));

resource.on('data', item => console.log(`\tReceived data -> ${item}`));

resource.on('end', times => console.log(`Done, with ${times} data events.`));

