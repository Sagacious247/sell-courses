import { makeStyles } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectCourses } from '../features/CoursesSlice';
import Navbar from './<Navbar';
import Description from './Description';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
  indCourseContainer: {
    backgroundColor: "#004225",
    height: 500,
  }, indCourseContent: {
   display: "flex",
   gap: 30,
   padding: "30px 100px",
  },
  indContentLeft:{
    backgroundColor: "white",
    height: 400,
    padding: 20,
    borderRadius: 10,
  },
  mainIndCourse: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  buyButton: {
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: 10,
    fontSize: "18px",
    width: "100%",
    borderRadius: 10
  },
  indContentRight: {
    color: "white",
    gap: 10,
  },
  individual: {
    backgroundColor: "#f3f3f3"
  }
}))

function IndCourse() {
  const classes = useStyles()
    const { id } = useParams();
    const courses = useSelector(selectCourses)

  return (
    <div className={classes.indcourse}>
      <Navbar/>
      <div className={classes.indCourseContainer}>
        <div className={classes.indCourseContent}>
         <div className={classes.indContentLeft}>
         {courses && courses.map((course) => 
      id === course.id ? 
      <div className={classes.mainIndCourse}>
       {<h1 style={{marginBottom: 20,}}>{course.name}</h1>}
       <span >{course.name}</span>
       <div>
        <p>  Description : {course.description}</p>
        <h1>${course.price}</h1>
       </div>
       <h4>{course.rating}/5</h4>
       <button className={classes.buyButton}>Buy Now</button>
      </div> : "")}
         </div>
         <div className={classes.indContentRight}>
          <h2>The Complete Practical Guide To Finacial Freedom </h2>
          <p>Learn the techniques involve to wealth and Abundance</p>
         </div>
        </div>
      </div>
      <div className={classes.individual}>
      <Description/>
      </div>
      <Footer/>
    </div>
  )
}

export default IndCourse
