import React from 'react'
import styles from './Filter.module.css'
import PropTypes from 'prop-types';

export default function Filter({value, onChange}) {
    return (
        <div>
            <input className ={styles.search} type='text' value={value} placeholder="Search by name" onChange={onChange}/>
        </div>
    )
}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};


