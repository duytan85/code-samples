const getData = new Promise((resolve, reject) => {
  try {
    const response = fetchData();
    resolve(response);
  } catch (error) {
    reject(error);
  }
});

getData
  .then((payload) => {
    console.log(payload);
  })
  .catch((error) => {
    console.log(error);
  });
