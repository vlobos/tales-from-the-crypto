import React from "react";
import Chart from "chart.js";
import ReactDOM from "react-dom";

class lineChart extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.createChart(this.props.sampleData)
  }
  createChart = (sampleData) => {
    let context = ReactDOM.findDOMNode(this.refs.lineChart).getContext("2d");

    Chart.defaults.global.defaultFontFamily = "Trebuchet MS"
    Chart.defaults.global.defaultFontColor = "black"
    new Chart(context, {
      type: 'line',
      data: sampleData,
      options: {
        title: {
          display: true,
          text: "Crytocurrency",
          fontSize: 24
        },
        legend: {
          position: "left",
          labels: {
            fontColor: "black"
          }
        }
      }
    } )
  }

  render(){
    return (
      <React.Fragment>
        <canvas id="lineChart" ref="lineChart"></canvas>
      </React.Fragment>
    )
  }
}

export default lineChart;