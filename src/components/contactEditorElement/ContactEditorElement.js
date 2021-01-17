import React from 'react'
import styles from './ContactEditorElement.module.css'

const ContactEditorElement = ({name, number, onChange, onHandelChange}) => {
    return (
        <div className={styles.contact}>
              <h2>Phonebook</h2>
      <form className={styles.form} onSubmit={onChange}>
        <label> Name
        <input type='text' name='name' value={name }
        onChange={onHandelChange}/> 
          </label>
          <label> Number
         <input type='tel' name='number' value={number }
        onChange={onHandelChange}/> 
        </label>
        <button type="submit">Add contact </button>
      </form>   
            </div>
    )
}
export default  ContactEditorElement