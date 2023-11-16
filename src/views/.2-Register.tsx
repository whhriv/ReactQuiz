import React, { useState } from 'react'

import useNavigate from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import UserType from '../types/auth'


export default function Register() {
    const []
    const [userFormData, setUserFormData] = useState (
        {
            firstName: '',
            lastName: '',
            email:'',
            username:'',
            password:'',
            confirmPassword:'',    
        }
    )
    // const handleInput = (e) =>  {
    //     e.preventDefault()

        console.log(e.target.name, e.target.value)
        setUserFormData({...userFormData, [e.target.name] : e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        logUserIn(userFormData)
        navigate('/')
        const validatedForm = validatePasswords(userFormData.password!, userFormData.confirmPassowrd!)
        console.log(validatedForm)
    }

    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <input type="email" placeholder="youremail@email.com" id="email" name="email"/>
            <input value={lastName} placeholder="youremail@email.com" id="email" name="email"/>
            <input type="email" placeholder="youremail@email.com" id="email" name="email"/>
            <input type="email" placeholder="youremail@email.com" id="email" name="email"/>
            <input type="email" placeholder="youremail@email.com" id="email" name="email"/>
            <button>Login</button>
    </form> 
        </>
    )
}

