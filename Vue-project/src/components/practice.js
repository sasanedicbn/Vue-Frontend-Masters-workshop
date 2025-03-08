const fetchData = (callback) => {
  setTimeout(() => {
    const data = { name: "Jovan", country: "SRB" };
    callback(data);
  }, 2000);
};

const callbackFN = (data) => {
  console.log(data, "result");
};
fetchData(callbackFN);
