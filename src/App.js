import React from 'react';
import './App.css';
import Novels from "./components/Novels"
import Twitch from "./components/Twitch";
class App extends React.Component {
  render() {
    return (
      <div className="content">
        <Novels />
        <Twitch />
      </div>
    );
  }
}
export default App;
