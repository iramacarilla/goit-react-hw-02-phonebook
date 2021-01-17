import React, { Component } from 'react'
import ContactEditorElement from '../contactEditorElement/ContactEditorElement'

export default class ContactEditor extends Component {
    state = {
        name: '',
        number: '',
      }
      onHandelChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
      }
      
    handelSubmit = (e) => {
    e.preventDefault();
    
    this.props.onAddForm(this.state.name, this.state.number)
    this.setState({name: '', number:''})
    }
    
    render() {
        return (
          <ContactEditorElement name={this.state.name} number={this.state.number} 
          onChange={this.handelSubmit} onHandelChange={this.onHandelChange}/>
           
        )
    }
}

