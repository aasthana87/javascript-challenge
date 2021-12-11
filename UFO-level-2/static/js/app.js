// Ensure javascript is being uploaded to console
console.log("app.js loaded!")

// from data.js
var tableData = data;
console.log(tableData);

// Define table body
var tbody = d3.select("tbody");

var filterEntries = d3.select("#filter-btn");
filterEntries.on("click", function() {
    d3.event.preventDefault();

    var elementDateTime = d3.select("#datetime");
    var elementCity = d3.select("#city");
    var elementState = d3.select("#state");
    var elementCountry = d3.select("#country");
    var elementShape = d3.select("#shape");

    var valueDateTime = elementDateTime.property("value");
    var valueCity = elementCity.property("value");
    var valueState = elementState.property("value");
    var valueCountry = elementCountry.property("value");
    var valueShape = elementShape.property("value");

    if (valueDateTime != "") {
        tableData = tableData.filter(d => d.datetime === valueDateTime);
    }

    if (valueCity != "") {
        tableData = tableData.filter(d => d.city === valueCity);
    }

    if (valueState != "" ) {
        tableData = tableData.filter(d => d.state === valueState);
    }

    if (valueCountry != "") {
        tableData = tableData.filter(d => d.country === valueCountry);
    }

    if (valueShape != "") {
        tableData = tableData.filter(d => d.shape === valueShape);
    }

    console.log(tableData);
    renderTable();
});

var clearInput = d3.select("#reset-btn");
clearInput.on("click", function() {
    location.reload();
});

renderTable();

function renderTable() {
    tbody.html("");
    console.log(tableData);
    tableData.forEach(function(ufoSightings) {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key, value]) {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}


