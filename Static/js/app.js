//JS file - Phoebe messing with dropdown ideas


function init() {

    let dropdown1 = d3.select("#selDataset1")
    let dropdown2 = d3.select("#selDataset2")
    let dropdown3 = d3.select("#selDataset3")

    //read in the data for dropdown 1
    d3.json("https://your_flas_kapp.com/data").then(function (data) {

        let dates = data.dates;

        for (date of dates) {
            dropdown1.append("option").text(name).property("value", name);
        }
        dropdown1.append("option").text("All").property("All")
    })

    //read in the data for dropdown 1
    d3.json("https://your_flas_kapp.com/data").then(function (data) {

        let events = data.events;

        for (event of events) {
            dropdown.append("option").text(name).property("value", name);
        }

    })

    //read in the data for dropdown 1
    d3.json("https://your_flas_kapp.com/data").then(function (data) {

        let actors = data.actors;

        for (actor of actors) {
            dropdown.append("option").text(name).property("value", name);
        }

    })

    optionChanged(allDates, allEvents, allActors);
    
}

init()