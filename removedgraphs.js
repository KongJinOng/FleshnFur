

// Functions for pushing CSV data into arrays to make the plots


//Stacked bar graph for different types of prosecution for each TRC Country. Never used in the final article.
// function TrcProData(allRows) {
//   // console.log(allRows);
//   let a = [], b = [], c = [], d = [], e = [], f = []; //make variables to store the arrays needed to make the trace 

//   for (let i = 0; i < allRows.length; i++) { //iterate over all rows of data
//       let row = allRows[i];
//       a.push(row['Country']);//push data into a
//       b.push(row['Incidents']);
//       c.push(row['Arrested']);
//       d.push(row['Charged']);
//       e.push(row['Fined']);
//       f.push(row['Jailed']);//push data into b
//     }
//     makeTrcProPlot(a, b, c, d, e, f);//pass array into function that makes graph
    
    
// };

//STACKED BAR GRAPH FOR COUNTRY PROSECUTIONS - Not in the article
// function makeTrcProPlot(a,b,c,d,e,f){
  
//   let trace1 = {
//       x: a,
//       y: b,
//       name: 'Incidents',
//       type: 'bar',
//       text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
//       textposition: 'auto'
//     };
      

//   let trace2 = 
//       {
//           x: a,
//           y: c,
//           name: 'Arrested',
//           type: 'bar',
//           text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
//           textposition: 'auto',
          
//         };
      
  

//   let trace3 = 
//       {
//           x: a,
//           y: d,
//           name: 'Charged',
//           type: 'bar',
//           text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
//           textposition: 'auto'
//         };
      
  

//   let trace4 =
//       {
//           x: a,
//           y: e,
//           name: 'Fined',
//           type: 'bar',
//           text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
//           textposition: 'auto'
//         };

//   let trace5 =
//       {
//           x: a,
//           y: f,
//           name: 'Jailed',
//           type: 'bar',
//           text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
//           textposition: 'auto'
//         };

// var data = [trace1,trace2,trace3,trace4,trace5];

// var layout = {
//   xaxis: {title: 'X axis'},
//   yaxis: {title: 'Y axis'},
//   barmode: 'relative',
//   title: 'Prosecution Type',
//   paper_bgcolor: 'black',
//   plot_bgcolor: 'black',
//   width: 1500
// };

// Plotly.newPlot(TrcPro, data, layout);

// }

//trc population bar graph - not used in the article
// function makeTrcPopPlot(x, y) {
//   let traces = [
//       {
//         x: x,
//         y: y,      
//         type: "bar",
//         order:'ascending',
//         orientation: 'h'
//       }]
//   ;

//   var layout = {
//       title: 'Distribution of Tiger Population Amongst TRC Countries',
//       paper_bgcolor: 'black',
//       plot_bgcolor: 'black',
//       titlefont: {
//           size: 8,
//           color: 'rgb(107, 107, 107)',
//       },
//   };

//   Plotly.newPlot(TrcPopPlot, traces, layout);
// }