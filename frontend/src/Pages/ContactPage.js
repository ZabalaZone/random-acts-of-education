import React, {useState, useEffect} from 'react';
import {Card} from '../Components/Card';
import {Form} from '../Components/Form';

export const ContactPage = () => {
    const [contact, setContact] = useState([])
    const [addContact, setAddContact] = useState('')

    useEffect(()=> {
        fetch('/data').then(response => {
            if (response.ok){
                return response.json()
            }
        }).then(data => setContact(data))
    }, [])

    const handleFormChange = (inputValue) => {
        setAddContact(inputValue)
    }

    const handleFormSubmit = () => {
        fetch('/data/create', {
            method: 'POST',
            body: JSON.stringify({
                name:addContact
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(message => 
            {console.log(message);
            getLatestContacts();
            setAddContact('')
            })
        
    }

    const deleteContact = (name) => {
        fetch('/data/delete', {
            method: 'POST',
            body: JSON.stringify({
                name:name
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(message => {
            console.log(message);
            getLatestContacts()
            })
        
    }

    const getLatestContacts = () => {
        fetch('/data').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setContact(data))
    }

    
    return (
        <>
        <Form userInput={addContact} onFormChange = {handleFormChange} onFormSubmit={handleFormSubmit}/>
        <Card listOfContacts={contact} onDelete={deleteContact}/>
        </>
    )
}