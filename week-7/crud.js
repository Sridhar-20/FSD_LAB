const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
// app.use(cors());
let users = require("./users");
//CRUD
//C -> CREATE -> POST
//R -> READ -> GET
//U -> UPDATE -> PUT
//D -> DELETE -> DELETE

app.use(bodyparser.json()); 
app.get("/users", (req, res) => {
  res.status(200).json(users);
});
app.get("/users/:id", (req, res) => {
  let rid = req.params.id;
  const user = users.find((u) => u.id == rid);
  if (!user) return res.status(404).json({ msg: "user not found" });
  res.status(200).json(user);
});
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  let newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(200).json({ msg: "user added", users });
});
app.put("/users/:id", (req, res) => {
  let user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).json({ msg: "user not found" });
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  res.status(200).json({ msg: "user updated", users });
});
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.status(200).json({ msg: "user deleted", users });
});

app.listen(3000, () => console.log("app listening at 3000"));