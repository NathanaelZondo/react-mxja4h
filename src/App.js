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
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleIcon from '@material-ui/icons/People';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:4,
    width:"80%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#def7ff"
    
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
         
            <div style={{backgroundColor:"#1f4f4a",height:"20vh",backgroundSize:"cover", 
      backgroundImage: `url("https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")`}}>
          
            </div>
            <div  style={{backgroundColor:"yellow",height:"6.5vh",backgroundColor:"white",paddingTop:"5px",borderColor:"black",borderBottom:"2px",borderStyle:""}}>
          
              <h3>Software Developer</h3>
              
             
            
            </div>

         
        </Grid>
        <Grid item xs={8}>
         
         <div style={{backgroundColor:"white",height:"18.8vh",paddingLeft:"20px",paddingTop:"10px"}} align="left">
        
           <h3>Profile</h3>
           <label align="left">I regard myself as a person who is fascinated by challenges in all sorts of way, work or life, that is merely based on my belief that evolving and adapting to challenges is the whole concept of being competitive and that is what i want to bring to the workplace.</label>
         
         </div>

         
         <div  style={{backgroundColor:"black",height:"6.5vh",paddingTop:"5px"}}>
       
         <h3 style={{color:"white"}}>Nathanael Zondo</h3>
         
         
         </div>

      
     </Grid>




        <Grid item xs={3} style={{borderStyle:"solid",borderRight:"none",borderLeft:"none",borderBottom:"none",}} >

          <div style={{height:"79vh",backgroundColor:"white",paddingLeft: "20px",
    textAlign: 'left',}} >

          <div  style={{height:"auto",backgroundColor:"white"}} >
          <br></br>
          <div style={{width:"auto"}}>
       <label style={{marginBottom:"17px"}} > <FacebookIcon  />nat@facebook.com </label> <br></br>
       <label> <TwitterIcon  />  nat@twitter.com </label><br></br>
       <label> <CallIcon /> 0607854002 </label>  <br></br>
       <label> <EmailIcon  />nat@gmail.com  </label>  <br></br>
       <label> <InstagramIcon  /> nat@instagram.com </label> 
          </div>



          </div>
          <div className={classes.paper} style={{height:"auto",backgroundColor:"white"}} ><br></br><br></br>
          <label style={{color:"black"}}><RowingIcon style={{ fontSize: 20 } } /> Skills Metrics</label>
         <Divider style={{marginBottom:"15px"}} />
         
        
    
      <label style={{marginBottom:"50px"}}>Python</label>
      <BorderLinearProgress variant="determinate" value={85} style={{marginBottom:"10px"}} />
     
      <label> C++</label>
      <BorderLinearProgress variant="determinate" value={70} style={{marginBottom:"10px"}} />
     
      <label>Javascript</label>
      <BorderLinearProgress variant="determinate" value={90} style={{marginBottom:"10px"}} />
     
      <label>Typescript</label>
      <BorderLinearProgress variant="determinate" value={70} />
   



          </div>
          <div className={classes.paper} style={{height:"auto",backgroundColor:"white",}} >
          <br></br><br></br>
          <label style={{color:"black"}}><PeopleIcon style={{ fontSize: 20 } } />References</label>
         <Divider />
         <br></br>
         <label>Mr Sbanyoni</label><br></br>
         <label>Cell:0112853310</label><br></br>
         <label>Email:sbanyi@gmail.com</label><br></br><br></br>

         <label>Mrs Moletzi</label><br></br>
         <label>Cell:0112853310</label><br></br>
         <label>Email:molo32@gmail.com</label><br></br><br></br>



          </div>

          </div>


        </Grid>
        <Grid item xs={8}>
        <div className={classes.paper} style={{backgroundColor:"white",borderStyle:"solid",borderBottom:"none",borderRight:"none",borderTop:"none", padding: "20px",
    textAlign: 'left',height:"75vh"}} >
        <h2 style={{color:"black"}}><WorkIcon style={{ fontSize: 20 } } />Work Experience</h2>
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
November 2019 to January 2020</label>

<br></br><br></br>

<h2 style={{color:"black"}}><SchoolIcon style={{ fontSize: 20 } } />Tertiary Education</h2>
         <Divider />
         
         <label>Institution: Tshwane University Of Technology</label><br></br><br></br>
         <label>Course: NDip: information Technology: Software development</label><br></br><br></br>
         <label>Faculty: Information & Communication Technology(ICT)</label><br></br><br></br>
         <label>Level: final level</label>

<br></br><br></br>
<h2 style={{color:"black"}}><LocationCityIcon style={{ fontSize: 20 } } />High School</h2>
<Divider />
<br></br>
<label>School name  : Sibusiswe High School</label>
<br></br>
<label>Start Year   : 2008</label>
<br></br>
<label>End  Year     : 2014</label>

        </div>
        </Grid>
        
      </Grid>


    </div>
    </div>
  );
}