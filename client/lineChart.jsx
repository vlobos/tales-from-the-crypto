import React from "react";
import Chart from "chart.js";
import ReactDOM from "react-dom";

class lineChart extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidUpdate(prevProps){
    this.createChart(this.props.prices,this.props.labels)
  }
  
  createChart = (prices,labels) => {
    let context = ReactDOM.findDOMNode(this.refs.lineChart).getContext("2d");
    Chart.defaults.global.defaultFontFamily = "Trebuchet MS"
    Chart.defaults.global.defaultFontColor = "pink"

    new Chart(context, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "BPI",
          data: prices,
          fill: false,
          borderColor: "pink",
          borderWidth: 1,
          pointRadius: 1,
          backgroundColor: "pink",
          pointBackgroundColor: "pink",
        }]
      },
      options: {
        title: {
          display: true,
          text: "Value of Bitcoin",
          fontSize: 24
        },
        legend: {
          position: "left",
          labels: {
            fontColor: "pink"
          }
        },
        scales: {
          yAxes: [{
              ticks: {
                  // Include a dollar sign in the ticks
                  callback: function(value, index, values) {
                      return '$' + value;
                  }
              },
              scaleLabel: {
                display: true,
                labelString: "Value in USD",
                fontSize: 18
              }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Time",
              fontSize: 18
            }
        }]
        }
      }
    } )
  }

  render(){
    console.log(this.props, "PROPS")
    return (
      <React.Fragment>
        <canvas id="lineChart" ref="lineChart"></canvas>
      </React.Fragment>
    )
  }
}

export default lineChart;

