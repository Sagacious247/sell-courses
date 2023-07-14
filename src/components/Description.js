import React from 'react'
import { makeStyles } from '@material-ui/core'
import Cert from '../img/Cert.jpg'
import Courses from './Courses';

const useStyles = makeStyles(() => ({
    description: {
        
    },
    descriptionContent: {
        backgroundColor: "white",
        maxWidth: "1200px",
        padding: "40px 30px",
        height: "100vh",
        marginLeft: 100,
    },
    suggestionHeader: {
      display: "flex",
      justifyContent: "space-between",
      padding: "40px 100px",
    }
    // descriptionContent: {
    //   gat: 20,
    // }
}))

function Description() {
    const classes = useStyles()
  return (
    <div className={classes.description}>
        <div className={classes.descriptionContent}>

      <h3 style={{marginBottom: "20px"}}>DESCRIPTION</h3>
      <div style={{margin: "10px 0", lineHeight: 1.3}}>
        <div>
          <p style={{marginBottom: 20}}>Are you interested in taking your project management skills to the next level? Look no further than our comprehensive course, designed to take you from beginner to pro in no time.</p>
        </div>
        <p style={{marginBottom: 20}}> Project management is the practice of initiating, planning, executing, controlling, and closing the work of a team to achieve specific goals and meet specific success criteria. It involves the successful completion of projects, from start to finish, on time and within budget. In today's fast-paced business world, project management skills are more important than ever, and can help you stand out in a competitive job market.</p>

        <p style={{marginBottom: 20}}>This course is designed for anyone looking to improve their project management skills, regardless of their experience level. Whether you're a beginner just starting out or an experienced professional looking to hone your skills, our course is the perfect fit.</p>
        <p style={{marginBottom: 20}}>Throughout the course, you'll learn practical techniques and tools that will streamline your workflow and help you achieve your project goals. You'll receive hands-on experience using popular project management software, including Asana and Slack, that will help you become a pro in no time. You'll also learn how to effectively communicate with team members, manage resources, and navigate common project management challenges.</p>
      <p >
      </p>
      </div>
      <h5 style={{margin: "20px 0", fontSize: "16px"}}>By the end of the course, you'll have the skills and knowledge needed to confidently take on any project, big or small. You'll be able to:</h5>
      <p style={{marginBottom: 20}}>Initiate, plan, execute, and close projects that meet specific goals and success criteria</p>
      <p style={{marginBottom: 20}}>Identify and manage project risks, issues, and changes</p>
      <p style={{marginBottom: 20}}>Use popular project management software, including Asana and Slack</p>
      <p style={{marginBottom: 20}}>Communicate effectively with team members and stakeholders</p>
      <p style={{marginBottom: 20}}>Manage resources, including time, budget, and personnel
</p>
  <p style={{marginBottom: 20}}>
  Enroll in our course today and unlock your true potential as a project manager!"
  </p>
  <h6 style={{marginBottom: 20, fontSize: "14px", lineHeight: 1.3}}>
  Frequently Asked Questions <br/>
Are the videos downloadable?
  </h6>
  <p style={{marginBottom: 20}}>The videos are highly compressed and downloadable.</p>
  <h5 style={{marginBottom: 20}}>What are the course requirements?</h5>
  <p style={{marginBottom: 20}}>Access to a laptop or computer.</p>
  <h5 style={{marginBottom: 20}}>You will be certified after the course.</h5>
  <p style={{marginBottom: 20}}>Yes, a certificate of completion will be issued at the end of the course.</p>

  <div>
    <img  src={Cert.jpg} alt="" />
  </div>

        </div>
        <div className={classes.suggestion}>
        </div>
          <div className={classes.suggestionHeader}>
            <span>YOU MAY LIKE</span>
            <p>See all</p>
            <Courses/>
          </div>
    </div>
  )
}

export default Description
