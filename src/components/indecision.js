import React from "react";

import Header from "./header";
import Action from "./action";
import Options from "./options";
import Form from "./form";


export default class Indecision extends React.Component
{
    constructor (props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.removeSingleOption = this.removeSingleOption.bind(this)
        this.state = {
            options : [],// now reading from local storage, so no mre empty while loading
            error: undefined
        }
    }

    handleRemoveAll () {
        this.setState(()=> ({ options: [] }))
    }

    handleAction (){
        let randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum])
    } 

    handleForm (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        if(option){
            this.setState((prevState)=>{
                return {
                    options: prevState.options.concat(option),
                    error: prevState.error = undefined
                }
            })
        }else{
            this.setState((prevState)=>{
                return {
                    error : prevState.error = 'Error in adding option'
                }
            })
        }
    }


    removeSingleOption (opt) {
        this.setState((prevState)=>{
            return {
                options: prevState.options.filter((option)=>{
                    return opt !==option
                })
            }
        })
    }

    render() {
        const subtitle = 'A place for decision';        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action handleAction={this.handleAction} hasOptions={this.state.options.length > 0}/>
                <Options  options={this.state.options} handleRemoveAll = {this.handleRemoveAll} removeSingleOption = {this.removeSingleOption}/>
                <Form handleForm={this.handleForm} formError={this.state.error} />
            </div>
        )
    }

    componentDidMount() {

        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        if(options){
            this.setState(()=>({options}))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    // componentWillUnmount() {

    // }
}