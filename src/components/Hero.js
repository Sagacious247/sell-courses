import { makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import CategoryIcon from '@material-ui/icons/Category';
import { Search } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Digital from '../img/Digital.png'
import Courses from './Courses';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
  hero: {
    backgroundColor: "#004225",
    color: "#fff",
    heigth: 300,
    width: "100%",
    position: "relative",
    padding: "40px",
  },
  contentLeft: {
    // marginBottom: "20px"
  },
  whiteHeader: {
    fontSize: "50px",
  },
  greenHeader: {
   color: "gold",
   fontSize: "50px",
   marginBottom: "20px"
  },
  subHeading: {
    fontSize: "16px",
    marginBottom: "20px",
    marginTop: "20px",
  },

  category: {
    width: "100%",
    borderRadius: "10px",
    margin: "auto",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
  },
  categoryField: {
  display: "flex",
  alignItems: "center",
  gap: 10,
  width: "100%",

  },
  textfield: {
   width: "100%",
   marginLeft: 20
  },
  categoryIcon: {
    backgroundColor: "green",
    heigth: 40
  },
  input: {
    
  },
  digitalImage: {
    position: "absolute",
    top: 5,
    right: 10,
    opacity: 0.5,
  },
  button: {
   backgroundColor: "green",
   width: "80%",
   padding: 10, 
   alignItems: "center",
   justifyContent: "center",
   display: "flex",
   cursor: "pointer",
  },
  input: {
    marginTop: 30,
    fontSize: "14px",
  },
  main: {
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: "#f3f3f3f3",
  }

}))

function Hero() {
    const classes = useStyles()
  return ( <>
    <div className={classes.hero}>
      <div className={classes.content}>
        <div className={classes.contentLeft}>

       <h1 className={classes.whiteHeader}>Find a perfect </h1>  
            <h1 className={classes.greenHeader}>Online Course</h1>
        <h5 className={classes.subHeading}>Take a course to advance your career</h5>
        <div className={classes.category}>
            <div className={classes.textfield}>
                <Search style={{ backgroundColor: "green", width: 30, height: 30, borderRadius: 5, size: 5}}/>
          <TextField
          style={{width: "90%",}}
          placeholder='Search online courses...'
          />
            </div>
           <div className={classes.categoryField}>
          <CategoryIcon className={classes.categoryIcon}/>
            <p style={{color: "green"}}>All Categories</p>
            <div>
            <ArrowDropDownIcon style={{color: "green"}}/>
            </div>
           </div>
           <div className={classes.button}>
             <button style={{backgroundColor: "transparent", border: "none", color: "white"}}>SEARCH</button>
           </div>
        </div>
        </div>
        <div className={classes.digitalImage}>
          <img src={Digital} alt=''/>
        </div>
        <p className={classes.input}>
            <strong style={{color: "gold", marginRight: 10}}>Popular Search:</strong>
            <strong>Graphics Design, Trade and Make Money Course, Web Development</strong>
        </p>
      </div>

    </div>
      <div className={classes.main}>
       <Courses/>
      </div>
      <Footer/>
  </>
  )
}

export default Hero
