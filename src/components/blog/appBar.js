import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyleAppBar}from './themeAndStyling'

const HeaderBar = () => {

    const styles=useStyleAppBar()

  return (
    <AppBar color="primary">
      <Toolbar >
        <Typography className={styles.test} color="secondary" variant="h4">
         
          Blog
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar