
import React from 'react'
import { makeStyles} from "@material-ui/core/styles"
import Card from "./card"
import {places} from "./model/places"
import useWindowsPosition from "./hook/useWindowsPosition"

const useStyles=makeStyles(({breakpoints})=>({
    root:{
        height:"120vh",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
        [breakpoints.down(700)]:{
            flexDirection:"column"
        },
        
            
        
    }
}))
const PlaceToVisit = () => {

    const styles=useStyles()
    const update= useWindowsPosition('header')
    return (
        <div className={styles.root} id="place-to-visit">
            <Card places={places[0] } checked={update}/>
            <Card places={places[1]} checked={update} />
        </div>
    )
}

export default PlaceToVisit