"use strict";

const vm = require("node:vm");
const path = require("node:path");
const fs = require("node:fs").promises;

const config = require("./src/config");
const sandbox = require("./src/config/sandbox.js");
const server = require(`./src/transport/${config.server.transport}`);

const load = async (filePath, sandbox) => {
  const RUN_OPTIONS = { timeout: 5000, displayErrors: false };
  const src = await fs.readFile(filePath, "utf8");
  const code = `'use strict';\n${src}`;
  const script = new vm.Script(code);
  const context = vm.createContext(Object.freeze({ ...sandbox }));
  return script.runInContext(context, RUN_OPTIONS);
};

(async () => {
  const apiPath = path.join(process.cwd(), "src", "api");
  const files = await fs.readdir(apiPath);

  const routing = {};
  for (const fileName of files) {
    const filePath = path.join(apiPath, fileName);
    const serviceName = path.basename(fileName, ".js");
    routing[serviceName] = await load(filePath, sandbox);
  }

  server(routing, config.server.port);
})();
