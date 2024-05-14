exports.byteToBlob = (base64) => {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  const { length } = byteCharacters;
  for (let i = 0; i < length; i++)
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "image/png" });
  const url = URL.createObjectURL(blob);
  return url;
};
