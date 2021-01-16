import React from "react";
import {
  Container,
  GridList,
  GridListTile,
  ListSubheader,
  GridListTileBar,
  IconButton,
  useMediaQuery
} from "@material-ui/core";
import { useStyleGrids } from "./themeAndStyling";
import { useTheme } from '@material-ui/core/styles';
import{StarBorder} from "@material-ui/icons"
import{tileData} from "./tileData"
import Pagination from '@material-ui/lab/Pagination';

const Grid = () => {
  const classes = useStyleGrids();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(500))
  const paging = useMediaQuery(theme.breakpoints.down(400))

  return (
    <Container>
      <div className={classes.root}>
        <GridList cellHeight={200} spacing={12} className={classes.gridList} cols={matches?1:3}>
       
          {tileData.map((tile) => (
            <GridListTile  key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
              classes={{
                subtitle:classes.author
              }}
                title={tile.title}
                subtitle={<span >by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                    color="secondary"
                  >
                    <StarBorder />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        <div className={classes.contain}>
          <Pagination count={paging? 4 :10} variant="outlined" color="secondary" />
        </div>
        
      </div>
      
    </Container>
  );
};

export default Grid;
