const colors = {
  RESET_COLOR: "\x1b[0m",
  BRIGHT_COLOR: "\x1b[1m",
  DIM_COLOR: "\x1b[2m",
  UNDERSCORE_COLOR: "\x1b[4m",
  BLINK_COLOR: "\x1b[5m",
  REVERSE_COLOR: "\x1b[7m",
  HIDDEN_COLOR: "\x1b[8m",

  FOREGROUND_BLACK: "\x1b[30m",
  FOREGROUND_RED: "\x1b[31m",
  FOREGROUND_GREEN: "\x1b[32m",
  FOREGROUND_YELLOW: "\x1b[33m",
  FOREGROUND_BLUE: "\x1b[34m",
  FOREGROUND_MAGENTA: "\x1b[35m",
  FOREGROUND_CYAN: "\x1b[36m",
  FOREGROUND_WHITE: "\x1b[37m",

  BACKGROUND_BLACK: "\x1b[40m",
  BACKGROUND_RED: "\x1b[41m",
  BACKGROUND_GREEN: "\x1b[42m",
  BACKGROUND_YELLOW: "\x1b[43m",
  BACKGROUND_BLUE: "\x1b[44m",
  BACKGROUND_MAGENTA: "\x1b[45m",
  BACKGROUND_CYAN: "\x1b[46m",
  BACKGROUND_WHITE: "\x1b[47m",
};

const date = new Date().toISOString();

module.exports = {
  log(message) {
    console.log(
      colors.REVERSE_COLOR +
        colors.BACKGROUND_RED +
        date +
        " : " +
        message +
        colors.RESET_COLOR
    );
  },
  error(message) {
    console.log(
      colors.FOREGROUND_RED + date + " : " + message + colors.RESET_COLOR
    );
  },
};
