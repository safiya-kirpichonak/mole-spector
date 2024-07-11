const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });

exports.getCroppedImg = async (imageSrc, croppedParameters) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = croppedParameters.width;
  canvas.height = croppedParameters.height;

  if (croppedParameters.width < 300 || croppedParameters.height < 300) {
    alert(
      `Image is too small: ${croppedParameters.width}x${croppedParameters.height}px.\nPlease try again. The min size is 300x300px.`
    );
    return;
  }

  ctx.drawImage(
    image,
    croppedParameters.x,
    croppedParameters.y,
    croppedParameters.width,
    croppedParameters.height,
    0,
    0,
    croppedParameters.width,
    croppedParameters.height
  );

  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      const imageName = `${window.crypto.randomUUID()}.jpg`;
      const imageUrl = URL.createObjectURL(file);
      const imageFile = new File([file], imageName, { type: "image/jpg" });
      resolve({ imageUrl, imageFile });
    }, "image/jpg");
  });
};
