import * as React from 'react'
import axios from 'axios'
import OnHover from './onhoveritem'

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
  width: '25%',
  height: "100%",
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center'
}
const gunHeaderStyling = {
  width: '25%',
  height: "100%",
  border: "1px solid black",
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center'
}

const searchBoxStyles = {
  width: '100%',
  height: '5%'
}
class Gundata extends React.Component  {
  //set default state
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      store: [],
      titleSorted: false,
      typeSorted: false,
      pickRatioSorted: false,
      kdRatioSorted: false
    };
  }

  handleChange = (event) => {
    var searchData = this.state.store.filter(o => o[Object.keys(o)[0]].name.toLowerCase().includes(event.target.value.toLowerCase()));
    this.setState(
      {
        data: [...searchData]
      }
    )
  }

  //api call using axios for rss feed
  componentDidMount() {
    //store this in self for access from axios call
    var self = this;
    //use backend for warzone guns data
    axios.get('http://localhost:3000/api/guns/all')
    .then(function (res) {
      //set component state to response data
      self.setState(
        {
          data: Object.entries(res.data).map((e) => ( { [e[0]]: e[1] } )),
          store: Object.entries(res.data).map((e) => ( { [e[0]]: e[1] } ))
        }
      );
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  //sort table items
  dataSort = (col) => {
    const newTableItems = this.state.data;
    switch (col) {
      case 0:
        //sort by title
        newTableItems.sort((a,b) => {
          var aName = a[Object.keys(a)[0]].name;
          var bName = b[Object.keys(b)[0]].name;
          if(this.state.titleSorted){
            this.setState({titleSorted: !this.state.titleSorted});
            return bName.localeCompare(aName);
          }
          else{
            this.setState({titleSorted: !this.state.titleSorted})
            return aName.localeCompare(bName);
          }
        });
        break;
      case 1:
        //sort by type
        //sort by title
        newTableItems.sort((a,b) => {
          var aType = a[Object.keys(a)[0]].type;
          var bType = b[Object.keys(b)[0]].type;
          if(this.state.typeSorted){
            this.setState({typeSorted: !this.state.typeSorted});
            return bType.localeCompare(aType);
          }
          else{
            this.setState({typeSorted: !this.state.typeSorted})
            return aType.localeCompare(bType);
          }
        });
        break;
      case 2:
        newTableItems.sort((a,b) => {
          var aPickRatio = a[Object.keys(a)[0]].pickRatio;
          var bPickRatio = b[Object.keys(b)[0]].pickRatio;
          if(this.state.pickRatioSorted){
            this.setState({pickRatioSorted: !this.state.pickRatioSorted});
            return bPickRatio - aPickRatio;
          }
          else{
            this.setState({pickRatioSorted: !this.state.pickRatioSorted})
            return aPickRatio - bPickRatio;
          }
        });
        break;
      case 3:
        newTableItems.sort((a,b) => {
          var aKdRatio = a[Object.keys(a)[0]].kdRatio;
          var bKdRatio = b[Object.keys(b)[0]].kdRatio;
          if(aKdRatio==="N/A") aKdRatio = 0;
          if(bKdRatio==="N/A") bKdRatio = 0;
          if(this.state.kdRatioSorted){
            this.setState({kdRatioSorted: !this.state.kdRatioSorted});
            return bKdRatio - aKdRatio;
          }
          else{
            this.setState({kdRatioSorted: !this.state.kdRatioSorted})
            return aKdRatio - bKdRatio;
          }
        });
        break;
      default:
        break;
    }
    this.setState({data: newTableItems });
  };

  //search table items
  dataSearch = (col) => {

  }

  //render html
  render() {
    return (
      <div style={gunsMainStyles}>
        <div style={dataContainer}>
          <input 
          placeholder={"Search for gun by name..."} 
          style={searchBoxStyles} 
          type={"text"}
          value={this.state.input}
          onChange={this.handleChange}></input>
        <li style={gunStyles}>
          <OnHover style={gunHeaderStyling} onClick={() => this.dataSort(0)}>
            Title
          </OnHover>
          <OnHover style={gunHeaderStyling} onClick={() => this.dataSort(1)}>
            Type
          </OnHover>
          <OnHover style={gunHeaderStyling} onClick={() => this.dataSort(2)}>
            PickRatio
          </OnHover>
          <OnHover style={gunHeaderStyling} onClick={() => this.dataSort(3)}>
            KD Ratio
          </OnHover>
        </li>
        {Object.keys(this.state.data).map((item , i) => (
            <li key={i} style={gunStyles}>
              <p style={gunPropertyStyling}>{this.state.data[i][Object.keys(this.state.data[i])[0]].name}</p>
              <p style={gunPropertyStyling}>{this.state.data[i][Object.keys(this.state.data[i])[0]].type}</p>
              <p style={gunPropertyStyling}>{this.state.data[i][Object.keys(this.state.data[i])[0]].pickRatio}%</p>
              <p style={gunPropertyStyling}>{this.state.data[i][Object.keys(this.state.data[i])[0]].kdRatio}</p>
            </li>
        ))}
        </div>
      </div>
    )
  }
}

export default Gundata;