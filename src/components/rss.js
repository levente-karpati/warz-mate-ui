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
const rssContainer = {
  width: '100%',
  height: '100%',
  overflowY: 'scroll'
}
//news item styling
const newsItem = {
  width: '100%',
  height: '10%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black',
  textDecoration: 'none',
  color: 'black'
}
class Rss extends React.Component  {
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
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Frss%2Fsearch%3Fq%3Dcall%2Bof%2Bduty%2Bwarzone%26hl%3Den-GB%26gl%3DGB%26ceid%3DGB%3Aen&api_key=vlpqsg5fjf9ogebcmrpoz8hdchihae9nywlrezcy&order_by=pubDate&order_dir=desc&count=100')
    .then(function (res) {
      //set component state to response data
      self.setState({data: res.data.items});
    })
    .catch(function (err) {
      console.log(err);
    });
  }
  //render html
  render() {
    return (
      <div style={newsMainStyles}>
        <div style={rssContainer}>
          {
            //map state date to html
            this.state.data.map(function(item, i){
              return <a style={newsItem} href={item.link}><p key={i}>{item.title}</p></a>
            })
          }
        </div>
      </div>
    )
  }
}

export default Rss;