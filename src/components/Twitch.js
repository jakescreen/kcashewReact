import React from "react";

export default class Twitch extends React.Component {

    UNSAFE_componentWillMount(){
        let url = "https://api.twitch.tv/helix/users/follows?from_id=455825055"
        fetch(url, {
            method: 'GET',
            headers: {
                'Client-ID': 'rc8uqc4k9iv82b8l339oymibbd3nkb'
            }
        }).then(Response => Response.json())
        .then(function(data){
            let strURL = "https://api.twitch.tv/helix/streams?user_login=monstercat";
            return fetch(strURL, {
                method: 'GET',
                headers: {
                    'Client-ID': 'rc8uqc4k9iv82b8l339oymibbd3nkb'
                }
            })
        })
        .then(Response => (Response.json()))
        .then(data1 => console.log(data1))
    }

    render() {
        return(
            <div className="twitchMain">
                <h4>Twitch</h4>
                
            </div>
            
        );
    }

}