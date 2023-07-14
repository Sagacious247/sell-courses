import { Avatar, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Navbar from './<Navbar'
import { updateDoc } from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'
import { db } from '../config/firebaseConfig'
import { Book, Favorite, Settings, ShoppingBasket } from '@material-ui/icons'
import { FaCertificate } from 'react-icons/fa'
import Footer from './Footer'
import { auth } from '../config/firebaseConfig'

const useStyles = makeStyles(() => ({
header: {
  backgroundColor: "#004225",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",    
   width: "100%",
  height: 150
},
headerContent: {
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "white",
},
personalDetails: {
  backgroundColor: "#f3f3f3f3",
  width: "100%",
  height: 300,
  display: "flex",
  margin: "0px"
  // aliginItems: "center",

},
personalContent: {
  display: "flex",
  gap: 20,
  backgroundColor: "white",
  width: "100%",
},

links: {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  margin: "auto",
  alignItems: "center",
},
settings: {
  display: "flex",
  alignItems: "center",
  gap: 10
}

}))

function Profile() {
  const classes = useStyles()
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    // name: auth.currentUser.displayName,
    // email: auth.currentUser.email,
  })

  const {name, email } = formData

    const onSubmit = () => {

    }

    const handleChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
    }
  return (
    <div className={classes.profile}>
      <Navbar/>
      <div className={classes.header}>
        <div className={classes.headerContent}>
         <Avatar style={{ width: 100, height: 100}}/>
         <div>
         <h3 style={{marginBottom: 10}}>Paul Julius</h3>
         <span>Learner</span>
         </div>
        </div>
      </div>

      <div className={classes.personalDetails}>
      <div className={classes.personalContent}>
     
         <div className={classes.links}>
          <div className={classes.settings}>
           <Settings/>
           <p onClick={() => {
            changeDetails && onSubmit()
            setChangeDetails((prevState) => !prevState)
           }}>{changeDetails ? "done" : "Settings" }</p>
          </div>

           <div className={classes.profileCard}>
            <form>
            <TextField
      variant='outlined'
      label="Change Eamil"
      fullWidth
      style={{marginBottom: "20px"}}
      onChange={handleChange}
      className={!changeDetails ? 
        'profileEmail' : 'profileEmailActive'}
        value={email}
      />

<TextField
      variant='outlined'
      label="Change Name"
      fullWidth
      className={!changeDetails ? 
        'profileName' : 'profileNameActive'}
        value={name}
      style={{marginBottom: "20px"}}
      onChange={handleChange}
      />


<TextField
      variant='outlined'
      label="Reset Your Password"
      fullWidth
      onChange={handleChange}
      style={{marginBottom: "20px"}}
      className={!changeDetails ? 
        'profilePassword' : 'profilePasswordActive'}
      />

            </form>
           </div>
         </div>
         
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile
