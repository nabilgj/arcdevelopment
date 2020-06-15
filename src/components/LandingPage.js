import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CallToAction from './ui/CallToAction';

import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/CustomSoftwareIcon.svg';
import mobileAppIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: '5em',
        [theme.breakpoints.down('md')]: {
            marginTop: '3em'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em'
        }
    },
    animation: {
        maxWidth: '50em',
        minWidth: '21em',
        marginTop: '2em',
        marginLeft: '5%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '30em',
        }
    },
    heroTextContainer: {
        minWidth: '21.5em',
        marginLeft: '1em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    buttonContainer: {
        marginTop: '1em'
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.SeaGreen,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark
        }
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: '0.8rem',
        height: 45,
        width: 145
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.8rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.SeaGreen,

    },
    subtitle: {
        marginBottom: '1em'
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: '12em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%'
    },
    revolutionCard: {
        position: 'absolute',
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: '10em',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '8em',
            paddingBottom: '8em',
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: '100%'
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%' 
    }
}));

const LandingPage = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            
            {/*---- Hero block ---- */}
            <Grid item>
                <Grid container direction="row" justify="flex-end" alignItems="center">

                    <Grid item sm className={classes.heroTextContainer}>

                        <Typography align="center" variant="h2"> 
                            Bringing West Cost Technology <br /> to the Midwest
                        </Typography>

                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button 
                                    className={classes.estimateButton}
                                    variant="contained"
                                    component={Link}
                                    to="/estimate"
                                    onClick={() => props.setValue(5)}> 
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button 
                                    variant="outlined" 
                                    className={classes.learnButtonHero}
                                    component={Link}
                                    to="/revolution"
                                    onClick={() => props.setValue(2)}> 
                                    <span style={{marginRight: 10}}> 
                                        Learn More 
                                    </span> 
                                    <ButtonArrow 
                                        width={15}
                                        height={15}
                                        fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>


                    <Grid item sm className={classes.animation}>
                        <Lottie 
                            options={defaultOptions} 
                            height={"100%"} 
                            width={"100%"} />
                    </Grid>

                </Grid>
            </Grid>


            {/*---- custom software block ---- */}
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    justify={matchesSM ? "center" : undefined }
                    className={classes.serviceContainer}>

                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete Digital Solution, from investigation to {" "}
                            <span className={classes.specialText}> celebration. </span>
                        </Typography>
                        <Button 
                            variant="outlined" 
                            className={classes.learnButton}
                            component={Link}
                            to="/customsoftware"
                            onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}>
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow 
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>

                    <Grid item>
                        <img 
                            className={classes.icon}
                            src={customSoftwareIcon} alt="Custom Software Icon" />
                    </Grid>

                </Grid>
            </Grid>


            {/*---- ios/android block ---- */}
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    justify={matchesSM ? "center" : "flex-end" }
                    className={classes.serviceContainer}>

                    <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            ios/android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalon
                            app { matchesSM ? null : <br /> } with either mobile platform.
                        </Typography>
                        <Button 
                            variant="outlined" 
                            className={classes.learnButton}
                            component={Link}
                            to="/mobileapps"
                            onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow 
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>

                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em"}}>
                        <img 
                            className={classes.icon}
                            src={mobileAppIcon} alt="Mobile Phone Icon" />
                    </Grid>

                </Grid>
            </Grid>

            {/*---- website block ---- */}
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    justify={matchesSM ? "center" : undefined }
                    className={classes.serviceContainer}>

                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for search Engines, built for speed
                        </Typography>
                        <Button 
                            variant="outlined" 
                            className={classes.learnButton}
                            component={Link}
                            to="/websites"
                            onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}>
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow 
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>

                    <Grid item>
                        <img 
                            className={classes.icon}
                            src={websitesIcon} alt="Website Icon" />
                    </Grid>

                </Grid>
            </Grid>


            {/*  The revolution block */}
            <Grid item>
                <Grid container justify="center" alignItems="center" style={{height: "100em", marginTop: '12em'}}>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{ textAlign: 'center'}}>

                                <Grid item>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Visionary insights coupled with cutting-edge technology is a recipe of our revolution.
                                    </Typography>
                                    <Button 
                                        variant="outlined" 
                                        className={classes.learnButtonHero}
                                        component={Link}
                                        to="/revolution"
                                        onClick={() => props.setValue(2)}> 
                                        <span style={{marginRight: 10}}> 
                                            Learn More 
                                        </span> 
                                        <ButtonArrow 
                                            width={15}
                                            height={15}
                                            fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>

                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>


            {/*  information block */}
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    alignItems="center" 
                    style={{height: "80em", marginTop: '12em'}}
                    className={classes.infoBackground}>
                    
                    <Grid 
                        item 
                        container 
                        style={{textAlign: matchesXS ? 'center' : 'inherit'}} 
                        direction={matchesXS ? 'column': "row"}>

                        {/* about item */}
                        <Grid 
                            item 
                            sm 
                            style={{marginLeft: matchesXS ? 0 : matchesSM ? "2em" : '5em'}}>
                            <Grid container style={{marginBottom: matchesXS ? '10em' : 0}} direction="column">
                                <Typography variant="h2" style={{color: 'white'}}>
                                    About Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Lets get started!
                                </Typography>
                                <Grid item>
                                    <Button 
                                        variant="outlined" 
                                        style={{color: 'white', borderColor: 'white'}} 
                                        className={classes.learnButton}
                                        component={Link}
                                        to="/about"
                                        onClick={() => props.setValue(3)}>
                                        <span style={{marginRight: 10}}> 
                                            Learn More 
                                        </span>
                                        <ButtonArrow 
                                            width={10}
                                            height={10}
                                            fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* contact item */}
                        <Grid 
                            item 
                            sm 
                            style={{marginRight: matchesXS ? 0 : matchesSM ? "2em" : '5em', textAlign: matchesXS ? 'center' : 'right'}}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{color: 'white'}}>
                                    Contact Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Say Hello! 
                                </Typography>
                                <Grid item>
                                    <Button 
                                        variant="outlined" 
                                        style={{color: 'white', borderColor: 'white'}}
                                        className={classes.learnButton}
                                        component={Link}
                                        to="/contact"
                                        onClick={() => props.setValue(4)}>
                                        <span style={{marginRight: 10}}> 
                                            Learn More 
                                        </span>
                                        <ButtonArrow 
                                            width={10}
                                            height={10}
                                            fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>


            {/* call to action */}
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>

        </Grid>
        
        );
}

// will go into App hs
export default LandingPage;
