import React, { Component } from "react";

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            phone:''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        console.log('email value is', this.state.email);
    }
    handleEmailChange(event){
        console.log('email was changed',event.target.value);
        this.setState({email:event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input
                    type="text"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <input
                    type="text"
                    placeholder="phone"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                />
            </form>
        );
    }
}

export default Form;