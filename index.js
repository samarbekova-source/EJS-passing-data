import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// render h1
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const name = req.body["fName"].length;
  const lastName = req.body["lName"].length;
  let result = name + lastName;
  // console.log(result);
  // res.send("<h2>Your name has: " + result + " number</h2>");
  res.render("index.ejs", { numberOfLetters: result });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
