const express = require('express');
const app = express();

app.get('/param/:value', (req, res) => {
  const paramValue = req.params.value;
  res.send(`You sent: ${paramValue}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
