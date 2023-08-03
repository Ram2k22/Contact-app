import { Link } from 'react-router-dom';
import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact,index) => {
        return(
            <ContactCard contact = {contact}  key = {index} clickHander = {deleteContactHandler}/>
        );
    })
    return (
        <div className='main' style={{border:'3px solid black',padding:'8px',borderRadius:'8px'}}>
            <h2>Contact List
                <Link to ='/add'>
                    <button className='ui button blue' style={{float:'right'}}>Add Contact</button>
                </Link>
            </h2><br/>
            <div className='ui celled list'>{renderContactList}</div>
        </div>
    );
}

export default ContactList;