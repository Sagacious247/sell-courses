import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCourses } from '../features/CoursesSlice'
import Course from './Course'

const useStyles = makeStyles(() => ({
  coursesContent: {
    display: "flex",
    gap: 20,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: "40px 0",
    justifyContent: "space-between"
  },
  courses: {
    width: "95%",
    margin: " auto",
  },
  addButton: {
    textDecoration: "none",
    fontFamily: "Montserrat",
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "5px"
  }
}))

function Courses() {
  const classes = useStyles()
    const courses = useSelector(selectCourses)
  return (
    <div className={classes.courses}>
      <div className={classes.header}>
       <h1 style={{fontSize: 40, letterSpacing: "-1px", textDecoragtion: "underline", color: "green"}}>A place to sell all your courses online!</h1>
       <Link to="/addcourse" className={classes.addButton}>
          Sell a Course
        </Link>
      </div>

      <div className={classes.coursesContent}>
      {courses && courses.map((course) => (
        <Link className='link' to={`/${course.id}`}>
         <Course data={course}/>
      </Link>
     ))}
      </div>
    </div>
  )
}

export default Courses