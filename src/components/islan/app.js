import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import {CssBaseline ,Container} from "@material-ui/core"
import Header from "./header"
import PlaceToVisit from "./placeToVisit"

const useStyles=makeStyles({
    root:{
      minHeight:'100vh',
     // minWidth:'50vh',
      background:`url("https://images.pexels.com/photos/2307638/pexels-photo-2307638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center no-repeat `,
      backgroundSize:"cover",
     
    }
  })

  const Index =()=>{
    const styles=useStyles()

    return (
     <div className={styles.root}>
     <Container >
          <CssBaseline/>
     <Header/>
  <PlaceToVisit/>
     </Container>
  
     </div>
    );
  }

 
  export default Index