const totalSumsByLeague = [];
const totalGoalsByLeague = [];

let dropdownOption = 'Market Value'
// other option will be goals scored

function optionChanged () {
    let dropdownOption = document.getElementById('List').value
    if(dropdownOption === 'Market Value') {
      renderGraph(totalSumsByLeague.map(e => e.totalMarketValue))
    } else {
      renderGraph(totalGoalsByLeague.map(e => e.totalgf))
    }
    // renderGraph()
}

function renderGraph(value) {
  const ctx = document.getElementById("myChart");
  let chartStatus = Chart.getChart('myChart');
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }

  console.log("rendering graph!");
  console.log(totalSumsByLeague);
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: totalSumsByLeague.map((e) => e.league),
      datasets: [
        {
          label: "Market Value or Goals Scored",
          data: value,
          borderWidth: 1,
        },
      ],
    },
    options: {
      title : {
        display : true,
        text : 'Major Soccer Leagues by Market Value and Goals Scored'
      }

    },
  });
}

function init() {
  // Fetch the JSON data
  d3.json("http://127.0.0.1:5000/jsondata").then((data) => {
    data.forEach((item) => {
      // check if the league exists in our array
      // league does not exist
      const leagueDoesNotExists =
        totalSumsByLeague.filter((e) => e.league === item.league).length === 0;

      if (leagueDoesNotExists) {
        // add new league to the array
        totalSumsByLeague.push({
          league: item.league,
          totalMarketValue: item.market_value,
          // totalGoalsScored : item.gf
        });
        totalGoalsByLeague.push({
          league: item.league,
          totalgf: item.gf,
        });
      } else {
        // the league exists in our array, therefore update the values
        const index = totalSumsByLeague.findIndex(
          (e) => e.league === item.league
        );
        totalSumsByLeague[index].totalMarketValue += item.market_value;
        totalGoalsByLeague[index].totalgf += item.gf;
        //    totalSumsByLeague[index].totalGoalsScored += item.gf
      }
    });
    console.log("data is done updating!");
    console.log(totalSumsByLeague);
    console.log(totalGoalsByLeague);
    
    optionChanged();
    // renderGraph();
  });
}

init();

// // --------------------------------
// // [--------- OLD METHOD ---------]
// // --------------------------------
// // storing league names - #1 group by league
// const leagues = []
// data.forEach(item => {
//     if(!leagues.includes(item.league)){
//         leagues.push(item.league)
//     }
// })
// // iterate on each league and get the sums
// // #2 sum of market_value
// // #3 sum of goals scored
// leagues.forEach(league => {
//     // store running total of current league we are iterating through
//     let totalMarketValue = 0
//     let totalGoalScored = 0
//     data.forEach(el => {
//         // we want to check if the league is the one we want
//         if(el.league === league) {
//             totalMarketValue += el.market_value
//             totalGoalScored += el.gf
//         }
//     })
//     console.log(`${league} - ${totalMarketValue}`)
//     console.log(`${league} - ${totalGoalScored}`)
// })

// d3.json("http://127.0.0.1:5000/jsondata").then(data => {
//     data.forEach(item => {
//         totalMarketValue += item.market_value
//         totalGoalScored += item.gf
//     })
//     console.log({totalMarketValue, totalGoalScored})
// })

// let width = 450
//     height = 450
//     margin = 40

// let radius = Math.min(width, height) / 2 - margin
// var svg = d3.select("#my_dataviz")
//             .append("svg")
//             .attr("width", width)
//             .attr("height", height)
//             .append("g")
//             .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// console.log(url)

// d3.json(url).then(function(data) {
//     console.log(data);
// });
