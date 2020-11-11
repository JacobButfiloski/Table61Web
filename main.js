var lastClickedIndex = 0; //Store Index of Last Clicked Tables
var partyNames = [];
var partySizes = [];
var timesSat = [];

let state = 'default';

window.addEventListener('load', function () {
    init();
  })

function init()
{
    console.log("test");
}

//Handler When Edit Reservations is Clicked
var toggleEditResos = false;
function editResosClicked()
{
    toggleEditResos = !toggleEditResos;

    if(toggleEditResos == true)
    {
        document.getElementById("visualDiv").style.display = 'none';
        document.getElementById("reservationCreation").style.display = 'block';
        document.getElementById("resoList").style.display = 'none';
    } else {
        document.getElementById("visualDiv").style.display = 'block';
        document.getElementById("reservationCreation").style.display = 'none';
        document.getElementById("resoList").style.display = 'none';
    }
}

var toggleResoList = true;
function viewResoList()
{
    toggleResoList = !toggleResoList;

    if(toggleResoList == true)
    {
        document.getElementById("visualDiv").style.display = 'block';
        document.getElementById("reservationCreation").style.display = 'none';
        document.getElementById("resoList").style.display = 'none';
    } else {
        document.getElementById("visualDiv").style.display = 'none';
        document.getElementById("reservationCreation").style.display = 'none';
        document.getElementById("resoList").style.display = 'block';
    }
    
    var resos = "";
    for(var i = 0; i < reservationList.length; i++)
    {
        resos +=  "{" + reservationList[i].time + "} [" + reservationList[i].partysize + "] " + reservationList[i].lastname + " " + reservationList[i].firstname + "<br>";
    }
    document.getElementById("resoP").innerHTML = resos;
}

//Handler When Table is Clicked
function buttonHandler(index)
{
    console.log("selected " + index);
    lastClickedIndex = index;
    var list = returnTableList();
    console.log(list);
    for(var i = 0; i < list.length; i++)
    {
        list[i].style.border ='2px solid darkgray';
    }
    returnButtonFromIndex(index).style.border='2px solid red';
    var totalDif = 0;
    if(timesSat[lastClickedIndex] != null)
    {
        console.log(timesSat[lastClickedIndex]);
        var timeDifHour = timesSat[lastClickedIndex][0] * 60;
        var timeDifMin = timesSat[lastClickedIndex][1];
        var timeDif = timeDifHour + timeDifMin;

        var dateNow = new Date();
        var timeHour = dateNow.getHours() * 60;
        var timeMin = dateNow.getMinutes();
        var time = timeHour + timeMin;

        totalDif = time - timeDif;
    }
    
    document.getElementById("nameInput").value = (partyNames[lastClickedIndex] != null) ? partyNames[lastClickedIndex] : "";
    document.getElementById("inputPartySize").value = (partySizes[lastClickedIndex] != null) ? partySizes[lastClickedIndex] : 0;
    document.getElementById("timeSat").innerHTML = "Table was sat " + totalDif + " minutes ago."
}

//Handler when Seat is Clicked
function inputDataButtonHandler()
{
    var val = document.getElementById("nameInput").value;
    var size = document.getElementById("inputPartySize").value;
    var tempDate = new Date();
    var timeSat = [tempDate.getHours(), tempDate.getMinutes()];
    partyNames[lastClickedIndex] = val;
    partySizes[lastClickedIndex] = size;
    timesSat[lastClickedIndex] = timeSat;
    returnButtonFromLastClicked().value = lastClickedIndex + " " + val + "[" + size + "]";
}

//Handler When Clear Button is Clicked
function clearButtonHandler()
{
    returnButtonFromLastClicked().value = lastClickedIndex;

    //Null global variables
    partyNames[lastClickedIndex] = null;
    partySizes[lastClickedIndex] = null;
    timesSat[lastClickedIndex] = null;

    document.getElementById("nameInput").value = "";
    document.getElementById("inputPartySize").value = 0;
    document.getElementById("timeSat").innerHTML = "Table was sat 0 minutes ago."
}

//Returns Button From HTML Doc with Table Index
returnButtonFromLastClicked = function()
{
    return document.getElementById("table" + lastClickedIndex);
}

//Returns Button From Table Index
returnButtonFromIndex = function(index)
{
    return document.getElementById("table" + index);
}
//return a list of all tables for easy iteration later
returnTableList = function()
{
    var val = [];
    val.push(document.getElementById("table1"));
    val.push(document.getElementById("table2"));
    val.push(document.getElementById("table3"));
    val.push(document.getElementById("table4"));
    val.push(document.getElementById("table12"));
    val.push(document.getElementById("table13"));
    val.push(document.getElementById("table14"));
    val.push(document.getElementById("table22"));
    val.push(document.getElementById("table23"));
    val.push(document.getElementById("table24"));
    val.push(document.getElementById("table21"));
    val.push(document.getElementById("table32"));
    val.push(document.getElementById("table33"));
    val.push(document.getElementById("table34"));
    val.push(document.getElementById("table42"));
    val.push(document.getElementById("table43"));
    val.push(document.getElementById("table44"));
    val.push(document.getElementById("table45"));
    val.push(document.getElementById("table52"));
    val.push(document.getElementById("table53"));
    val.push(document.getElementById("table54"));
    val.push(document.getElementById("table55"));
    val.push(document.getElementById("table61"));
    return val;
}