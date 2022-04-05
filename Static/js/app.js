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

//JS file - Phoebe messing with dropdown ideas

// function init() {

//     let dropdown1 = d3.select("#selDataset1")
//     let dropdown2 = d3.select("#selDataset2")
//     let dropdown3 = d3.select("#selDataset3")

//     //read in the data for dropdown 1
//     d3.json("https://your_flas_kapp.com/data").then(function (data) {

//         let dates = data.dates;

//         for (date of dates) {
//             dropdown1.append("option").text(name).property("value", name);
//         }
//         dropdown1.append("option").text("All").property("All")
//     })

//     //read in the data for dropdown 1
//     d3.json("https://your_flas_kapp.com/data").then(function (data) {

//         let events = data.events;

//         for (event of events) {
//             dropdown.append("option").text(name).property("value", name);
//         }

//     })

//     //read in the data for dropdown 1
//     d3.json("https://your_flas_kapp.com/data").then(function (data) {

//         let actors = data.actors;

//         for (actor of actors) {
//             dropdown.append("option").text(name).property("value", name);
//         }

//     })

//     optionChanged(allDates, allEvents, allActors);
    
// }

// init()