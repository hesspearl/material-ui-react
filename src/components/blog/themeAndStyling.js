import { createMuiTheme } from "@material-ui/core/styles";
import { amber, purple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[600],
    },
    secondary: {
      main: purple[600],
    },
  },
  typography:{
    fontFamily: "Texturina",
  }
});

export const useStyleAppBar = makeStyles({
  test: {
    
    fontWeight: "600",
  },
});

export const useStyleTitleTheme = makeStyles({
 root: {
height:'80vh',
background:` linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.5)), 
url('https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') `,
display:"flex",
justifyContent:"start",
alignItems:"center",
backgroundPosition:"center",
backgroundSize:"cover",
padding:"0 5rem"
  },

});

export const useStyleGrids = makeStyles((theme)=>({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary,
    marginTop:"5rem ",
    
  },
  gridList: {
    width:1000,
    height: 500,
  },
  author:{
    color:theme.palette.primary.main
  },
  contain:{
    padding:"2rem 0" ,
  }
  
}));