import React from 'react';
import TwitchArticles from "./TwitchArticles";


export default class Twitch extends React.Component {
    state = {
        users: []
    }
    
    "https://api.twitch.tv/helix/streams?user_login="
    componentDidMount() {
        let url = "https://api.twitch.tv/helix/users/follows?from_id=455825055"
        let usrs = [];
        fetch(url, {
            method: 'GET',
            headers: {
                'Client-ID': 'rc8uqc4k9iv82b8l339oymibbd3nkb'
            }
        })
            .then(Response => Response.json())
            .then(data => {
                var newUrl = "https://api.twitch.tv/helix/streams?";
                for(let i = 0; i < data.data.length; i++){
                    newUrl += "user_login=" + data.data[i].to_name + "&";
                }
                return newUrl.slice(0, newUrl.length - 1);
            })
            .then(rtn => {
                fetch(rtn.toString(), {
                    method: 'GET',
                    headers: {
                        'Client-ID': 'rc8uqc4k9iv82b8l339oymibbd3nkb'
                    }
                }).then(Response => Response.json())
                .then(data => {
                    for(let j = 0; j < data.data.length; j++){
                        usrs.push({name: data.data[j].user_name, status: data.data[j].type, title: data.data[j].title})
                    }
                    return usrs;
                })
                .then(arr => {
                   this.setState({users: arr});
                })
                
            })


    }

    render() {
        return (
            <div className="twitchMain">
                <h4>Twitch</h4>
                <div id="twitch-embed"></div>
                
                <TwitchArticles usrs={this.state.users}/>
            </div>

        );
    }

}