
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
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

module.exports= {
    logger_options: options
}