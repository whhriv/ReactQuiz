import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import UserType from '../types/auth'


type RegisterProps = {
    logUserIn: (user:Partial<UserType>) =>void
}
    export default function Register({ logUserIn }: RegisterProps) {

    const navigate = useNavigate();

    const [userFormData, setUserFormData] = useState<Partial<UserType>>(
        {
            firstName: '',
            lastName: '',
            email:'',
            username:'',
            password:'',
            confirmPassword:'',
        }
    )

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void =>  {
        console.log(e.target.name, e.target.value)
        setUserFormData({...userFormData, [e.target.name] : e.target.value})
    }

    const handleFormSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        logUserIn(userFormData)
        navigate('/')
    }
    const validatePasswords = (password:string, confirmPassword:string):boolean => {
        return (password.length >= 5) && password === confirmPassword

    }
    const validatedForm = validatePasswords(userFormData.password!, userFormData.confirmPassowrd!)
console.log(validatedForm)

    return (
       <>
            <h1 className="text-center">Sign Up</h1>
            <Card className='mt-3'>
                <Card.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Label htmlFor="firstName">First Name</Form.Label>
                        <Form.Control value={userFormData.firstName} name='firstName' onChange={handleInputChange} />

                        <Form.Label htmlFor="lastName">Last Name</Form.Label>
                        <Form.Control value={userFormData.lastName} name='lastName'/>

                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control value={userFormData.email} name='email' onChange={handleInputChange}/>

                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control value={userFormData.username} name='username' onChange={handleInputChange}/>

                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control value={userFormData.password} name='password' onChange={handleInputChange}/>

                        <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                        <Form.Control value={userFormData.confirmPassword} name='confirmPass' onChange={handleInputChange}/>
                        <Button type="submit" variant="outline-success" className="w-100 mt-3" disabled={!validatedForm}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>

       </>
    )
}