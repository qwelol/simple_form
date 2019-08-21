import React, { Component } from "react";

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            phone:''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();

        fetch('/',{ method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(this.state)})
            .then((res)=>{
                if(res.ok){
                    return res.json();
                }
            }).then(function (data) {
                  console.log(data.message);
              })

                      this.setState({
                          name:'',
                          email:'',
                          phone:''
                      })
    }
    handleNameChange(event){
        this.setState({name:event.target.value});
    }
    handleEmailChange(event){
        this.setState({email:event.target.value});
    }
    handlePhoneChange(event){
        this.setState({phone:event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <div className="container">
                    <label>ваше имя:</label>
                    <input
                        type="text"
                        placeholder=" "
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        required
                        minLength="2"
                    />
                    <label>email:</label>
                    <input
                        type="text"
                        placeholder=" "
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        required
                        pattern="^[a-z,A-Z,0-9]{1}[a-z,A-Z,0-9,.,_,-,&,?,!]*[a-z,A-Z,0-9]{1}@{1}[a-z,A-Z,0-9,-]+.{1}[a-z,A-Z,0-9,-]+$"
                        minLength="5"
                    />
                    <label>телефон:</label>
                    <input
                        type="text"
                        placeholder=" "
                        value={this.state.phone}
                        onChange={this.handlePhoneChange}
                        required
                        pattern="^\+{1}[0-9]+$"
                        minLength="12"
                        maxLength="12"
                    />
                    <button>Отправить</button>
                </div>
            </form>
        );
    }
}

export default Form;