// * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.
var express = require("express")
var app = express()
var PORT = 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
   res.send("Welcome to the Home Page!");
});

app.get("/survey", function(req, res) {
   res.send("Please fill out this survey honestly.")
})

app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/survey", function(req, res) {
   res.sendFile(path.join(_dirname, "survey.html" ));
});

// var server = http.createServer(handleRequest);
   
//    function handleRequest(req, res) {
//       var path = req.url;
    
//       switch (path) {
//       case "/survey":
//         return renderSurveyPage(req, res);
//       default:
//         return renderWelcomePage(req, res);
//       }
//     }

//     function renderSurveyPage(req, res) {

//     }

//     function renderWelcomePage(req, res) {

//     }

    
app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
});