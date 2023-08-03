// import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import { v4 as uuid } from 'uuid';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState(null);
  

  const addContactHandle = (contact) =>{
      setContacts([...contacts,{id : uuid(),...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) {
      setContacts(retriveContacts);
    }
    else {
      setContacts([]); // Initialize contacts as an empty array when there are no saved contacts
    }
  }, []);

  useEffect(() => {
    if (contacts !== null){
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    }
  }, [contacts]);

  
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header /><br/>
        <Routes>
          <Route path='/'
            element={<ContactList contacts={contacts || []} getContactId={removeContactHandler} />}/>
          <Route path='/add'
            element={<AddContact addContactHandle={addContactHandle} />}/>
          <Route path='/contact/:id'
            element={<ContactDetail contacts={contacts}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
