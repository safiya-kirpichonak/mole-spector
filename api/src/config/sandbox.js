const os = require("node:os");
const util = require("node:util");
const path = require("node:path");
const crypto = require("node:crypto");
const fsp = require("node:fs").promises;
const { exec } = require('node:child_process');

const config = require("./index.js");
const logger = require(`../logger/${config.server.logger}`);

module.exports = {
  os,
  fsp,
  util,
  exec,
  path,
  crypto,
  process,
  console: logger,
  __dirname: __dirname,
};
