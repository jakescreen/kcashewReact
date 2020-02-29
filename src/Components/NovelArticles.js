import React from 'react';
export default class NovelArticles extends React.Component {
    render() {
        var yeet = [];
        //pushes props into array on relaod and displays, emptying on rerender
        yeet.push(this.props.novs.map((item, i) => {
            return <div className="post" key={i}>
                <a href={item.link}>{item.title}</a>
                <p>{item.date}</p>
                </div>
        }))
        return (
            <div>{yeet}</div>
        );
    }

}