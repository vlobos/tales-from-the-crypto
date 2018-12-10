import React from "react";

class DatePicker extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    let yDate = new Date();
    yDate.setDate(yDate.getDate()-1)
    let dd = yDate.getDate();
    let mm = yDate.getMonth()+1; //January is 0!
    let year = yDate.getFullYear()
    if(dd<10) {
      dd = '0'+dd
    } 
    if(mm<10) {
        mm = '0'+mm
    } 

    let tDate = new Date();
    let todayDay = tDate.getDate();
    let todayMonth= tDate.getMonth()+1; //January is 0!
    let todayYear = tDate.getFullYear()
    if(todayDay<10) {
        todayDay = '0'+todayDay
    } 
    if(todayMonth<10) {
        todayMonth = '0'+todayMonth
    } 

    let yesterday = year+"-"+mm+"-"+dd
    let today = todayYear+"-"+todayMonth+"-"+todayDay

    return (
      <section id="main__date">
        <div className="date__col date__div">
          <label className="date__label">Start date:</label>
          <input type="date" id="date__start" min="2010-07-17" max={yesterday}></input>
        </div>
        <div className="date__col date__div">
          <label className="date__label">End date:</label>
          <input type="date" id="date__end"  min="2010-07-17" max={today}></input>
        </div>
        <div className="date__col date__div">
          <button onClick={this.props.handleSubmitDates}>Get Data</button>
        </div>
      </section>
    )
  }
}
export default DatePicker;