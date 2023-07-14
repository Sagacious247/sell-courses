import { Box, Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {

  }
  return (
    <Box padding={3}
    style={{ display: "flex", flexDirection: "column", gap: "20px"}}
   >
      <TextField
       variant='outlined'
       type="email"
       value={email}
       label="Enter Email"
       onChange={(e) => setEmail(e.target.value)}
       fullWidth
      />

<TextField
       variant='outlined'
       type="password"
       value={password}
       label="Enter Password"
       onChange={(e) => setPassword(e.target.value)}
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

export default Login

