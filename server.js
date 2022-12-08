var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')
var monsterData= require('./monsterData.json')
var levelData=require('./levels.json')
var campaignData= require('./campaign-tracker.json')
console.log(levelData)
var app = express();
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs.engine({
    defaultLayout: "main"
}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));
app.get('/', function (req, res, next) {
  var scenarioData = campaignData
  console.log("== data ", scenarioData)

  if (scenarioData) {
    res.status(200).render('campaign-tracker', {
      layout:'campaign-layout',
      missions: scenarioData.scenarios,      
    })
    console.log("test")
  } else {
    next();
  }
});
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
app.get('/level/:n', function (req, res, next) {
  var level = req.params.n;
  var levelDat = levelData[level]
  console.log("== data for", level, ":", levelDat)
  if (levelDat) {
    var monsterArray= new Array()
    for(let i=0;i<levelDat.monsters.length; i++){
      monsterArray.push(monsterData[levelDat.monsters[i]])
    }
    resData={
      "monsters" : monsterArray,
      "LevelName": levelDat.name,
      "attackMods": monsterData.attackMods
    }
    res.status(200).send(JSON.stringify(resData))
    //res.status(200).send(JSON.stringify(resData))
  } else {
    next();
  }
});
app.get('/load/:n', function (req, res, next) {
  var level = req.params.n;
  console.log("== level", level)
  res.status(200).render('index',{
    levelName: level
  })
    //res.status(200).send(JSON.stringify(resData))
  
});
// app.get('*', function (req, res) {
//   res.status(404).render('404')
// });

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
