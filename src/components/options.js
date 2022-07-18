import React from "react";
import Option from "./option";

export default class Options extends React.Component
{
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
                <p>This is Options component</p>   
                <Option optionList={this.props.options} removeSingleOption = {this.props.removeSingleOption}/>
            </div>         
        );
    }
}