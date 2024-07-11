exports.server = {
  transport: process.env.API_TRANSPORT || "http",
  port: process.env.API_PORT || 3033,
  logger: process.env.API_LOGGER,
};
