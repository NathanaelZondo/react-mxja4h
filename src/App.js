import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:4,
    width:"90%",
    alignItems:"center",
    justifyContent:"center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    
<div align="center">
    <div className={classes.root} align="center">
      
      <Grid container spacing={3}>
        <Paper>
        <Grid item xs={12}>
        <div className={classes.root} style={{margin:"5px"}}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{height:"170px",backgroundSize:"cover", 
      backgroundImage: `url("https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")` 
    }}>
        



      
          </Paper>
        </Grid>
        <Grid item xs container
  direction="row"
  justifyContent="flex-end"
  alignItems="baseline">
          
          <Grid item xs>
          <p>I regard myself as a person who is fascinated by challenges in all sorts of way, work or life, that is merely based on my belief that evolving and adapting to challenges is the whole concept of being competitive and that is what i want to bring to the workplace. With the less experience that i have only means i have more room for improvement especially in programming languages, I have taught myself a few and am willing to learn and be productive as a software developer.</p>
          
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
         <h2 style={{color:"black"}}> EDUCATION</h2>
         <Divider />
         <p>TERTIARY</p>

         <p>Institution: TSHWANE UNIVERSITY OF TECHNOLOGY</p>

         <p>Course: NDip: information Technology: Software development</p>

         <p>Faculty: Information & Communication Technology(ICT)</p>

         <p>Level: final level</p>

<h2>HIGH SCHOOL</h2>

<p>School name   : SIBUSISIWE HIGH SCHOOL</p>

          </Paper>
        </Grid>
        <Grid item  xs={12} sm={6}>
          <Paper className={classes.paper} elevation={0}> 
          <h2 style={{color:"black"}}> ATTRIBUTES</h2>
          <Divider />
<p>
I regard myself as a person who is fascinated by challenges in all sorts of way, work or life, that is merely based on my belief that evolving and adapting to challenges is the whole concept of being competitive and that is what i want to bring to the workplace. With the less experience that i have only means i have more room for improvement especially in programming languages, I have taught myself a few and am willing to learn and be productive as a software developer.</p>

</Paper>
        </Grid>
        <Grid item xs={12} >
        <div>
          <Paper className={classes.paper} >
         <h2 style={{color:"black"}}> WORK EXPERIENCE</h2>
         <Divider />
         
          <p>SEASONAL SALES ggggggggggggggfffffffffffffffffffffffffffffffffff</p>
<p>Typo Vaal Mallft4444444ft44444444444444tgggggggggtttttttttg4tttttttttttg6</p>
<p>November 2020 to February 2021t3bhhhhhhhhhhhhhbbbbbbbeyyyyyy6</p>

<p>SEASONAL SALES ASSISTANT</p>
<p>Typo Vaal Mall</p>
<p>November 2019 to January 2020</p>

          </Paper>
          </div>
        </Grid>
    
      </Grid>
    </div>
    </div>
  );
}