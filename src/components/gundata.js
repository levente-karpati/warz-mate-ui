import * as React from 'react'
import axios from 'axios'

//news main styling
const newsMainStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
}
//news embedded container styling
const dataContainer = {
  width: '100%',
  height: '100%',
  overflowY: 'scroll'
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
    //use rss2json with google rss api for warzone news data
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
      <div style={newsMainStyles}>
        <div style={dataContainer}>
        {Object.keys(this.state.data).map((item , i) => (
            <li key={i}>
                {this.state.data[item].name}
            </li>
        ))}
        </div>
      </div>
    )
  }
}

export default Gundata;