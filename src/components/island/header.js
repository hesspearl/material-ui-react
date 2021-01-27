import React , {useState , useEffect}from "react";
import { AppBar, Typography, IconButton, Toolbar , Collapse} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import {grey, brown} from "@material-ui/core/colors"
import { Sort,ExpandMore } from "@material-ui/icons";
import {Link} from "react-scroll"

const useStyles=makeStyles(({breakpoints})=>({
   root:{
        display:"flex",
        hight:"100%",
        minHeight:"100vh",
        justifyContent:"center",
        alignItems:"center",
        

    },
    appBar:{
        background:"none",
     
       
    },
    appBarTitle:{
        flexGrow:'1',
        color:grey[200],
        fontFamily:'Playfair Display',
        fontSize:"1.7rem",
        [breakpoints.down(300)]:{
            fontSize:"1.5rem",
         }
    
    },
    appBarWrapper:{
        width:"80%",
        margin:"0 auto"
    },
    icon:{
        color:grey[100],
        fontSize:'2rem'
    },
    colorSecond:{
        color:brown[200],
       
    },
    goDown:{
        color:grey[200],
        fontSize:"3rem",
        textAlign:"center",
       
    },
    title:{
        fontSize:"3rem",
        textAlign:"center",
        color:grey[200],
        fontFamily:'Nunito',
        [breakpoints.down(300)]:{
           fontSize:"2rem",
        }
    },
    titleContainer:{
        width:"100%",
        textAlign:"center",
        marginBottom:'10rem'
    }
  }))
const Header = () => {
    const styles=useStyles()
const [checked, setChecked] = useState(false)

useEffect(() => {
    setChecked(!checked)
}, [])
  return (
    <div className={styles.root} id="header">
      <AppBar className={styles.appBar} position="absolute">
      <Toolbar className={styles.appBarWrapper}>
           <Typography variant="h4" className={styles.appBarTitle} >My 
           <span className={styles.colorSecond}>Island</span></Typography>
        <IconButton >
          <Sort className={styles.icon}/>
        </IconButton>
      </Toolbar>
      </AppBar>
      <Collapse
       in={checked}
      timeout={1000}
     
      >
            <div className={styles.titleContainer}>
<Typography variant="h4" className={styles.title} >welcome to my 
 <span className={styles.colorSecond}>Island</span>
 </Typography>
 <Link to="place-to-visit" smooth={true}>
     <IconButton>
     <ExpandMore className={styles.goDown}/>
 </IconButton>
 </Link>
 
</div>
      </Collapse>
    
    </div>
  );
};


export default Header