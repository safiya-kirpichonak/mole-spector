"use strict";

const http = require("node:http");

const { STATUS_CODES, REASON_PHRASES } = require("./libs");

const readRequestBody = async (req) => {
  const buffers = [];
  for await (const chunk of req) buffers.push(chunk);
  if (buffers.length === 0) return null;
  return Buffer.concat(buffers);
};

module.exports = (routing, port) => {
  http
    .createServer(async (req, res) => {
      try {
        const { url } = req;
        const [name, action] = url.substring(1).split("/");
        const entity = routing[name];
        if (!entity) return void res.end(REASON_PHRASES.NOT_FOUND);
        const handler = entity[action];
        if (!handler) return void res.end(REASON_PHRASES.NOT_FOUND);

        const body = await readRequestBody(req);
        const result = await handler(body);

        res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Filename");
        res.setHeader("Access-Control-Allow-Origin", process.env.WEB_URL);
        res.setHeader("Access-Control-Allow-Methods", "POST");
        res.setHeader("Access-Control-Max-Age", 86400);
        return res.end(
          JSON.stringify({
            status: STATUS_CODES.OK,
            body: result,
          })
        );
      } catch (error) {
        console.log(error);

        res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Filename");
        res.setHeader("Access-Control-Allow-Origin", process.env.WEB_URL);
        res.setHeader("Access-Control-Allow-Methods", "POST");
        res.setHeader("Access-Control-Max-Age", 86400);
        return res.end(
          JSON.stringify({
            status: STATUS_CODES.INTERNAL_SERVER_ERROR,
            body: { message: STATUS_CODES.INTERNAL_SERVER_ERROR },
          })
        );
      }
    })
    .listen(port);

  console.log(`HTTP server started on port ${port}.`);
};
