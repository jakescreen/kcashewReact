import React from "react";
import novelArticles from "./novelArticles";

class Novels extends React.Component {
    render() {
        var yeet = [];
        yeet.push(this.props.novs.map((item, i) => {
            return <div>
                <a key={i} href={item.link}>{item.title}</a>
                <p>{item.date}</p>
                </div>
        }))
        return (
            <div className="novelsMain">
                <h4>Novels</h4>
                {yeet}
                <novelArticles />
            </div>
        );
    }
}
export default Novels;