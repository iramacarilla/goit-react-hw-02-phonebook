
import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid";
import ContactList from './contactList/ContactList'
import Filter from './filter/Filter'
import ContactEditor from './contactEditor/ContactEditor'

export default class App extends Component {
  state = {
    contacts: [],
    filter:'', 
  }
  
  setFilter = (e) => {
    this.setState({filter: e.target.value})
  }
  filterContact =() => {
    const {contacts, filter} = this.state
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
  
 
  addContact = (name, number) => {
    const searchName = this.state.contacts.map((contact) => contact.name).includes(name)
    if(searchName) {alert(`${name} is already in contacts`)} 
    else {
    const contact = {
      id: uuidv4(),
      name,
      number
    }
    this.setState(prevState => {
      return{ contacts: [...prevState.contacts, contact]}})
    }
  }

  deleteContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact=> contact.id !== id) 
      }})
  }
  render() {
    const filtredContact = this.filterContact();
    return (
      <>
      <ContactEditor onAddForm={this.addContact}/>
      <Filter value={this.state.filter} onChange={this.setFilter}/>
      <ContactList contacts= {filtredContact} onDelete={this.deleteContact}/> 
      
      </>
    )
}
}


