import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// material ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

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
        marginBottom: '4em'
    },
    logo: {
        height: '8em'
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
    }
}));


const Header = props => {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChanged = (e, vallue) => {
        setValue(vallue)
    };

    useEffect(() => {
        if(window.location.pathname === '/' && value !== 0) {
            setValue(0);
        } else if(window.location.pathname === '/services' && value !== 1) {
            setValue(1);
        } else if(window.location.pathname === '/revolution' && value !== 2) {
            setValue(2); 
        } else if(window.location.pathname === '/about' && value !== 3) {
            setValue(3); 
        } else if(window.location.pathname === '/contact' && value !== 4) {
            setValue(4); 
        } else if(window.location.pathname === '/estimate' && value !== 5) {
            setValue(5); 
        } 
    }, [value])

    return (
        <React.Fragment>

            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button
                            onClick={() => setValue(0)}
                            component={Link}
                            to="/"
                            disableRipple
                            className={classes.logoContainer}>
                            <img src={logo} alt="company logo" className={classes.logo}/>
                        </Button>


                        <Tabs 
                            value={value}
                            onChange={handleChanged}
                            className={classes.tabContainer}
                            indicatorColor="secondary">
                            <Tab 
                                component={Link}
                                to="/"
                                className={classes.tab}
                                label="Home" />
                            <Tab 
                                component={Link}
                                to="/services"
                                className={classes.tab}
                                label="Services" />
                            <Tab 
                                component={Link}
                                to="/revolution"
                                className={classes.tab}
                                label="The Revolution" />
                            <Tab 
                                component={Link}
                                to="/about"
                                className={classes.tab}
                                label="About us" />
                            <Tab 
                                component={Link}
                                to="/contact"
                                className={classes.tab}
                                label="Contact us" />
                        </Tabs>

                        <Button 
                            variant="contained" 
                            color="secondary"
                            className={classes.button}>
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            
            <div className={classes.toolbarMargin}></div>

        </React.Fragment>
    );
};

// will go into App js
export default Header;