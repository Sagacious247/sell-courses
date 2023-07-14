import { makeStyles } from '@material-ui/core'
import React from 'react'
import {  FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'
import WebLogo from '../img/WebLogo.png'
import googleplay from '../img/googleplay.png'
import appstore from '../img/appstore.png'

// import FacebookIcon from '@mui/icons-material/Facebook';

const useStyles = makeStyles(() => ({
   footer: {
    backgroundColor: "#004225",
    width: "100%",
    padding: 20,
   },
   text: {
    color: "white",
    fontSize: "14px",
    marginTop: 10,
    cursor: "pointer",
   },
   header: {
    color: "gold",
   },
   content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1300px",
    margin: "20px auto",
   },
   apps: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1300px",
    margin: "20px auto",
   },
   socialApps: {
    color: "white",
    marginLeft: 10
   },
   rights: {
    display: "flex",
    alignItems: "center",
    maxWidth: "1300px",
    margin: "20px auto",
   }
}))

function Footer() {
    const classes = useStyles()
  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
       <div className={classes.content}>
       <div className={classes.trendingCourses}>
         <h4 className={classes.header}>Trending Courses</h4>
         <p className={classes.text}>App Development</p>
         <p className={classes.text}>Data Analysis</p>
         <p className={classes.text}>Video Editing</p>
       </div>
       <div className={classes.joinUse}>
        <h4 className={classes.header}>Join Us</h4>
        <p className={classes.text}>Turtor Request</p>
        <p className={classes.text}>Affiliate Program</p>
       </div>
       <div className={classes.aboutus}>
        <h4 className={classes.header}>About Us</h4>
         <p className={classes.text}>About</p>
         <p className={classes.text}>Blogs</p>
       </div>
       <div className={classes.company}>
        <h4 className={classes.header}>Company</h4>
         <p className={classes.text}>Contact Us</p>
         <p className={classes.text}>Privacy Policy</p>
         <p className={classes.text}>Support Us</p>
       </div>
       </div>

       <div style={{color: "gray", width: "100%", height: "1px"}}/>

       <div className={classes.apps}>
        <div className={classes.googleApps}>
         <img src={googleplay} alt='' style={{width: "100px", marginRight: 10}}/>
         <img src={appstore} alt='' style={{width: "120px", marginRight: 10}}/>
        </div>
        <div className={classes.socialApps}>
          <FaFacebook/>
          <FaTelegram/>
          <FaInstagram/>
        </div>
       </div>
       <div className={classes.rights}>
         <img style={{width: "100px", height: "100px", objectFit: "contain"}} src={WebLogo} alt=""/>
         <p style={{color: "white",}}>&copy; 2023 Champions Academy. All Rights Reserved</p>
       </div>
      </div>
    </div>
  )
}

export default Footer;