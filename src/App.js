import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
          
          <Paper className={classes.paper}>
          PERSONAL ATTRIBUTES

I regard myself as a person who is fascinated by challenges in all sorts of way, work or life, that is merely based on my belief that evolving and adapting to challenges is the whole concept of being competitive and that is what i want to bring to the workplace. With the less experience that i have only means i have more room for improvement especially in programming languages, I have taught myself a few and am willing to learn and be productive as a software developer.




          </Paper>
        </Grid>
      
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
         <h1> EDUCATION</h1>

         <p>TERTIARY</p>

         <p>Institution     : TSHWANE UNIVERSITY OF TECHNOLOGY</p>

         <p>Course       : NDip: information Technology: Software development</p>

         <p>Faculty       : Information & Communication Technology(ICT)</p>

         <p>Level        : final level</p>

<h2>HIGH SCHOOL</h2>

<p>School name   : SIBUSISIWE HIGH SCHOOL</p>

          </Paper>
        </Grid>
        <Grid item  sm={4}>
          <Paper className={classes.paper}>  PERSONAL ATTRIBUTES
<p>
I regard myself as a person who is fascinated by challenges in all sorts of way, work or life, that is merely based on my belief that evolving and adapting to challenges is the whole concept of being competitive and that is what i want to bring to the workplace. With the less experience that i have only means i have more room for improvement especially in programming languages, I have taught myself a few and am willing to learn and be productive as a software developer.</p>

<p>
I regard myself as a person who is fascinated by challenges in all sorts of way, work or life, that is merely based on my belief that evolving and adapting to challenges is the whole concept of being competitive and that is what i want to bring to the workplace. With the less experience that i have only means i have more room for improvement especially in programming languages, I have taught myself a few and am willing to learn and be productive as a software developer.</p>


</Paper>
        </Grid>
        <Grid item sm={5} >
          <Paper className={classes.paper}>
         <h1> WORK EXPERIENCE</h1>

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