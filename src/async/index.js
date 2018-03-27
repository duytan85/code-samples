const getData = async () => {
  try {
    return await fetchData();
  } catch (error) {
    return error;
  }
};

getData()
  .then((payload) => {
    console.log(payload);
  })
  .catch((error) => {
    console.log(error);
  });
