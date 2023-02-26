var url="http://127.0.0.1:5000/jsondata";

//Create map object
  
var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3
  });

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

  
//    //marker size
// function markerSize(market_value) {
//     return Math.sqrt(market_value) * 50;
//   }

// get the Data from ApI

 
d3.json(url).then(function(response)
{
    console.log(response);
    
    
    for (var i=0; i< response.length; i++){

        var x = response[i];
        var color = "";

        if (x.league === "Ligue 1"){
            color= "yellow";
        }
        else if (x.league === "LaLiga"){
            color= "red";
        }
        else if (x.league === "Liga Portugal"){
            color= "orange";
        } 
        else if (x.league === "Premier League"){
            color= "black";
        }  
        else if (x.league === "Eredivisie"){
            color= "pink";
        }  
        else if (x.league === "Jupiler Pro League"){
            color= "green";
        }  
        else if (x.league === "Serie A"){
            color= "white";
        } 
        else if (x.league === "Bundesliga"){
            color= "green";
        } 
        else if (x.league === "Süper Lig"){
            color= "brown";
        } 
        else if (x.league === "Scottish Premiership"){
            color= "blue";
        } 
        else if (x.league === "Liga Profesional de Fútbol"){
            color= "purple";
        } 
        else if (x.league === "Campeonato Paulista - Série A1 - Grunddurchgang"){
            color= "gray";
        } 
        else if (x.league === "Premier Liga"){
            color= "white";
        } 
        var cordinateArry=[];
        
         
        cordinateArry.push(
            L.circle([x.lat,x.long],{
                              
                color: color,
                radius: Math.sqrt(x.market_value) * 4
            }).bindPopup(`<h1>${x.league}</h1> <h3> Market Value:${x.market_value}</h3><h3> Country:${x.country}</h3>`).addTo(myMap)  
        );
        
    }
    
    
    console.log(cordinateArry);
});
 
