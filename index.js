const express = require("express")
const app = express()
app.set("view engine", "hbs")

app.listen(4000, () => {
    console.log("app listening on port 4000")
})

app.get('/:name', function(req, res) {
	res.render('template', { name: req.params.name })
})

