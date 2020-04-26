var { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, colorize, simple } = format;
require('winston-daily-rotate-file');

// var transport = new (winston.transports.DailyRotateFile)({
//   filename: 'application-%DATE%.log',
//   datePattern: 'YYYY-MM-DD-HH',
//   zippedArchive: true,
//   maxSize: '20m',
//   maxFiles: '14d'
// });

var options = {
  file: {
    level: 'info',
    filename: process.cwd()+`/logs/application.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  fileDebug: {
    level: 'debug',
    filename: process.cwd()+`/logs/debug.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: true
  },
  fileError: {
    level: 'error',
    filename: process.cwd()+`/logs/error.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: true,
  }
};

var logger = createLogger({
  transports: [
    new transports.File(options.file),
    new transports.File(options.fileDebug),
    new transports.File(options.fileError)
    //new DailyRotateFile()
  ],
  format: combine(
    colorize(),
    label({ label: ' Label Print' }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  exitOnError: false
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: simple()
  }));
}
module.exports= {
    logger
}