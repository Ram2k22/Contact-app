import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SuccessPopup from './SuccessPopup';

const AddContact = (props) => {
    const [contact,setCont] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCont(values => ({...values,[name]:value}));
    }

    const add = (e) => {
        e.preventDefault();
        
        if(contact.name !== "" && contact.email !== ""){
            props.addContactHandle(contact);
            setCont({name:'',email:''});
            alert("Contact Added Successfully")

        }
        else{
            alert("All fields are required" );   
        }
        
    }

    

    return (
        <div className = 'ui main' style={{border:'1px solid black',padding:'13px',borderRadius:'8px'}}>
            <h2>Add Contact
                <Link to="/">
                    <button className='ui button blue' style={{float:'right'}} >My Contacts</button>
                </Link>
            </h2>
            <form className='ui form' onSubmit={add}>
                <div className = 'field' >
                    <label><b>Name:</b>
                        <input type='text' name='name' placeholder='Name' value = {contact.name || ""}
                         onChange={handleChange} style={{boxShadow:'2px 2px 2px 1px'}}/>
                    </label>
                </div>
                <div className='field'>
                    <label><b>Email:</b>
                        <input type='email' name='email' placeholder='Example@gmail.com' value = {contact.email || ""}
                        onChange={handleChange} style={{boxShadow:'2px 2px 2px 1px'}}/>
                    </label>
                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
    );
}

export default AddContact;