var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.json({ msg: "Todo ok" });
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
