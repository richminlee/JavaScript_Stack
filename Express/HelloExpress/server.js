const express = require("express");
const app = express();
const port = 8000;

app.get("/api", (req, res) => {
  res.json({ message: "hi" });
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );

// app.get("/api", (req, res) => {
//   res.send("Our express api server is now sending this over to the browser");
// });

// const server = app.listen(8000, () =>
//   console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );
