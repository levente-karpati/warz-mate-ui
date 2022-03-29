import * as React from 'react'
import axios from 'axios'

//guns main styling
const gunsMainStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
}
//guns embedded container styling
const dataContainer = {
  width: '100%',
  height: '100%',
  overflowY: 'scroll'
}
//gun item styling
const gunStyles = {
  width: '100%',
  height: '10%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black'
}
const gunPropertyStyling = {
  width: '25%'
}
class Gundata extends React.Component  {
  //set default state
  constructor(props) {
    super(props);
    this.state = { 
      data: [] 
    };
  }
  //api call using axios for rss feed
  componentDidMount() {
    //store this in self for access from axios call
    var self = this;
    //use backend for warzone guns data
    axios.get('http://localhost:3000/api/guns/all')
    .then(function (res) {
      //set component state to response data
      self.setState({data: res.data});
      console.log(self.state.data);
    })
    .catch(function (err) {
      console.log(err);
    });
  }
  //render html
  render() {
    return (
      <div style={gunsMainStyles}>
        <div style={dataContainer}>
        <li style={gunStyles}>
          <p style={gunPropertyStyling}>Title</p> 
          <p style={gunPropertyStyling}>Type</p> 
          <p style={gunPropertyStyling}>Pick Ratio</p> 
          <p style={gunPropertyStyling}>KD Ratio</p> 
        </li>
        {Object.keys(this.state.data).map((item , i) => (
            <li key={i} style={gunStyles}>
              <p style={gunPropertyStyling}>{this.state.data[item].name}</p>
              <p style={gunPropertyStyling}>{this.state.data[item].type}</p>
              <p style={gunPropertyStyling}>{this.state.data[item].pickRatio}%</p>
              <p style={gunPropertyStyling}>{this.state.data[item].kdRatio}%</p>
            </li>
        ))}
        </div>
      </div>
    )
  }
}

export default Gundata;