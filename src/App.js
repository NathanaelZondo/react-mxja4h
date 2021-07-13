import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinearProgress from '@material-ui/core/LinearProgress';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import RowingIcon from '@material-ui/icons/Rowing';
import LocationCityIcon from '@material-ui/icons/LocationCity';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:4,
    width:"75%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#def7ff"
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
    
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1d2638',
  },
}))(LinearProgress);

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'dark' ? 500 : 900],
  },
  top: {
    color: '#1d2638',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const classe = useStylesFacebook();
  return (
    
<div align="center" style={{backgroundColor:"#e6f1f2"}}>
    <div className={classes.root} align="center" style={{backgroundColor:"#e6f1f2"}}>
    
    <Grid container spacing={0}>
        <Grid item xs={3}>
         
            <div style={{backgroundColor:"#1f4f4a",height:"20vh"}}>Good morning
            <br></br><br></br><br></br> <br></br><br></br><br></br>
            </div>
            <div  style={{backgroundColor:"yellow"}}>
          
              hihi
              <br></br><br></br><br></br>
            
            </div>

         
        </Grid>
        <Grid item xs={9}>
         
         <div style={{backgroundColor:"red",height:"20vh"}}>Good morning
         <br></br><br></br><br></br> <br></br><br></br><br></br>
         </div>
         <div  style={{backgroundColor:"yellow"}}>
       
           hihi
           <br></br><br></br><br></br>
         
         </div>

      
     </Grid>




        <Grid item xs={3} >
          <div className={classes.paper} style={{height:"75vh",backgroundColor:"blue"}} >xs=6</div>
        </Grid>
        <Grid item xs={9}>
        <div className={classes.paper} style={{height:"75vh",backgroundColor:"green"}} >xs=6</div>
        </Grid>
        
      </Grid>


    </div>
    </div>
  );
}