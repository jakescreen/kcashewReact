import React from "react";

export default class Articles extends React.Component {
    render() {
        const { title } = this.props;


        return (
            <h4>{title}</h4>
            
        );
    }

}