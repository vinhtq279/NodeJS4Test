const port = 65503, express = require("express"), app = express();

app.post("/", (req, res) => {
    res.send("Hello, Universe!");
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    console.log(req.method);
})
.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`); 
});

app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully.");
});

app.get("/items/:vegetable", (req, res) => {
    res.send(req.params.vegetable);
});