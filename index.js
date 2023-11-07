import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3002;

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");

});

app.get("/work", (req, res) => {
  res.render("work.ejs");

});



app.post("/submit2", (req,res) => {


  res.render("work.ejs");
  
  });



app.post("/submit", (req,res) => {


res.render("index.ejs");

});


  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});