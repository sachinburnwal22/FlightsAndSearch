const express = require("express");
const setupAndStartServer = async () => {
  //Create the express object
  const app = express();
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};
