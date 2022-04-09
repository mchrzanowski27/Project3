function charts (actor, type) {
    d3.json("/api/data").then(function(data){
        console.log(data);

        // let actor = "Military Forces of Russia (2000-)";
        // let actor = "Military Forces of Ukraine (2019-)";
        // let type = "Explosions";

        
        let filteredActor = data.filter(row => row.ACTOR1 === actor);
        console.log(filteredActor);

        if (type = "any") {
            filteredEvent = filteredActor;
            console.log(filteredEvent);
        }

        else {
            filteredEvent = filteredActor.filter(row => row.EVENT_TYPE === type);
            console.log(filteredEvent);
        };

        let fatalities = filteredEvent.map(row=> row.FATALITIES);
        console.log(fatalities);

        let sub_type = filteredEvent.map(row=> row.SUB_EVENT_TYPE);
        console.log(sub_type);

        // let sum = filteredEvent.reduce((sum, current)=>sum + current.FATALITIES, 0);
        // console.log(sum);

        //Bar graph of fatalities by actor
        let trace1 = [
            {
                // x: sub_type,
                // y: fatalities,
                // type: "bar",
                // hoverinfo:"skip",
                values: fatalities,
                labels: sub_type,
                type: "pie",
                
            }
        ];
            
        let layout = {
            title: "Fatalities by Actor",
            // yaxis: {
            //     title: "Fatalities",
            height: 600,
            width: 700,
        };

        Plotly.newPlot("graph1", trace1, layout);


        let trace2 = [
            {
                x: filteredEvent.map(row=> row.EVENT_DATE),
                y: filteredEvent.map(row=> row.FATALITIES),
                type: "bar",
                transforms: [{
                    type: "groupby",
                    groups: filteredEvent.map(row => row.SUB_EVENT_TYPE),
                }],
            }
        ];

        let layout2 = {
            title: "Fatalities by Date",
            yaxis: {
                title: "Fatalities",
            }
        };

        Plotly.newPlot("graph2", trace2, layout2);

    });
};

charts("Military Forces of Russia (2000-)", "Any");

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