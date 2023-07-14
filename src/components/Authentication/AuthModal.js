import { AppBar, Backdrop, Button, Fade, makeStyles, Modal, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    width: 400,
    padding: theme.spacing(2, 2, 2),
    borderRadius: 10
  }
}))

export default function AuthModal()  {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(0)

  const handleOpen = () => {
    setOpen(true)
  } 

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  } 

  return (
    <div>
      <Button
       variant='contained'
       style={{
        width: 85,
        height: 40,
        marginLeft: 15,
        backgroundColor: "green",
        color: "white",
       }}
       onClick={handleOpen}
      >
      Login
      </Button>
      <Modal
       aria-labelledby='transition-modal-title'
       aria-describedby='transition-modal-description'
       className={classes.modal}
       open={open}
       onClose={handleClose}
       closeAfterTransition
       BackdropComponent={Backdrop}
       BackdropProps={{
        timeout: 500
       }}
      >
       <Fade in={open}>
        <div className={classes.paper}>
         <AppBar
          position='static'
          style={{backgroundColor: "green", color: "white",}}
         >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            style={{borderRadius: 10}}
          >
           <Tab label="Login" />
           <Tab label="Register"/>
          </Tabs>
         </AppBar>
         {value === 0 && <Login handleClose={handleClose}/>}
         {value === 1 && <Register handleClose={handleClose}/>}
        </div>
       </Fade>
      </Modal>
    </div>
  )

}

