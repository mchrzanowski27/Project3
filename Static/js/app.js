

function eventChange(event) {
    d3.json("/api/data").then(function (data) {

        let event = d3.select("#selDataset1").node().value;
        let dropdown2 = d3.select("#selDataset2")
        let actors1 = data.map(i => i.ACTOR1)
        uniqueSet2 = new Set(actors1)
        actors = Array.from(uniqueSet2)
        dropdown2.append("option").text("All").property("value", "All")
        actors.sort()

        if (event == 'All' || event == 'Any') {
            for (actor of actors) {
                dropdown2.append("option").text(actor).property("value", actor);
            }
        } else  {
            actors = data.filter(filterJawn => {
                filterJawn.event_type == event
            }).map( i=> i.ACTOR1)
            for (actor of actors) {
                dropdown2.append("option").text(actor).property("value", actor);
            }
        }         
    })

}

// let info;

function init() {

    let dropdown1 = d3.select("#selDataset1")
    // let dropdown2 = d3.select("#selDataset2")

    //read in the data for dropdown 1

    d3.json("/api/data").then(function (data) {
        //info = data;
        let event_types1 = data.map( i => i.EVENT_TYPE );
        uniqueSet = new Set(event_types1)
        event_types = Array.from(uniqueSet)
        // event_types.sort((a, b) => a.EVENT_TYPE.localCompare(b.EVENT_TYPE))
        console.log(event_types)
        event_types.sort()
        dropdown1.append("option").text("All").property("value", "All")
        dropdown1.append("option").text("Any").property("value", "Any")
        for (event_type of event_types) {
            // if(!dropdown1.option.value(event_type))
                dropdown1.append("option").text(event_type).property("value", event_type);
        }

        // dropdown2.append("option").text("--").property("value", "")
        // dropdown3.append("option").text("--").property("value", "")

    })

    d3.select('#selDataset1').property('value', 'All');
    // d3.select('#selDataset2').property('value', '');
    // d3.select('#selDataset3').property('value', '');
}

init()