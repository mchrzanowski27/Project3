

function eventChange(event) {
    d3.json("/api/data").then(function (data) {
        
        let event = d3.select("#selDataset1").node().value;
        d3.selectAll("#selDataset2 > *").remove()
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
            data2 = data.filter((filterJawn) =>  filterJawn.event_type = event)
            actors2 = data2.map( i => i.ACTOR1)
            uniqueSet3 = new Set(actors2)
            actors3 = Array.from(uniqueSet3)
            
            actors3.sort()
            for (actor of actors3) {
                dropdown2.append("option").text(actor).property("value", actor);
            }
        }         
    })

}

function actorChange(actor){

    let event = d3.select("#selDataset1").node().value;
    let actor = d3.select("#selDataset2").node().value;

    charts(actor,event)

}

// let info;

function init() {

    let dropdown1 = d3.select("#selDataset1")

    //read in the data for dropdown 1

    d3.json("/api/data").then(function (data) {
        //info = data;
        let event_types1 = data.map( i => i.EVENT_TYPE );
        uniqueSet = new Set(event_types1)
        event_types = Array.from(uniqueSet)

        console.log(event_types)
        event_types.sort()
        dropdown1.append("option").text("All").property("value", "All")
        dropdown1.append("option").text("Any").property("value", "Any")
        for (event_type of event_types) {
            // if(!dropdown1.option.value(event_type))
                dropdown1.append("option").text(event_type).property("value", event_type);
        }

    })

    d3.select('#selDataset1').property('value', 'All');
}

init()