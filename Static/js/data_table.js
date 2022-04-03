

var data = 
		
function optionChanged(date, event, actor) {
    d3.json("https://your_flas_kapp.com/data").then(function (data) {

    let table_data = data.csv
    let data_table = table_data.filter((sampleJawn) => sampleJawn.id == sample);


})
}

function tabulate(data, columns) {
	var table = d3.select('body').append('table')
	var thead = table.append('thead')
	var	tbody = table.append('tbody');

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
	      return {column: column, value: row[column]};
	    });
	  })
	  .enter()
	  .append('td')
	    .text(function (d) { return d.value; });

  return table;
}

// render the tables
tabulate(data, ['date', 'close']); // 2 column table
tabulate(data, ['date']); // table with only date column
tabulate(data, ['close']); // table with only close column

//JS file - Phoebe messing with dropdown ideas

function init() {

    let dropdown1 = d3.select("#selDataset1")
    let dropdown2 = d3.select("#selDataset2")
    let dropdown3 = d3.select("#selDataset3")

    //read in the data for dropdown 1
    d3.csv("data.csv", function(data){
    // d3.json("https://your_flas_kapp.com/data").then(function (data) {

        let dates = data.event_date;
        for (date of dates) {
            dropdown1.append("option").text(date).property("value", date);
        }
        dropdown1.append("option").text("All").property("All")
    })
    //read in the data for dropdown 2
    // d3.json("https://your_flas_kapp.com/data").then(function (data) {
    d3.csv("data.csv", function(data){

        let event_type = data.events;
        for ( event of events) {
            dropdown2.append("option").text(jawn).property("value", jawn);
        }
        dropdown1.append("option").text("All").property("All");
    })

    //read in the data for dropdown 3
    // d3.json("https://your_flas_kapp.com/data").then(function (data) {
    d3.csv("data.csv", function(data){
        let actors = data.actor1;
        for (actor of actors) {
            dropdown3.append("option").text(actor).property("value", actor);
        }
        dropdown1.append("option").text("All").property("All")
    }) 
    optionChanged("All", "All", "All");
}

init()