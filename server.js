//setup to create a local server in our laptop. 
//bars us from running javascript
var express = require("express")
var app = express()

app.get("/", (req, res) => {
    res.header("Cross-Origin-Opener-Policy", "same-orgin")
    res.header("Cross-Origin-Embedder-Policy", "require-corp")
    res.sendFile(__dirname + "/index.html")
})

app.listen(4200, "0.0.0.0", () => {
    console.log("hewoo @ 4200")
})