import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";
import { grey, brown } from "@material-ui/core/colors";

const useStyles = makeStyles(({breakpoints})=>({
  root: {
    maxWidth: 450,
    background: "rgba(0,0,0,0.5)",
  },
  media: {
    height: 200,
    [breakpoints.down(300)]:{
       height:150
     }
  },
  title: {
    fontFamily: "Nunito",
    color: grey[50],
    fontWeight: "bold",
  },
  post: {
    fontFamily: "Nunito",
    color: grey[300],
    fontSize: "1rem",
  },
  btn: {
    fontFamily: "Playfair Display",
    color: brown[100],
  },
}));

export default function ImageCard({ places, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} timeout={2000}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={places.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              className={classes.title}
            >
              {places.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.post}
            >
              {places.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" className={classes.btn}>
            Share
          </Button>
          <Button size="small" className={classes.btn}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}
