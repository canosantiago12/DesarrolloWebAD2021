var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
var numTables = 5;
var waitList = [];
var tables = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/", function(_, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(_, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(_, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(_, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(_, res) {
    return res.json(waitList)
});

app.get("/api/numTables", function(req, res) {
    return res.json(numTables);
})

app.post("/api/tables", function(req, res) {
    if(numTables <= 0) {
        waitList.push(req.body);
        res.json(false);
    } else {
        tables.push(req.body);
        numTables--;
        res.json(true);
    }
});

app.post("/api/clear", function(req, _) {
    waitList = [];
    tables = [];
    numTables = 5;
});