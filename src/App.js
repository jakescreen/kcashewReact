import React from 'react';
import './App.css';
import Novels from "./components/Novels"
import Twitch from "./components/Twitch";
import Header from "./components/Header";



class App extends React.Component {

  state = {
    links: [
      "https://www.royalroad.com/fiction/syndication/16946",
      "https://www.royalroad.com/fiction/syndication/26294",
      "https://www.royalroad.com/fiction/syndication/25275",
      "https://www.royalroad.com/fiction/syndication/12024"
    ],
    shown: false,
    posts: ""
  };


  getFeeds() {
    var tmpPosts = [];
    var expectedLength = this.state.links.length;
    for (let i = 0; i < expectedLength; i++) {
      let chapters = fetch("https://feed.jquery-plugins.net/load?url=" + this.state.links[i] + "&maxCount=2&ShowDesc=false");
      tmpPosts.push(chapters);
    }
    return tmpPosts;
  }

  getData() {
    var arrOfArr = [];
    Promise.all(this.getFeeds())
      .then(links => { return links[0].json() })
      .then(chapters => { return chapters.data })
      .then(function (data) {
        for (let i = 0; i < data.length; i++) {
          let chap = {
            title: data[i].title,
            date: data[i].publishDateFormatted,
            link: data[i].link
          }
          arrOfArr.push(chap);
        }
      }).then(function(){
        console.log(arrOfArr);
        return arrOfArr[0].title;
        
      });
  }

  componentDidUpdate(){
    var tmpPosts = [];
    var expectedLength = this.state.links.length;
    for (let i = 0; i < expectedLength; i++) {
      fetch("https://feed.jquery-plugins.net/load?url=" + this.state.links[i] + "&maxCount=2&ShowDesc=false")
        .then(response => response.json())
        .then(data => console.log(data));
      
    }
    
  }

  render() {
    this.componentDidUpdate();
    return (
      <div className="content">
        <p>{this.state.links}</p>
        <Header />
        <Novels novs={this.state.posts}/>
        <Twitch />
      </div>
    );
  }

}

export default App;
