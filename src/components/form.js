import React from "react";

export default class Form extends React.Component
{
    render() {
        return (
            <form onSubmit={this.props.handleForm}>
                <p>{this.props.formError}</p>
                <input type="text" name="option" />
                <button type="submit">Add</button>
            </form>
        );
    }
}