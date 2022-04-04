
function dateChange(date) {
    // d3.json("https://your_flas_kapp.com/data").then(function (data) {
    d3.csv("./Static/Project_3_Test_to_SQL.csv", function (data) {

        let dropdown2 = d3.select("#selDataset2")
        let dropdown3 = d3.select("#selDataset3")

        if (date == 'All' || date == 'Any') {
            d3.select('#selDataset2').property('value', 'All');
            d3.select('#selDataset3').property('value', 'All');
        } else {

            let data1 = Project_3_Test_to_SQL.csv
            let dd_data = table_data.filter(filterJawn => {filterJawn.event_date == date 
            })
            for(dd of dd_data){
                dropdown2.append("option").text(event_type).property("value", event_type);
                dropdown3.append("option").text(actor).property("value", actor);
            }
        }
    })

}

// let data_imp = optionChanged()

function tabulate(data, columns) {
    var table = d3.select('body').append('table')
    var thead = table.append('thead')
    var tbody = table.append('tbody');

    // append the header row
    thead.append('tr')
        .selectAll('th')
        .data(columns).enter()
        .append('th')
        .text(function (column) { return column; });

    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

    // create a cell in each row for each column
    var cells = rows.selectAll('td')
        .data(function (row) {
            return columns.map(function (column) {
                return { column: column, value: row[column] };
            });
        })
        .enter()
        .append('td')
        .text(function (d) { return d.value; });

    return table;
}

function renderTables(data_imp) {
    d3.csv("Project_3_Test_to_SQL.csv", function (error, data) {
        let headerNames = d3.keys(data[0])
        let headerList = []

        for (headerName of headerNames) {
            headerList.append(headerName)
        }

        tabulate(data_imp, [headerList]);

    })
}

// render the tables


//JS file - Phoebe messing with dropdown ideas

function init() {

    let dropdown1 = d3.select("#selDataset1")
    let dropdown2 = d3.select("#selDataset2")
    let dropdown3 = d3.select("#selDataset3")

    //read in the data for dropdown 1
    d3.csv("./Static/Project_3_Test_to_SQL.csv", function (data) {
        // d3.json("https://your_flas_kapp.com/data").then(function (data) {

        let dates = data.EVENT_DATE;
        for (date of dates) {
            dropdown1.append("option").text(date).property("value", date);
        }
        dropdown1.append("option").text("All").property("All")
        dropdown2.append("option").text("Any").property("Any")

    })
    //read in the data for dropdown 2
    // d3.json("https://your_flas_kapp.com/data").then(function (data) {
    d3.csv("./Static/Project_3_Test_to_SQL.csv", function (data) {

        let event_types = data.EVENT_TYPE;
        for (event_type of event_types) {
            dropdown2.append("option").text(event_type).property("value", event_type);
        }
        dropdown2.append("option").text("All").property("All")
        dropdown2.append("option").text("Any").property("Any")
    })

    //read in the data for dropdown 3
    // d3.json("https://your_flas_kapp.com/data").then(function (data) {
    d3.csv("./Static/Project_3_Test_to_SQL.csv", function (data) {
        let actors = data.ACTOR1;
        for (actor of actors) {
            dropdown3.append("option").text(actor).property("value", actor);
        }
        dropdown3.append("option").text("All").property("All")
        dropdown2.append("option").text("Any").property("Any")
    })
    d3.select('#selDataset1').property('value', 'All');
    d3.select('#selDataset2').property('value', 'All');
    d3.select('#selDataset3').property('value', 'All');
}

init()