const express = require("express");

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views",__dirname+"/views")
const users=[
    {id:1,name:"sri",email:"1@email.com"},
    {id:2,name:"padha",email:"1@email.com"},
    {id:3,name:"sri paada",email:"1@email.com"},
]
// Define a route to fetch data and render it in a table
app.get("/", async (req, res) => {
        res.render("index", { users });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
