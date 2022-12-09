const shopModifierTable = [5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -2, -2, -2, -2, -3, -3, -3, -3, -4, -4, -4, -4, -5, -5]
function update() {
    var partyName = document.getElementById("party-name").value
    console.log("==Party Name:" + partyName)
    var reputation = parseInt(document.getElementById("reputation").value)
    if (!reputation) {
        reputation = 0
    }
    if (reputation > 20)
        reputation = 20
    if(reputation<-20)
        reputation=-20
    console.log("== reputation:" + reputation)
    var shopModifier = shopModifierTable[reputation + 20]
    document.getElementById("modifier").textContent=shopModifier
    console.log("== shop Modifier:" + shopModifierTable[reputation + 20])
    var partyMembers = new Array()
    var partyMembersNames=document.getElementsByClassName("character")
    var partyMembersLevels=document.getElementsByClassName("player-level")
    var total=0;
    var playerCount=0
    for(let i=0;i<partyMembersNames .length;i++)
    {
        console.log("==palayer "+(i+1)+" name:"+ partyMembersNames[i].value)
        var name =partyMembersNames[i].value
        console.log("==palayer "+(i+1)+" level:"+ partyMembersLevels[i].value)
        var level= parseInt(partyMembersLevels[i].value)
        if(level>0)
        {
            total+=level;
            playerCount++
        }
        var playerInfo={
            name:name,
            level:level,
            index:i
        }
        partyMembers.push(playerInfo)
        // playerInfo={
        //     playerName: 
        // }
    }
    console.log("==total player levels:"+total)
    console.log("==player count:"+playerCount)
    var averagePlayerLevel = (total/playerCount)
    document.getElementById("avg-level").textContent=averagePlayerLevel
    console.log("==Average Player Level: "+averagePlayerLevel)
    var difficulty=parseInt(document.getElementById("dificulty").value)
    console.log("==dificulty Modifier: "+ difficulty)
    var scenarioLevel=Math.round(averagePlayerLevel/2+difficulty)
    console.log("==scenario level: " + scenarioLevel)
    document.getElementById("scenario-level").textContent=scenarioLevel
    var scenarios = new Array()    
    var completedChecks= document.getElementsByClassName("completedCheck")
    var foundChecks= document.getElementsByClassName("foundCheck")
    var scenarioLabels=document.getElementsByClassName("scenario-label")
    var index=0;
    for(let i=0;i<99;i++)
    {
        if(i%25==0)
        {
            var mission={
                "example": true,
                "scenario-even/odd": "scenario-odd"
            }
            scenarios.push(mission)
        }
        else{
            var type=index%2
            var evenOrOdd
            if(type==0)
            {
                evenOrOdd="scenario-odd"
            }
            else{
                evenOrOdd="scenario-even"
            }
            var foundBool=foundChecks[index].checked
            var found=""
            if(foundBool)
            {
                found="checked"
            }
            var completedbool=completedChecks[index].checked
            var completed=""
            if(completedbool)
            {
                completed="checked"
            }
            var link=scenarioLabels[i].href
            var missionName=link.substring(link.lastIndexOf('/')+1,link.length)
            var scenario =scenarioLabels[i].textContent
            var mission={
                "scenario-even/odd": evenOrOdd,
                "found": found,
                "example": false,
                "completed": completed,
                "scenarioLocation": missionName,
                "scenario": scenario
            }
            index++
            scenarios.push(mission)
        }                
    }
    fetch("update/true",{
        method: 'PUT',
        body: JSON.stringify({
            partyName: partyName,
            reputation: reputation,
            shopModifier:shopModifier,
            playerCharacters:partyMembers,
            playerCount:playerCount,
            averageLevel:averagePlayerLevel,
            difficulty:difficulty,
            scenarioLevel: scenarioLevel,
            scenarios:scenarios
        }),
        headers: {
            "Content-Type": "application/json"
          }
    }).then(function (res){
        if(res.status===500)
            alert("im not ready for this")
        else if(res.status===200)
            alert("success")
        else 
            alert("something wrong")
    })
    // return JSON.stringify({
    //     partyName: partyName,
    //     reputaion: reputation,
    //     shopModifier:shopModifier,
    //     playerCharacters:partyMembers,
    //     playerCount:playerCount,
    //     averageLevel:averagePlayerLevel,
    //     dificulty:difficulty,
    //     scenarioLevel: scenarioLevel,
    //     scenarios:scenarios
    // });



}
window.addEventListener('DOMContentLoaded', function () {

    var button = document.getElementById("update-button")
    button.addEventListener('clcik', update)
})