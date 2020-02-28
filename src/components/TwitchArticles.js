import React from "react";

export default class TwitchArticles extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick (e, id) {
        console.log(id);
    }
    
    render() {
        var yeet = [];
        //pushes props into array on relaod and displays, emptying on rerender
        yeet.push(this.props.usrs.map((item, i) => {
            return <div className="post" key={i} onClick={(e) => this.handleClick(e,item.name)}>
                <h4>{item.name}</h4>
                <p>{item.title}</p>
                </div>
        }))
        return (
            <div>{yeet}</div>
        );
    }

}