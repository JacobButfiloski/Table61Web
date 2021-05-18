var reservationList = [];
var globalID = -1;

//reservation constructor
Reservation = function(lastname, firstname, partysize, time)
{
    var newReso = new Object();
    globalID += 1;
    newResp.id = globalID;
    newReso.lastname = lastname;
    newReso.firstname = firstname;
    newReso.partysize = partysize;
    newReso.time = time;
    //newReso.date = date;

    reservationList.push(newReso);
    return newReso;
}

//function to return reso by id
findResoById = function(id)
{
    for(var i = 0; i < reservationList.length; i++)
    {
        if(reservationList[i].id = id)
        {
            return reservationList[i];
        }
    }
}

function SubmitClicked()
{
    var newReso = Reservation(
        document.getElementById("lastName").value,
        document.getElementById("firstName").value,
        document.getElementById("partySize").value,
        document.getElementById("partyTime").value,
        //document.getElementById("partyDate").value
    )

    console.log(newReso);
}