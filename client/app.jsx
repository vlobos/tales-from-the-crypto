import React from "react";
import LineChart from "./lineChart.jsx";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      sampleData: {
        labels: ["M", "T", "W", "R", "F", "S", "S"],
        datasets: [{
          label: 'Dataset A',
          data: [12, 19, 3, 17, 28, 24, 7],
          fill: false,
          backgroundColor: "green",
          borderColor: "green",
          pointBackgroundColor: "green"
        }, {
          label: 'Dataset B',
          data: [30, 29, 5, 5, 20, 3, 10],
          fill: false,
          borderColor: "yellow",
          backgroundColor: "yellow",
          pointBackgroundColor: "yellow"
        }]
      }
    }
  }
  render () {
    return (
      <React.Fragment>
        <LineChart sampleData={this.state.sampleData}/>
      </React.Fragment>
    )
  }
}

export default App;
