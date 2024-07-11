exports.analyze = async ({ imageFile }) => {
  try {
    const url = `${process.env.REACT_APP_API_URl}/ai/analyze`;
    const headers = { "Content-Type": "image/jpeg", "X-Filename": "photo.jpg" };
    const response = await fetch(url, {
      headers,
      method: "POST",
      body: imageFile,
    });

    if (response.ok) {
      const result = await response.json();
      if (result.status !== 200) {
        console.log(result.body.message);
        return { error: true };
      }
      return result.body;
    } else {
      console.log(response.statusText);
      return { error: true };
    }
  } catch (error) {
    console.log(error);
    return { error: true };
  }
};
