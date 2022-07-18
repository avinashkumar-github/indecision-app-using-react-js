import React from "react";

export default class Option extends React.Component
{
    constructor(props){
        super(props);
        this.getList = this.getList.bind(this)
    }

    getList() {
        return this.props.optionList.map((opt)=>{
            return <li key={opt}>{opt} <button onClick={(e)=>{
                this.props.removeSingleOption(opt)
            }}>Remove</button></li>
        })
    }
    
    render(){
        return (
            <ol>                
                {this.getList()}
            </ol>
        )
    }
}