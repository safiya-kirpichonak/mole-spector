exports.check = async () => {
  try {
    const url = `${process.env.REACT_APP_API_URl}/health/check`;
    const response = await fetch(url, { method: "GET" });

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
