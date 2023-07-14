import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Backdrop, Button, makeStyles, Modal, TextField } from '@material-ui/core'
import { setCourses } from '../features/CoursesSlice'
import {v4 as uuidv4} from "uuid"
import Navbar from './<Navbar'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    width: 600,
    padding: theme.spacing(2, 2, 2),
    borderRadius: 10,
    margin: "80px auto"
  },
  addCourseHeader: {
    backgroundColor: "green",
    height: 100,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color: "white",
    flexDirection: "column",

  }
}))

function AddCourse() {
  const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
    const [by, setBy] = useState("")
    const [rating, setRating] = useState("")
    
    const handleSubmit = (e) => {
       e.preventDefault()

       if(name !== "" && desc !== "" && price !== "" && by !== "" && rating !== "")
       {
        dispatch(setCourses({
           id: uuidv4(),
           name:name,
           description: desc,
           price: price,
           by: by,
           rating: rating
        })
        );
        navigate("/")
       } else{
        alert("Incorrect values, check and try again")
       }
    }

    return (
    <div className='add__course'>
      <Navbar/>
      <div className={classes.addCourseHeader}>
        <div style={{marginBottom: 10}}>
        <h1>Welcome To Champion's Digital Academy</h1>
        </div>
        <div>
        <h4>Sell Your Courses Here</h4>
        </div>
      </div>
      <div className={classes.modal}>
      <TextField
      variant='outlined'
      label="Name of Course"
      value={name}
      onChange={(e) => setName(e.target.value)}
      fullWidth
      style={{marginBottom: "20px"}}
      />
      <TextField
      variant='outlined'
      label="Course Description"
      value={desc}
      onChange={(e) => setDesc(e.target.value)}
      fullWidth
      style={{marginBottom: "20px"}}
      />
      <TextField
      variant='outlined'
      label="$$$ Price of the Course"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      fullWidth
      style={{marginBottom: "20px"}}
     
      />

<TextField
      variant='outlined'
      label="Course Creator"
      value={by}
      onChange={(e) => setBy(e.target.value)}
      fullWidth
      style={{marginBottom: "20px"}}
      />


<TextField
      variant='outlined'
      label="Course rating (out of 5)"
      value={rating}
      onChange={(e) => setRating(e.target.value)}
      fullWidth
      style={{marginBottom: "20px"}}
      />

   <Button
   variant='contained'
   size='large'
   style={{backgroundColor: "green", color: "white"}}
   onClick={handleSubmit}
   >
   Add Course
   </Button>
      
   </div>
   <Footer/>
    </div>
  )
}

export default AddCourse
