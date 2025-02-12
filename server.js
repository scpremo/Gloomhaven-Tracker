var path = require('path');
var fs = require('fs')
var express = require('express');
var exphbs = require('express-handlebars')

var monsterData = require('./monsterData.json')
var levelData = require('./levels.json')
var campaignData = require('./campaign-tracker.json')
var testWrite = require('./testdata.json')

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({
  defaultLayout: "main"
}))
app.set('view engine', 'handlebars')

app.use(express.json())


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


app.put('/update/:update', function (req, res, next) {
  var update = req.params.update
  console.log("work dagnit")
  console.log("request recived")
  console.log("==request contents:" + req.body)
  if (req.body) {
    console.log("==request contents:" + req.body.partyName)
    var campaignInfo = {
      partyName: req.body.partyName,
      reputation: req.body.reputation,
      shopModifier: req.body.shopModifier,
      playerCharacters: req.body.playerCharacters,
      playerCount: req.body.playerCount,
      averageLevel: req.body.averageLevel,
      difficulty: req.body.difficulty,
      scenarioLevel: req.body.scenarioLevel,
      scenarios: req.body.scenarios
    }
    console.log("reputation:"+campaignInfo.reputation)
    console.log("players:"+campaignInfo.playerCharacters)
    console.log("average level:"+campaignInfo.averageLevel)
    console.log("average level:"+campaignInfo.difficulty) 

    //console.log(campaignInfo)
    //res.status(500).send("File system not set up yet")
    fs.writeFile(
      './campaign-tracker.json',
      JSON.stringify(campaignInfo,true,2),
      function(err){
        if (err) {
          res.status(500).send("Error writing to db")
        } else {
          res.status(200).send("Campaign successfully updated!!!!!")
          campaignData=campaignInfo
        }
      }
    )
  }
  else {
    console.log("bad input")
    res.status(404).send("bad input")
  }

})
app.get('/', function (req, res, next) {
  var scenarioData = campaignData
  //console.log("== data ", scenarioData)
  // console.log("players 1 and 2:"+ JSON.stringify(scenarioData.playerCharacters.splice(0,2)))
  // console.log("players 3 and 4:"+ JSON.stringify(scenarioData.playerCharacters.splice(0,2)))
  console.log(scenarioData.reputation)
  var levels= [...scenarioData.playerCharacters]
  if (scenarioData) {
    res.status(200).render('campaign-tracker', {  
      layout: 'campaign-layout',
      missions: scenarioData.scenarios,
      partyName: scenarioData.partyName,
      reputation: scenarioData.reputation,
      shopModifier: scenarioData.shopModifier,
      averageLevel:scenarioData.averageLevel,
      scenarioLevel:scenarioData.scenarioLevel,
      playerData1To2: levels.splice(0,2),
      playerData3To4: levels.splice(0,2)

    })
  } else {
    next();
  }
});
app.get('/data', function (req, res, next) {
  var data = monsterData
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
  //console.log("== data for", level, ":", levelDat)
  if (levelDat) {
    var monsterArray = new Array()
    for (let i = 0; i < levelDat.monsters.length; i++) {
      monsterArray.push(monsterData[levelDat.monsters[i]])
    }
    console.log("player count:"+campaignData.playerCount  )
    resData = {
      "monsters": monsterArray,
      "LevelName": levelDat.name,
      "attackMods": monsterData.attackMods,
      "playerCount":campaignData.playerCount,
      "scenarioLevel":campaignData.scenarioLevel
    }
    res.status(200).send(JSON.stringify(resData))
    //res.status(200).send(JSON.stringify(resData))
  } else {
    next();
  }
});
app.get('/load/:n', function (req, res, next) {
  var level = req.params.n;
  //console.log("== level", level)
  res.status(200).render('index', {
    levelName: level
  })
  //res.status(200).send(JSON.stringify(resData))

});
app.get('*', function (req, res) {
  console.log("bad input")
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
