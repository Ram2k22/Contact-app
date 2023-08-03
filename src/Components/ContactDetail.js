import React from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import user from '../Images/user.svg'
import './ContactDetail.css'

const ContactDetail = ({contacts}) => {
    const { id } = useParams();
    const contact = contacts.find((contact) => contact.id === id);
    const {name,email} = contact;
    return (
        <div className='main'>
            <div className='u card'>
                <div className='image'>
                    <img src = {user} alt = "user" style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='description'>{email}</div><br/>
                    <p>Hi this is {name} with email {email}, You can contact me any time you need.....</p>
                    <p> All the best for your future...</p>
                </div>
            </div>
        </div>
    );

    
}

export default ContactDetail;