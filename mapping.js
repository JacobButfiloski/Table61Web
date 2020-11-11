var leftSideTables = [];
var rightSideTables = [];
var masterTableList = [];
generateTables();

newTable = function(id, leftSide, maxSettings)
{
    var table;
    table.id = id;
    table.leftSide = leftSide;
    table.maxSettings = maxSettings;

    if(leftSide === true)
    {
        leftSideTables.push(table);
    } else {
        rightSideTables.push(table);
    }

    return table;
}

function generateTables() {
    masterTableList.push(newTable(1, false, 4));
    masterTableList.push(newTable(2, false, 4));
    masterTableList.push(newTable(3, false, 4));
    masterTableList.push(newTable(4, false, 4));
    masterTableList.push(newTable(12, false, 4));
    masterTableList.push(newTable(13, false, 4));
    masterTableList.push(newTable(14, false, 4));
    masterTableList.push(newTable(22, false, 4));
    masterTableList.push(newTable(23, false, 4));
    masterTableList.push(newTable(24, false, 2));
    masterTableList.push(newTable(21, false, 8));

    masterTableList.push(newTable(32, true, 2));
    masterTableList.push(newTable(33, true, 2));
    masterTableList.push(newTable(34, true, 2));
    masterTableList.push(newTable(42, true, 4));
    masterTableList.push(newTable(43, true, 4));
    masterTableList.push(newTable(44, true, 4));
    masterTableList.push(newTable(45, true, 6));
    masterTableList.push(newTable(52, true, 6));
    masterTableList.push(newTable(53, true, 6));
    masterTableList.push(newTable(54, true, 6));
    masterTableList.push(newTable(55, true, 4));
    masterTableList.push(newTable(61, true, 8));
}

function mapTables() {
    for(var i = 0; i < masterTableList.length; i++)
    {
        
    }
}