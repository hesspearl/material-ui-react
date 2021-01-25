import React from 'react'
import { Box, Typography } from "@material-ui/core";
import { useStyleTitleTheme}from './themeAndStyling'

const TitleImage = () => {
    const styles= useStyleTitleTheme()
    return (
        <Box className={styles.root}>
            <Typography color="primary" variant="h2"> React Blog</Typography>
        </Box>
    )
}

export default TitleImage
