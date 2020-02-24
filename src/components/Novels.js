import React from "react";
import Articles from "./Articles";
import $ from "jquery";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";

export default class Novels extends React.Component {

    constructor() {
        super();
        this.state = {
            links: [
                "https://www.royalroad.com/fiction/syndication/16946",
                "https://www.royalroad.com/fiction/syndication/26294",
                "https://www.royalroad.com/fiction/syndication/25275",
                "https://www.royalroad.com/fiction/syndication/12024"
            ],
            posts: [],
            shown: false
        };
    }

     getFeeds() {
        var tmpPosts = [];
        var expectedLength = this.state.links.length;
        for (let i = 0; i < expectedLength; i++) {
            let chapters = fetch("https://feed.jquery-plugins.net/load?url=" + this.state.links[i] + "&maxCount=2&ShowDesc=false");
            tmpPosts.push(chapters);
            /*
            $.ajax({
                dataType: "json",
                url: "https://feed.jquery-plugins.net/load?url=" + this.state.links[i] + "&maxCount=2&ShowDesc=false",
                success(result) {
                    for (let i = 0; i < result.data.length; i++) {
                        tmpPosts.push({ title: result.data[i].title, date: result.data[i].publishDateFormatted, link: result.data[i].link });
                    }
                }
            });
            */
           
        }
        return tmpPosts;
    }

    render() {
        // this.getFeeds().then(links => {console.log(links)})
        Promise.all(this.getFeeds())
        .then(links => {return links[0].json()})
        .then(chapter => console.log(chapter))

        return (
            <div className="novelsMain">
                <h4>Novels</h4>
                {this.state.posts}
                <Articles />
            </div>
        );
    }
}