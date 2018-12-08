const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const web_scraper = require('../Geschaeftslogikschicht/Web-Scraper')

const app = express()
app.set('views', 'Praesentationsschicht/views/')
app.engine('.hbs', expressHandlebars({
	defaultLayout: "main_layout",
	extname: ".hbs",
	layoutsDir:"Praesentationsschicht/views/layouts/"
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', function(req, res){
	res.render('start.hbs')
})

app.post("/start/", function(req, res){

	accountsManager.create(req.body.username, req.body.password, function(errorData){
		if(errorData.errors.length == 0)
		{
			res.redirect(303, '/newaccount_success')
		} else {
			res.render("errors.hbs", errorData)
		}
	})
})

module.exports.start = function(){
	app.listen(8080)
}
