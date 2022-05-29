import React from 'react';

export const Form = ({ userInput, onFormChange, onFormSubmit }) => {

    const handleChange = (event) => {
        onFormChange(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }

    return(
        <>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" required value={userInput} onChange={handleChange}></input>
            <input type="submit" ></input>
        </form>
        </>
    )
}