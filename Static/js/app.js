d3.json("/api/data").then(function(data){
    console.log(data);

    console.log(data[0].ACTOR1)
    
    let actors = []
    for (row of data)
    //    actors = row.ACTOR1;
        console.log(row.ACTOR1);

    // console.log(actors);

    let trace1 = [
        {
            x: data.map(row=> row.ACTOR1),
            y: data.map(row=> row.FATALITIES),
            type: "bar"
        }
    ];

    let layout = {
        title: "Fatalities by Actor"
    };

    Plotly.newPlot("graph1", trace1, layout);
});


// function dateChange(date) {
//     d3.json("/api/data").then(function (data) {

//         let dropdown2 = d3.select("#selDataset2")
//         let datad = data.event_type
//         if (date == 'Any' || date == 'All') {

//             for (dd of datad) {
//                 dropdown2.append("option").text(event_type).property("value", event_type);
//             }
//         } else {
//             let dd_data = datad.filter(filterJawn => {
//                 filterJawn.event_date == date
//             })
//             for (dd of dd_data) {
//                 dropdown2.append("option").text(event_type).property("value", event_type);
//             }
//         }
//     })

// }

// function eventChange(event) {
//     d3.json("/api/data").then(function (data) {

//         let date = d3.select("#selDataset1").node().value;
//         let dropdown3 = d3.select("#selDataset3")
//         let datad = data.ACTOR1

//         if ((event == 'All' || event == 'Any') && (date == 'All' || date == 'Any')) {
//             for (dd of datad) {
//                 dropdown3.append("option").text(actor1).property("value", actor1);
//             }

//         } else if ((event == 'All' || event == 'Any') && date != 'All' && date != 'Any') {

//             let dd_data = data1.filter(filterJawn => {
//                 filterJawn.event_date == date
//             })
//             for (dd of dd_data) {
//                 dropdown3.append("option").text(actor).property("value", actor);
//             }
//         } else {
//             let dd_data = data1.filter(filterJawn => {
//                 filterJawn.event_date == date && filterJawn.EVENT_TYPE ==event
//             })
//             for (dd of dd_data) {
//                 dropdown3.append("option").text(actor).property("value", actor);
//             }
//         }
//     })

// }


function init() {

    let dropdown1 = d3.select("#selDataset1")
    // let dropdown2 = d3.select("#selDataset2")
    // let dropdown3 = d3.select("#selDataset3")

    //read in the data for dropdown 1
    d3.json("../api/data").then(function (data) {

        let event_dates = data.event_date;
        console.log(event_dates)
        for (event_date of event_dates) {
            dropdown1.append("option").text(event_date).property("value", event_date);
        }
        // dropdown1.append("option").text("All").property("value", "All")
        // dropdown1.append("option").text("Any").property("value", "Any")
        // dropdown1.append("option").text("--").property("value", "")
        // dropdown2.append("option").text("--").property("value", "")
        // dropdown3.append("option").text("--").property("value", "")

    })

    // d3.select('#selDataset1').property('value', 'All');
    // d3.select('#selDataset2').property('value', '');
    // d3.select('#selDataset3').property('value', '');
}

init()