import React from "react";
import Novels from "./Novels";
import Twitch from "./Twitch";
import Header from "./Header";

export default class Layout extends React.Component {

    render() {
        return(
            <div className="content">
                <Header />
                <Novels />
                <Twitch />
            </div>
        );
    }

}