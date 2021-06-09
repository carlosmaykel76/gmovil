import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItems from './MenuItems';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 0,          
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      [theme.breakpoints.down("xs")]: {
        flexGrow: 1
      }
    },
    headerOptions: {
      display: "flex",
      flex: 1,     
    }
}));

const NavBar = (props) => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    return(
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <Typography variant="h6" className={classes.title}>
                        ...
                    </Typography>
                    { isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal:"right"
                                }}
                                keepMounted transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open = {open}
                                onClose = {() => setAnchorEl(null)}
                            >
                                {MenuItems.map(menuItem => {                                    
                                    return(
                                        <MenuItem onClick={() => handleMenuClick(menuItem.pageURL)}>
                                            { menuItem.menuTitle }
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </>
                    ):(
                        <div className={classes.headerOptions}>
                            {MenuItems.map(menuItem => {                                    
                                return(
                                    <MenuItem onClick={() => handleMenuClick(menuItem.pageURL)} >
                                        { menuItem.menuTitle }
                                    </MenuItem>
                                );
                            })}                           
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
} 

export default withRouter(NavBar)
  
