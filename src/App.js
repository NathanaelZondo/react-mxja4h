import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
        
<img src="https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="300" height="300" style={{"box-shadow": "-3px 1px 22px 9px rgba(0,0,0,0.27)"}}/>


      
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
    
      </Grid>
    </div>


          
        </Grid>
      
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
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
        <Grid item  sm={4}>
          <Paper className={classes.paper}> 
          <h2 style={{color:"black"}}> ATTRIBUTES</h2>
          <Divider />
<p>
I regard myself as a person who is fascinated by challenges in all sorts of way, work or life, that is merely based on my belief that evolving and adapting to challenges is the whole concept of being competitive and that is what i want to bring to the workplace. With the less experience that i have only means i have more room for improvement especially in programming languages, I have taught myself a few and am willing to learn and be productive as a software developer.</p>

</Paper>
        </Grid>
        <Grid item sm={5} >
          <Paper className={classes.paper}>
         <h2 style={{color:"black"}}> WORK EXPERIENCE</h2>
         <Divider />
          <p>SEASONAL SALES ASSISTANT</p>
<p>Typo Vaal Mall</p>
<p>November 2020 to February 2021</p>

<p>SEASONAL SALES ASSISTANT</p>
<p>Typo Vaal Mall</p>
<p>November 2019 to January 2020</p>

          </Paper>
        </Grid>
    
      </Grid>
    </div>
  );
}