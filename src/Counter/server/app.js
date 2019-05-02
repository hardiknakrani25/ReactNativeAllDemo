const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/login", (req, res) => res.send("Login API is working"));
app.post("/login", function(req, res) {
  username = req.body.username;
  password = req.body.Passsword;
  console.log(username);
  console.log(password);

  if (username == "Admin" && password == "123") {
    res.send(req.body);
    console.log("success");
  } else {
    console.log("error");

    res.send(username);
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}`));
