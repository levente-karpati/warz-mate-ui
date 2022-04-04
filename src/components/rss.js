import * as React from 'react'
import axios from 'axios'
import OnHover from './onhoveritem'

//news main styling
const newsMainStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
}
//news embedded container styling
const rssContainer = {
  width: '100%',
  height: '100%',
  overflowY: 'scroll'
}

const newsStyling = {
  width: '100%',
  height: '10%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  border: '1px solid black'
}

//news title styling
const newsTitleStyling = {
  width: '70%',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'black'
}

//news date styling
const newsDateStyling = {
  width: '30%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'black'
}

const newsHeaderTitleStyling = {
  width: '70%',
  height: "100%",
  border: "1px solid black",
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center'
}

const newsHeaderDateStyling = {
  width: '30%',
  height: "100%",
  border: "1px solid black",
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center'
}

class Rss extends React.Component  {
  //set default state
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      titleSorted: false,
      dateSorted: false
    };
  }
  //api call using axios for rss feed
  componentDidMount() {
    //store this in self for access from axios call
    var self = this;
    //use rss2json with google rss api for warzone news data
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Frss%2Fsearch%3Fq%3Dcall%2Bof%2Bduty%2Bwarzone%26hl%3Den-GB%26gl%3DGB%26ceid%3DGB%3Aen&api_key=vlpqsg5fjf9ogebcmrpoz8hdchihae9nywlrezcy&order_by=pubDate&order_dir=desc&count=100')
    .then(function (res) {
      //set component state to response data
      self.setState({data: res.data.items});
      console.log(self.state.data);
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
          var aName = a.title.replace("'", "").replace("‘", "");
          var bName = b.title.replace("'", "").replace("‘", "");
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
        //sort by date
        newTableItems.sort((a,b) => {
          var aDate = a.pubDate;
          var bDate = b.pubDate;
          if(this.state.dateSorted){
            this.setState({dateSorted: !this.state.dateSorted});
            return new Date(bDate) - new Date(aDate);
          }
          else{
            this.setState({dateSorted: !this.state.dateSorted})
            return new Date(aDate) - new Date(bDate);
          }
        });
        break;
      default:
        break;
    }
    this.setState({data: newTableItems });
  };
  //render html
  render() {
    return (
      <div style={newsMainStyles}>
        <div style={rssContainer}>
        <li style={newsStyling}>
          <OnHover style={newsHeaderTitleStyling} onClick={() => this.dataSort(0)}>
            Title
          </OnHover>
          <OnHover style={newsHeaderDateStyling} onClick={() => this.dataSort(1)}>
            Date
          </OnHover>
        </li>
          {
            //map state date to html
            this.state.data.map(function(item, i){
              return <a key={i} style={newsStyling} href={item.link}>
                        <OnHover style={newsTitleStyling}>{item.title.trim()}</OnHover>
                        <p style={newsDateStyling}>{item.pubDate.split(" ")[0]}</p>
                     </a>
            })
          }
        </div>
      </div>
    )
  }
}

export default Rss;