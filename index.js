class mokilow {
  static warn(data, time=false) {
    nullCheck(data);
    log(levels.warn, data, time);
  }
  
  static error(data, time=false) {
    nullCheck(data);
    log(levels.error, data, time);
  }
  
  static info(data, time=false) {
    nullCheck(data);
    log(levels.info, data, time);
  }
  
  static debug(data, time=false) {
    nullCheck(data);
    log(levels.debug, data, time);
  }
}

const levels = {
  warn: {
    title: 'WARN',
    color: "\x1b[43m",
  },
  error: {
    title: 'ERROR',
    color: "\x1b[41m",
  },
  info: {
    title: 'INFO',
    color: "\x1b[44m",
  },
  debug: {
    title: 'DEBUG',
    color: "\x1b[45m",
  }
}

const log = (level, data, time) => {
  if (time) {
    console.log(`${level.color} \x1b[1m${level.title} \x1b[0m [${new Date().toLocaleTimeString()}] ` + data);
  } else {
    console.log(`${level.color} \x1b[1m${level.title} \x1b[0m ` + data);
  }
};

const nullCheck = (data) => {
  if (!data) {
    throw new Error('no log data provided');
  }
}

export default mokilow;