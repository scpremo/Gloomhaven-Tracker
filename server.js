var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')
var monsterData= require('./monsterData.json')

var app = express();
var port = process.env.PORT || 3000;
// app.engine('handlebars', exphbs.engine({
//     defaultLayout: "main"
// }))
//app.set('view engine', 'handlebars')

app.use(express.static('public'));
app.get('/data',function(req,res,next){
  var data=monsterData
  console.log("==request:", req)
  res.status(200).send(JSON.stringify(data))
})



//add request so that you can get only specic mosnsters rather than every monster 




// app.get('/', function (req, res, next) {
//   var dataPosts = postData
//   console.log("== data ", dataPosts)

//   if (dataPosts) {
//     res.status(200).render('index', {
//       posts: dataPosts,
//       fullPage: true
      
//     })
//     console.log("test")
//   } else {
//     next();
//   }
// });
// app.get('/posts/:n', function (req, res, next) {
//   var numb = parseInt(req.params.n);
//   var postDat = postData[numb]
//   console.log("== data for", numb, ":", postDat)

//   if (postDat) {
//     res.status(200).render('index', {
//       photoURL: postDat.photoURL,
//       caption: postDat.caption,
//       condition: postDat.condition,
//       city: postDat.city,
//       price: postDat.price,
//       description: postDat.description
      
//     })
//   } else {
//     next();
//   }
// });
// app.get('*', function (req, res) {
//   res.status(404).render('404')
// });

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
