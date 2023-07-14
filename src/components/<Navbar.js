import { AppBar, Avatar, Container, makeStyles, TextField, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import WebLogo from '../img/WebLogo.png'
import {FaBars, FaBlog, FaJoint, FaTimes} from'react-icons/fa'
import { Category, ContactMailRounded, Explore, Flag, Home, Info, InsertChartRounded, Search } from '@material-ui/icons'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Dropdown from './Dropdown'
import './navbar.css';
import AuthModal from './Authentication/AuthModal'
import { Link, useNavigate } from 'react-router-dom'

const useStyles = makeStyles(() => ({
 
    container: {
        display: "flex",
        justifyContent: "space-between"

    },
    title: {
        color: "green",
        fontFamily: "Montserrat",
        cursor: "pointer",
        fontWeight: "bolder"
    },
    appLeft: {
        display: "flex",
        alignItems: "center",
        width: "50%",
        flex: 1
    },
    textfield: {
        backgroundColor: "#F0FFFF",
        padding: "5px",
        marginLeft: 30,
        width: "30%",
        display: "flex",
        alignItems: "center",
    },
    menu: {
        backgroundColor: "green",
        color: "#fff",
        padding: 3,
        width: "25px",
        height: "25px",
        cursor: "pointer",
    },
    category: {
        marginLeft: 10,
    },
    search: {
      backgroundColor: "green",
      padding: 10,
      cursor: "pointer",
      color: "white",
    },
    listings: {
        display: "flex",
        padding: "10px",
        gap: 30,
        color: "white",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: "#077C7C",
        }
    },
    appbarRight: {
        display: "flex",
        alignItems: "center",
        gap: 30
    }

}))
function Navbar() {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const navigate = useNavigate()

   const onMouseLeave = () => {
    if(window.innerWidth < 960) {
        setDropdown(false)
    } else{
        setDropdown(false)
    }
   }

    const handleClick = () => {
        setOpen(!open)
    }

    const classes = useStyles()
  return (
    <>
   <AppBar color="white" className={classes.header}  position='sticky'>
    <Container  maxWidth="xl">
      <Toolbar className={classes.container}>
          <div className={classes.appLeft}>
            <div className={classes.hamburger}
            onClick={handleClick}
            >
                {
                 open ? (<FaTimes className={classes.menu}/>)
                : (<FaBars className={classes.menu}/>)
                }
            </div>
        <img
        style={{width: "100px", cursor: "pointer"}}
        src={WebLogo} alt=''
        onClick={() => navigate("/")}/>
        <Typography className={classes.title}>
            Champions Digital Academy
        </Typography>
        <div className='category'

          >
           <Category
           className="nav-item"
            style={{color: "white", backgroundColor: "green", padding: 5}}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            />
          {dropdown && <Dropdown/>}
         
        </div>

        <div className={classes.textfield}>
            <Search className={classes.searchIcon}/>
         <TextField
         style={{width: "100%"}}
          placeholder='Search for course'
          onChange={(e) => setSearch(e.target.value)}
         />
        <p className={classes.search}>SEARCH</p>
        </div>
          </div>
        <div className={classes.appbarRight}> 
        <Link to='/profile/'>
         <Avatar />
        </Link>
         <AddShoppingCartIcon/>
        </div>

        <AuthModal/>
      </Toolbar>
    </Container>
   </AppBar>

   <div>
    <ul className={ open ? "nav-menu active" : "nav-menu" }>
          <Link to="/">
        <li className={classes.listings} >
            <Home/>
           <p>Home</p>
        </li>
          </Link>
        <li className={classes.listings}>
         <Explore/>
          <p>Explore Courses</p>
        </li>
        <li className={classes.listings}>
        <CardGiftcardIcon/>
        <p>Categories</p>
        </li>
        <li className={classes.listings}>
            <FavoriteBorderIcon/>
            <p>Saved Courses</p>
        </li>
        <div className={classes.divider}/>
        <li className={classes.listings}>
            <InsertChartRounded/>
          <p>Become an instructor</p>
        </li>
        <li className={classes.listings}>
          <SupervisedUserCircleIcon/>
          <p>Affiliate Program</p>
        </li>
        <li className={classes.listings}>
            <FaBlog/>
            <p>Blogs</p>
        </li>
        <li className={classes.listings}>
            <FaJoint/>
            Join our Developers
        </li>
        <li className={classes.listings}>
        <ContactMailRounded/>
        <p>Contact us</p>
        </li>
        <li className={classes.listings}>
            <Info/>
            <p>About us</p>
        </li>
        <li className={classes.listings}>
            <Flag/>
            <p>Support</p>
        </li>
        <li className={classes.listings}>
          <HelpOutlineIcon/>
          <p>Privacy Policy</p>
        </li>
        <div className={classes.divider}/>
    </ul>
   </div>
    </>
  )
}

export default Navbar;
