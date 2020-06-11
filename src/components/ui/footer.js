import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../assets/footerAdornment.svg'
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down('md')]: {
            width: "20em"
        },
        [theme.breakpoints.down('xs')]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: "0.75rem",
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: "3em"
    },
    icon: {
        height: '2em',
        width: '2em',
        [theme.breakpoints.down('xs')]: {
            height: '1.5em',
            width: '1.5em'
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: "1.5em",
        [theme.breakpoints.down('xs')]: {
            right: '0.6em'
        }
    }
}));

const Footer = props => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid 
                    container
                    justify="center"
                    className={classes.mainContainer}>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid 
                                item
                                className={classes.link}
                                component={Link}
                                to="/"
                                onClick={() => props.setValue(0)}> 
                                    Home 
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid 
                                item
                                className={classes.link}
                                component={Link}
                                to="/services"
                                onClick={() => {props.setValue(1); props.setSelectedIndex(0)}}>
                                    Services
                            </Grid>
                            <Grid 
                                item
                                className={classes.link}
                                component={Link}
                                to="/customsoftware"
                                onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}>
                                    Custom Software Developments
                            </Grid>
                            <Grid 
                                item
                                className={classes.link}
                                component={Link}
                                to="/mobileapps"
                                onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>
                                    Mobile App Development
                            </Grid>
                            <Grid 
                                item
                                className={classes.link}
                                component={Link}
                                to="/websites"
                                onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}>
                                    Website Development
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid 
                                item
                                className={classes.link}
                                component={Link}
                                to="/revolution"
                                onClick={() => props.setValue(2)}>
                                    The Revolution
                            </Grid>
                            <Grid 
                                item
                                className={classes.link}
                                component={Link}
                                to="/revolution"
                                onClick={() => props.setValue(2)}>
                                    Vision
                            </Grid>
                            <Grid 
                                item
                                className={classes.link}
                                component={Link}
                                to="/revolution"
                                onClick={() => props.setValue(2)}>
                                    Technology
                            </Grid>
                            <Grid 
                                item
                                className={classes.link}
                                component={Link}
                                to="/revolution"
                                onClick={() => props.setValue(2)}>
                                    Process
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/about"
                                onClick={() => props.setValue(3)}>
                                    About Us
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/about"
                                onClick={() => props.setValue(3)}>
                                    History
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/about"
                                onClick={() => props.setValue(3)}>
                                    Team
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid 
                                item
                                className={classes.link}
                                component={Link}
                                to="/contact"
                                onClick={() => props.setValue(4)}>
                                    Contact Us
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Hidden>

            <img 
                className={classes.adornment}
                src={footerAdornment} 
                alt="Black decorative slash" />

            <Grid 
                container 
                justify="flex-end"
                spacing={2}
                className={classes.socialContainer}>
                <Grid 
                    item
                    component={"a"}
                    href="https://www.facebook.com"
                    rel="noopener noreferrer"
                    target="_blank">
                    <img 
                        alt="facebook logo" 
                        src={facebook}
                        className={classes.icon}
                        />
                </Grid>
                <Grid 
                    item
                    component={"a"}
                    href="https://www.twitter.com"
                    rel="noopener noreferrer"
                    target="_blank">
                    <img 
                        alt="twitter logo" 
                        src={twitter}
                        className={classes.icon}
                        />
                </Grid>
                <Grid 
                    item
                    component={"a"}
                    href="https://www.instagram.com"
                    rel="noopener noreferrer"
                    target="_blank">
                    <img 
                        alt="instagram logo" 
                        src={instagram}
                        className={classes.icon}
                        />
                </Grid>
            </Grid>
        </footer>
    )
};

// will go into App js
export default Footer;