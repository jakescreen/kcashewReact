import React from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

export default class TwitchArticles extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);

    }

    state = {
        channel1: "monstercat",
        channel2: "FrostPrime_"
    }

    handleClick1(e, id) {
        this.setState({ channel1: id, channel2: this.state.channel2 })
    }
    handleClick2(e, id) {
        this.setState({ channel1: this.state.channel1, channel2: id})
    }




    render() {
        var yeet = [];
        //pushes props into array on relaod and displays, emptying on rerender
        yeet.push(this.props.usrs.map((item, i) => {
            return <div className="post" key={i}>
                <h5>{item.name}</h5>
                <p>{item.title}</p>
                <button id="1" onClick={(e) => this.handleClick1(e, item.name)}>Stream 1</button>
                <button id="2" onClick={(e) => this.handleClick2(e, item.name)}>Stream 2</button>
            </div>
        }))
        console.log(this.state)
        return (
            <div>
                {yeet}
                <iframe id={"embed_" + this.state.channel1}  src={"http://player.twitch.tv/?muted=true&channel=" + this.state.channel1} className="stream" allowFullScreen={true} width="700px" height="400px"></iframe>
                <iframe id={"embed_" + this.state.channel2}  src={"http://player.twitch.tv/?muted=true&channel=" + this.state.channel2} className="stream" allowFullScreen={true} width="700px" height="400px"></iframe>
            </div>

        );
    }

}