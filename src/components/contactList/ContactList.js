import React from 'react'
import styles from './ContactList.module.css'
import PropTypes from 'prop-types';

const ContactList = ({contacts, onDelete}) => {
  return (
<div className={styles.contactList}>
 <h2>Contacts</h2>
 <ul className= {styles.contactData}>
   {contacts.map(({id, name, number}, idx) => (
    <li key={id}>
   <p> {idx+1}. Name: {name}</p>
   <p> Number: {number}</p>
   <button type='button' onClick={() => onDelete(id)}>Delete</button>
   </li>
   ))
   }
 
 </ul>

</div>
)
}
 
ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDelete: PropTypes.func.isRequired
};
export default ContactList;