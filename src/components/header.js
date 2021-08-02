import React, {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& a':{
      textDecoration:'none',
      color:'white',
      margin:'0 20px',
    },
  },
  menuButton: {
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  listMenu:{
    marginLeft: 'auto',
    display:'none',
    '& a':{
      textDecoration:'none',
      color:'white',
      margin:'0 20px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  drawer:{
    width:'300px'
  }
}));

const Header = ({ siteTitle }) => {
  
  const [openDrawer,setOpenDrawer]=useState(false)

  const classes = useStyles();
  
  return(
  <div className={classes.root}>
      <AppBar position="static" style={{padding:'20px 0', background:'#004049'}}>
        <Toolbar variant="dense" className="header">
          <Typography style={{fontWeight:'bold'}} variant="h5" color="inherit">
            <Link to="/"><span className="row-left"></span> <span className="logo">RC</span> <span className="row-right"></span></Link>
          </Typography>
          <div className={classes.listMenu}>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>{setOpenDrawer(true)}}>
            <MenuIcon/>
          </IconButton>
          <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
            <div className={classes.drawer}>
              <div className="drawer-menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
