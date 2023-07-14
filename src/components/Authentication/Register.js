import { Box, Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from '../../config/firebaseConfig'
import { useNavigate } from 'react-router-dom'


function Register({handleClose}) {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [confirmPassword, setconfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const {name, email, password} = formData
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
     e.preventDefault()

    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

     const user = userCredential.user
      
      updateProfile(auth.currentUser, {
        displayName: name
      })
      toast.success(`Successfully registered. Welcome ${userCredential.user.email}`)

      handleClose()
    }catch(error) {
      toast.error("Something went wrong!")
    }
  }

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <Box padding={3}
     style={{ display: "flex", flexDirection: "column", gap: "20px"}}
    >

<TextField
        variant='outlined'
        type="name"
        value={name}
        id='name'
        label="Enter Your Name"
        onChange={handleChange}
        fullWidth
       />
       <TextField
        variant='outlined'
        type="email"
        value={email}
        id='email'
        label="Enter Email"
        onChange={handleChange}
        fullWidth
       />

<TextField
        variant='outlined'
        type="password"
        value={password}
        id='password'
        label="Enter Password"
        onChange={handleChange}
        fullWidth
       />
       
       <Button
        variant='contained'
        size='large'
        style={{backgroundColor: "green", color: "white"}}
        onClick={handleSubmit}
       >
        Register
       </Button>
    </Box>
  )
}

export default Register
