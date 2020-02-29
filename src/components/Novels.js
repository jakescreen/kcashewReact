import React from "react";
import NovelArticles from "./NovelArticles";
class Novels extends React.Component {
    //contains links to webnovels and their latest 2 posts
    state = {
        links: [
            "https://www.royalroad.com/fiction/syndication/16946",
            "https://www.royalroad.com/fiction/syndication/26294",
            "https://www.royalroad.com/fiction/syndication/25275",
            "https://www.royalroad.com/fiction/syndication/12024"
        ],
        posts: []
    };
    //loads novel posts into the state on load
    componentDidMount() {
        var tmpPosts = []; //array to return of posts
        var expectedLength = this.state.links.length; //how many links to fetch
        for (let i = 0; i < expectedLength; i++) {
            //fetches link with 2 posts each
            fetch("https://feed.jquery-plugins.net/load?url=" + this.state.links[i] + "&maxCount=2&ShowDesc=false")
                .then(response => response.json())//returns array size 2 of json object posts
                .then(data => {
                    //pulls the title, link, and date of each post and adds to tmpPosts
                    for (let j = 0; j < data.data.length; j++) {
                        tmpPosts.push({ title: data.data[j].title, date: data.data[j].publishDateFormatted, link: data.data[j].link });
                    }
                    return tmpPosts;
                })
                .then(arr => {
                    //sets state once all posts are in
                    if (arr.length === expectedLength * 2) {
                        this.setState({ posts: arr });
                    }
                });
        }
    }
    render() {
        return (
            <div className="novelsMain">
                <h4>Novels</h4>
                <NovelArticles novs={this.state.posts} />
            </div>
        );
    }
}
export default Novels;