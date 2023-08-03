import React from 'react';
import abc from '../Images/user.svg';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    return (
        <div className='item' style={{padding:'13px',border:'1px solid black',borderRadius:'8px',boxShadow:'8px 5px 5px 2px',margin:'10px'}}>
            <img className = 'ui avatar image' style={{height:'35px',width:'35px'}} src = {abc} alt='avatar' />
            <div className='content'>
                <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
                    <div className='header' style={{fontSize:'15px'}}>{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i className='trash alternate outline icon' style = {{cursor:'pointer',color:'red',float:'right',fontSize:'20px',marginTop:'5px'}}
                onClick = {() => props.clickHander(id)}
            ></i>
        </div>
    );
}

export default ContactCard;