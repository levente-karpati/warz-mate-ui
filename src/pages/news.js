import * as React from 'react'
import axios from 'axios'

//component import
import Main from '../components/main';

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
// //rss feed item styling
// const rssItemStyles = {

// }

class News extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { 
      data: [] 
    };
  }

  componentDidMount() {
    var self = this;
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Frss%2Fsearch%3Fq%3Dcall%2Bof%2Bduty%2Bwarzone%26hl%3Den-GB%26gl%3DGB%26ceid%3DGB%3Aen&api_key=vlpqsg5fjf9ogebcmrpoz8hdchihae9nywlrezcy&order_by=pubDate&order_dir=desc&count=100')
    .then(function (res) {
      self.setState({data: res.data.items});
      console.log(self.state.data);
    })
    .catch(function (err) {
      console.log(err);
    });
  }
  
  render() {
    return (
      <Main>
        <div style={newsMainStyles}>
          <div style={rssContainer}>
            {
              this.state.data.map(function(item, i){
                return <p key={i}>{item.title}</p>
              })
            }
          </div>
        </div>
     </Main>
    )
  }
}

export default News;