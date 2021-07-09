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


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:4,
    width:"90%",
    alignItems:"center",
    justifyContent:"center",
    
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
    
<div align="center">
    <div className={classes.root} align="center">
      <br></br>
      <Grid container spacing={3}>
        <Paper>
        <Grid item xs={12}>
        <div className={classes.root} style={{margin:"5px"}}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{"background-position-y":"top","backgroundPosition":"center",height:"160px",backgroundSize:"cover", 
      backgroundImage: `url("https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")` 
    }}>
        



      
          </Paper>
        </Grid>
        <Grid item xs container
  direction="row"
  justifyContent="flex-end"
  alignItems="baseline">
          
          <Grid item xs>

          <label align="left">I regard myself as a person who is fascinated by challenges in all sorts of way, work or life, that is merely based on my belief that evolving and adapting to challenges is the whole concept of being competitive and that is what i want to bring to the workplace. With the less experience that i have only means i have more room for improvement especially in programming languages, I have taught myself a few and am willing to learn and be productive as a software developer.</label>
          
        </Grid>
        <Grid item xs={1}>
          <div style={{width:"5px"}}>
        <FacebookIcon />
        <TwitterIcon  />
        <CallIcon />
        <EmailIcon  />
        <InstagramIcon  />
          </div>
        </Grid>



        </Grid>
       
      </Grid>
  
    </div>


          
        </Grid>
      </Paper>
      
        <Grid item  xs={12} sm={6}>
          <Paper className={classes.paper} elevation={0}>
         <h2 style={{color:"black"}}>Tertiary Education</h2>
         <Divider />
         
         <label>Institution: Tshwane University Of Technology</label><br></br><br></br>
         <label>Course: NDip: information Technology: Software development</label><br></br><br></br>
         <label>Faculty: Information & Communication Technology(ICT)</label><br></br><br></br>
         <label>Level: final level</label>

<h2 style={{color:"black"}}>High School</h2>
<Divider />
<p>School name   : Sibusiswe High School</p>

          </Paper>
        </Grid>
        <Grid item  xs={12} sm={6}>
          <Paper className={classes.paper} elevation={0}> 
          <h2 style={{color:"black"}}>Work Experience</h2>
          <Divider />
         <label> Seasonal Chairman</label>
         <br></br><br></br>
<label>Typo Vaal Mall</label>
<br></br>
<label>
November 2020 to February 2021
</label><br></br>
<br></br>
<label>
Seasonal CEO
</label>
<br></br><br></br>
<label>
Typo Vaal Mall
</label>
<br></br>
<label>
November 2</label>019 to January 2020

</Paper>
        </Grid>
        <Grid item xs={12} >
        <div>
          <Paper className={classes.paper} >
         <h2 style={{color:"black"}}> Skills Metricss</h2>
         <Divider />
         
         <div className={classes.root}>
    
      <h3>Python</h3>
      <BorderLinearProgress variant="determinate" value={85} />
      <h3>C++</h3>
      <BorderLinearProgress variant="determinate" value={70} />
      <h3>Typescript</h3>
      <BorderLinearProgress variant="determinate" value={90} />
      <h3>Javascript</h3>
      <BorderLinearProgress variant="determinate" value={70} />

    </div>


          </Paper>
          </div>
        </Grid>
    
      </Grid>
    </div>
    </div>
  );
}