import React from 'react';

export const Card = ({ listOfContacts, onDelete }) => {
    
    const handleDelete = (name) => {
        onDelete(name);
    }

    return(
        <>
        <h2>Contact List</h2>
        {listOfContacts.map(contact => {
            return(
                <ul key={contact.name}>
                    <li>
                        {contact.name}  
                     <button onClick={() => handleDelete(contact.name)}> x </button>
                    </li>
                </ul>
            )
        })}
        </>
    ) 
}