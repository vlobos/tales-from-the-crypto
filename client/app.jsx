import React from "react";
import LineChart from "./lineChart.jsx";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      labels: [],
      prices: [],
    }

  }

  componentDidMount(){
    let start = "2013-09-01";
    let end = "2013-09-05";
    this.getCurrencyData(start,end);
  }

  getCurrencyData = (start, end) => {
    let url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`
    fetch(url)
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        let labels = [];
        let prices = []
        let entries = Object.entries(data.bpi)
        entries.forEach((entry)=>{
          labels.push(entry[0]);
          prices.push(entry[1])
        })
        this.setState({
            labels: labels,
            prices: prices
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  render () {
    return (
      <React.Fragment>
        <LineChart prices={this.state.prices} labels={this.state.labels}/>
      </React.Fragment>
    )
  }
}

export default App;
