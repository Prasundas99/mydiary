import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import Exit from '@material-ui/icons/ExitToApp';

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


import { useStyles } from "../styles/NavbarStyling";
import { Divider } from "@material-ui/core";

export default function Navbar() {
  const classes = useStyles();

  const [toggle, setToggle] = useState(false);

  //For media querries
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.height}>
        <Toolbar variant="dense">
          {/*Nav Header*/}
          <Typography variant="h4" className={classes.title}>
             MyDiary
          </Typography>

          {isMobile ? (
            <>
              {/*Nav items*/}
              <Typography variant="body2" className={classes.navItems}>
                Hello, Prasun Das
              </Typography>
              <Exit className={classes.exit} />
              <Typography variant="body2" className={classes.navItems}>
                  Logout
              </Typography>
              <Button color="inherit" className={classes.auth}>
                <AddIcon />    New
              </Button>
            </>
          ) : (
            <>
              {/*Mobile view navbar*/}
              <IconButton
                edge="start"
                className={classes.menuButton}
                onClick={() => setToggle(true)}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>

              {/*///      FOR MOBILE VIEW    ///*/}
              <Drawer
                anchor="right"
                open={toggle}
                onClose={() => setToggle(false)}
              >
                <List>
                  <ListItem button>
                    <ListItemText primary={"About Us"} className={classes.mobilenavItems} />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText primary={"Write Your Blog"}  className={classes.mobilenavItems}/>
                  </ListItem>
                  <Divider />

                  <ListItem button>
                    <ListItemText primary={"Login"}  className={classes.mobilenavItems} />
                  </ListItem>
                  <Divider />

                  
                </List>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}