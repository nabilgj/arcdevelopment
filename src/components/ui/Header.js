import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// for header
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

// for creating inline styles
import { makeStyles } from '@material-ui/core/styles';

// for navigation menu on header
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

// for hover over menu options on services
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// drawer navigation for mobile devices
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// menu Items inside drawer navigation for mobile devices
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// for media queries
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
};

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1.25em'
        }
    },
    logo: {
        height: '8em',
        [theme.breakpoints.down('md')]: {
            height: '7em'
        },
        [theme.breakpoints.down('xs')]: {
            height: '5.5em'
        }
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: '45px'
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: 'white',
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1
        }
    },
    drawerIcon: {
        height: '35px',
        width: '35px',
        color: theme.palette.common.SeaGreen
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.SeaGreen
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}));


const Header = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    // for passing index of current tab item being clicked
    const handleChanged = (e, newValue) => {
        props.setValue(newValue);
    };

    // for getting current element by mouseover on service tab 
    // and showing pop over menu on servicies
    const handleClicked = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };

    // to close the pop over menu on click of any menu item
    const handleClosed = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    const handleMenuItemClicked = (e, index) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(index);
    };

    const menuOptions = [
        { name: 'Services', link: "/services", activeIndex: 1, selectedIndex: 0 },
        { name: 'Custom Software Development', link: "/customsoftware", activeIndex: 1, selectedIndex: 1 },
        { name: 'Mobile App Development', link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
        { name: 'Website Development', link: "/websites", activeIndex: 1, selectedIndex: 3 }
    ];

    const routes = [
        { name: 'Home', link: "/", activeIndex: 0 },
        { name: 'Services', link: "/services", activeIndex: 1, ariaOWns: anchorEl ? "simple-menu" : undefined, ariaHaspopup: anchorEl ? "true" : undefined, mouseOver: event => handleClicked(event)},
        { name: 'The Revolution', link: "/revolution",activeIndex: 2},
        { name: 'About Us', link: "/about", activeIndex: 3},
        { name: 'Contact Us', link: "/contact", activeIndex: 4}
    ];

    useEffect(() => {

        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if(props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex);
                        if(route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;

                default: 
                    break;
            }
        });
    }, [props.value, menuOptions, props.selectedIndex, routes, props]);

    const tabs = (
        <React.Fragment>
            <Tabs 
                value={props.value}
                onChange={handleChanged}
                className={classes.tabContainer}
                indicatorColor="secondary">

                {routes.map((route, index) => (
                    <Tab 
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOWns}
                        aria-haspopup={route.ariaHaspopup}
                        onMouseOver={route.mouseOver}
                    />
                ))}
                
            </Tabs>

            <Button 
                variant="contained" 
                color="secondary"
                className={classes.button}>
                Free Estimate
            </Button>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClosed}
                classes={{paper: classes.menu}}
                MenuListProps={{ onMouseLeave: handleClosed }}
                elevation={0}
                keepMounted
                style={{ zIndex: 1302 }}>

                {menuOptions.map((option, index) => {
                    return (
                        <MenuItem 
                            key={option.name}
                            component={Link}
                            to={option.link}
                            classes={{ root: classes.menuItem }}
                            onClick={(e) => {handleMenuItemClicked(e, index); props.setValue(1); handleClosed()}}
                            selected={index === props.selectedIndex && props.value === 1}>
                            {option.name}
                        </MenuItem>
                    );
                })}
            </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>

            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}>
                
                <div className={classes.toolbarMargin}/>

                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}}
                            divider
                            button
                            component={Link}
                            to={route.link}
                            selected={ props.value === route.activeIndex }
                            classes={{ selected: classes.drawerItemSelected }}>
                            <ListItemText
                                disableTypography
                                className={classes.drawerItem}>
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}

                    <ListItem
                        divider
                        button
                        onClick={() => {setOpenDrawer(false); props.setValue(5)}}
                        component={Link}
                        to="/estimate"
                        classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
                        selected={ props.value === 5 }>

                        <ListItemText 
                            disableTypography
                            className={ classes.drawerItem }>
                            Free Estimate
                        </ListItemText>

                    </ListItem>

                </List>
            </SwipeableDrawer>

            <IconButton 
                disableRipple
                onClick={() => setOpenDrawer(!openDrawer)}
                className={classes.drawerIconContainer}>
                <MenuIcon 
                    className={classes.drawerIcon}
                />
            </IconButton>

        </React.Fragment>
    );

    return (
        <React.Fragment>

            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button
                            onClick={() => props.setValue(0)}
                            component={Link}
                            to="/"
                            disableRipple
                            className={classes.logoContainer}>
                            <img src={logo} alt="company logo" className={classes.logo}/>
                        </Button>


                        {matchesMD ? drawer : tabs}

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            
            <div className={classes.toolbarMargin}></div>

        </React.Fragment>
    );
};

// will go into App js
export default Header;