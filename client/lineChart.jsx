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
    Chart.defaults.global.defaultFontFamily = "Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", "sans-serif";
    Chart.defaults.global.defaultFontColor =  "rgb(255, 255, 255)";

    new Chart(context, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "BPI",
          data: prices,
          fill: false,
          borderColor:  "rgb(255, 255, 255)",
          borderWidth: 1,
          pointRadius: 1,
          backgroundColor:  "rgb(255, 255, 255)",
          pointBackgroundColor:  "rgb(255, 255, 255)",
        }]
      },
      options: {
        title: {
          display: true,
          text: "Value of Bitcoin",
          fontSize: 28,
          fontStyle: "normal",
          fontColor: "RGB(219,167,106)"
        },
        legend: {
          position: "top",
          labels: {
            fontColor: "RGB(219,167,106)"
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
                fontSize: 18,
                fontColor: "RGB(219,167,106)"
              }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Time",
              fontSize: 18,
              fontColor: "RGB(219,167,106)"
            }
        }]
        }
      }
    } )
  }

  render(){
    return (
      <section id="main__chart">
        <canvas id="lineChart" ref="lineChart"></canvas>
      </section>
    )
  }
}

export default lineChart;

