import React from "react";
import Articles from "./Articles";
import $ from "jquery";

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

    async getFeeds() {
        var tmpPosts = [];
        var expectedLength = this.state.links.length;
        for (let i = 0; i < expectedLength; i++) {
            $.ajax({
                dataType: "json",
                url: "https://feed.jquery-plugins.net/load?url=" + this.state.links[i] + "&maxCount=2&ShowDesc=false",
                success(result) {
                    for (let i = 0; i < result.data.length; i++) {
                        tmpPosts.push({ title: result.data[i].title, date: result.data[i].publishDateFormatted, link: result.data[i].link });
                    }
                }
            });
        }
        return tmpPosts;
    }


    render() {
        const arr = this.getFeeds();
        console.log(arr);
        
        return (
            <div className="novelsMain">
                <h4>Novels</h4>
                {this.state.posts}
                <Articles />
            </div>
        );
    }
}