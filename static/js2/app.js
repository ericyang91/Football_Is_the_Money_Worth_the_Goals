console.log("app.js")
// Fetch the JSON data and console log it
let url = "http://127.0.0.1:5000/jsondata";
d3.json(url).then(function(data) {
    console.log(data);
});
function init(){
    var dropdown = d3.select('#selDataset');
    d3.json(url).then(function (data){
        leagues=[]
        for (var i=0; i<data.length; i++) {
            leagues.push(data[i].league);
        }
        uniqueleagues = [...new Set(leagues)];
        console.log(uniqueleagues);

        uniqueleagues.sort();
        
        dropdown
            .append("option")
            .text("Select a league")
            .property("value", "");


        for (var a=0;a<uniqueleagues.length;a++) {
            dropdown.append('option').text(uniqueleagues[a]).property('value',uniqueleagues[a]);
        }
        let first = uniqueleagues[0];
        plot1(first);
    })
};

function optionChanged(option){
    d3.json(url).then(function(data){
        // console.log("optionChanged")
        // console.log(data)

        var resultArray = data.filter(sampleObj => sampleObj.league == option);
        var result = resultArray[0];
        console.log("resultArray")
        console.log(resultArray)

        var PANEL = d3.select("#sample-metadata");
        PANEL.html("");

        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
          });
      
    })

    plot1(option)
}

function plot1(league) {
    d3.json(url).then(function(data){
        var text=[];
        var x = [];
        var y = [];
        var size=[];
        var bblleague=[];
        for (var j =0; j<data.length;j++) {
            if (data[j].league == league) {

                text.push(data[j].team);
                x.push(data[j].market_value);
                size.push(data[j].market_value/10000000);
                bblleague.push(data[j].league);
                y.push(data[j].pts_per_match);
            }
            else {
                text.push(data[j].team);
                x.push(data[j].market_value);
                size.push(data[j].market_value/10000000);
                bblleague.push(data[j].league);
                y.push(data[j].pts_per_match);
            }
        }

        var bbltrace={
            x:x,
            y:y,
            text:text,
            mode:'markers',
            marker:{size:size,color:bblleague,colorscale: "Earth"}
        };

        var bbllayout={
            title:'Value vs Performance'
        };
        Plotly.newPlot('bubble',[bbltrace],bbllayout);
    })
};

plot1();
init();
