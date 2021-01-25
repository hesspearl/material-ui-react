import React , {useState} from 'react'
import {
    Button,
    ButtonGroup,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
    Container,
    Paper,
    Grid,
    AppBar,
    Toolbar,
    IconButton,
  } from "@material-ui/core";
  import { Save, Delete, Menu } from "@material-ui/icons";
  import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
  } from "@material-ui/core/styles";
  import { lime, red } from "@material-ui/core/colors";
  import "@fontsource/roboto";
  
  const useStyle = makeStyles({
    btn: {
      background: "linear-gradient(45deg , #FE6888 , #FF8E55)",
      border: 0,
      marginBottom: 15,
      borderRadius: 15,
      color: "white",
      padding: "5px 8rem",
    },
  });
  
  const theme = createMuiTheme({
    typography: {
      h2: {
        fontSize: "2.5rem",
        color: red[200],
      },
    },
    palette: {
      secondary: {
        main: lime[500],
      },
    },
  });
  

export default function Tutorial() {
    const [checked, setChecked] = useState(true);
    const styles = useStyle();
    return (
        <ThemeProvider theme={theme}>
        <Container>
          <div className="App">
            <header className="App-header">
              <AppBar>
                <Toolbar variant="dense">
                  <IconButton>
                    <Menu />
                  </IconButton>
                  <Typography variant="h6">MUI THEME</Typography>
                  <Button>clicck</Button>
                </Toolbar>
              </AppBar>
  
              <Typography variant="h2">welcome to MUI</Typography>
              <Typography variant="subtitle1">learn how use MUI</Typography>
  
              <Button className={styles.btn}> Test styled button</Button>
              <Grid container spacing={4} justify="center">
                <Grid item xs={6} sm={4} md={1} lg={7}>
                  <Paper style={{ height: 75, width: 50 }} />
                </Grid>
                <Grid item>
                  <Paper style={{ height: 75, width: 50 }} />
                </Grid>
                <Grid item>
                  <Paper style={{ height: 75, width: 50 }} />
                </Grid>
              </Grid>
              <TextField
                variant="outlined"
                placeholder="add text"
                label="your name"
                color="secondary"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    icon={<Save />}
                    checkedIcon={<Delete />}
                    inputProps={{
                      "aria-label": "secondary checkbox",
                    }}
                    onChange={(e) => {
                      setChecked(e.target.checked);
                    }}
                  />
                }
                label="Test box"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    inputProps={{
                      "aria-label": "secondary checkbox",
                    }}
                    onChange={(e) => {
                      setChecked(e.target.checked);
                    }}
                  />
                }
                label="Testing box"
              />
  
      
              <ButtonGroup variant="contained">
                <Button startIcon={<Save />} color="secondary">
                  save
                </Button>
                <Button startIcon={<Delete />} color="secondary">
                  delete
                </Button>
              </ButtonGroup>
            </header>
          </div>
        </Container>
      </ThemeProvider>
    )
}
