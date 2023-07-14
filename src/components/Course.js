import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  course: {
    backgroundColor: "white",
    gap: 10,
    padding: "10px 15px",
    height: 300,
    flex: 1
  },
  courseTittle: {
    color: "green",
    fontWeight: 800,
    fontSize: "35px",
    letterSpacing: "-1px",
    textDecoration: "underline",
    textDecorationColor: "green",
    textAlign: "center",
  },
  courseDescription: {
    color: "#333",
    padding: 5
  },
  coursePrice: {
    color: "#333",
    padding: 5,
  },
  courseBy: {
    color: "#333",
    padding: 5,
  },
  rating: {
    color: "#333",
    padding: 5,
  }
}))

function Course({data}) {
  const classes = useStyles()
  return (
    <div className={classes.course} style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)"}}>
      <div>
        <h1 className={classes.courseTittle}>{data.name}</h1>
        <p className={classes.courseDescription}>{data.description}</p>
      </div>
      <diV>
        <h3 className={classes.coursePrice}>${data.price}</h3>
        <h3 className={classes.courseBy}>by {data.by}</h3>
        <p className={classes.rating}>Rating {data.rating}</p>
      </diV>
    </div>
  )
}

export default Course
