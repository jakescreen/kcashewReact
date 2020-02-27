import React from 'react';
import './App.css';
import Novels from "./components/Novels"
import Twitch from "./components/Twitch";

class App extends React.Component {

  state = {
    links: [
      "https://www.royalroad.com/fiction/syndication/16946",
      "https://www.royalroad.com/fiction/syndication/26294",
      "https://www.royalroad.com/fiction/syndication/25275",
      "https://www.royalroad.com/fiction/syndication/12024"
    ],
    shown: false,
    posts: []
  };

  componentWillMount() {
    var tmpPosts = [];
    var expectedLength = this.state.links.length;
    for (let i = 0; i < expectedLength; i++) {
      fetch("https://feed.jquery-plugins.net/load?url=" + this.state.links[i] + "&maxCount=2&ShowDesc=false")
        .then(response => response.json())
        .then(data => {
          for(let j = 0; j < data.data.length; j++){
            tmpPosts.push({title: data.data[j].title, date: data.data[j].publishDateFormatted, link: data.data[j].link});
          }
          return tmpPosts;
        })
        .then(arr => {
          if(arr.length === expectedLength * 2){
            this.setState({posts: arr});
          }
        });
    }
  }

  render() {


    return (
      <div className="content">
        <Novels novs={this.state.posts} />
        <Twitch />
      </div>
    );
  }

}

export default App;
