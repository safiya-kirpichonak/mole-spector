({
  async analyze(pictureBuffer) {
    const imageName = `${crypto.randomBytes(16).toString("hex")}.jpg`;
    const imagePath = path.join(__dirname, "..", "images", imageName);
    await fsp.writeFile(imagePath, pictureBuffer);

    const pathSource = path.join(
      __dirname,
      "..",
      "ai",
      "env",
      "bin",
      "activate"
    );
    const pathPython = path.join(__dirname, "..", "ai", "analyze.py");
    const pathAI = path.join(__dirname, "..", "ai", "mole_spector_ai.h5");

    const execPromise = util.promisify(exec);
    const { stdout } = await execPromise(
      `source ${pathSource} && python3 ${pathPython} ${imagePath} ${pathAI}`
    );
    await fsp.unlink(imagePath);

    if (!stdout) throw new Error("Error while processing photo.");
    const result = stdout.split("\n")[1];
    return JSON.parse(result);
  },
});
