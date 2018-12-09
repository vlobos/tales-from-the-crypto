import React from "react";
import LineChart from "./lineChart.jsx";
import DatePicker from "./datePicker.jsx";
import { runInThisContext } from "vm";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      labels: [],
      prices: [],
      dateValid: true
    }

  }

  componentDidMount(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let year = today.getFullYear()
    let lastYear = year - 1
    if(dd<10) {
        dd = '0'+dd
    } 
    if(mm<10) {
        mm = '0'+mm
    } 
    let end = year + "-" + mm + "-" + dd;
    let start = lastYear + "-" + mm + "-" + dd
    this.getCurrencyData(start,end);
  }

  getCurrencyData = (start, end) => {
    //min 2010-07-17
    //REAL URL:
    let url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`
    //TEMP URL: 
   //let url = "https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05"
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

  handleSubmitDates = () => {
    console.log("SUBMIT")
    let inputStartDate = document.getElementById("date__start").value;
    let inputEndDate = document.getElementById("date__end").value;
    let sDate = Date.parse(inputStartDate);
    let eDate = Date.parse(inputEndDate);
    console.log("start: ", sDate)
    console.log("end: ", eDate)

    if(sDate > eDate){
      this.setState({
        dateValid: false
      })
    } else {
      this.setState({
        dateValid: true
      })
      this.getCurrencyData(inputStartDate, inputEndDate)
    }
  }


  render () {
    if(this.state.dateValid===false){
      return (
        <div>
          <LineChart prices={this.state.prices} labels={this.state.labels}/>
          <div>INVALID DATE!</div>
          <DatePicker handleSubmitDates={this.handleSubmitDates}/>
      </div>
      )
    } else if (this.state.dateValid===true){
      return (
        <div>
          <LineChart prices={this.state.prices} labels={this.state.labels}/>
          <DatePicker handleSubmitDates={this.handleSubmitDates}/>
        </div>
      )
    }
  }
}

export default App;
