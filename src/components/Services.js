import React from 'react'
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/CustomSoftwareIcon.svg';
import mobileAppIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
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
        marginTop: '10em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
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
})) ;

const Services = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction="column">

            <Grid item style={{
                    marginLeft: matchesSM ? 0 : '5em',
                    marginTop: matchesSM ? '1em' : '2em' }} >
                <Typography 
                    variant="h2" 
                    gutterBottom
                    align={matchesSM ? 'center' : undefined} >
                    Services
                </Typography>
            </Grid>

            {/*---- ios/android block ---- */}
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    style={{marginTop: matchesSM ? '1em' : '5em'}}
                    justify={matchesSM ? "center" : "flex-end" }
                    className={classes.serviceContainer}>

                    <Grid 
                        item 
                        style={{ 
                            textAlign: matchesSM ? "center" : undefined, 
                            width: matchesSM ? undefined : '35em' }}>
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
                            src={mobileAppIcon} alt="Mobile Phone Icon"
                            width="250em" />
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

                    <Grid 
                        item 
                        style={{ 
                            marginLeft: matchesSM ? 0 : "5em", 
                            textAlign: matchesSM ? "center" : undefined }}>
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


            {/*---- website block ---- */}
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    justify={matchesSM ? "center" : "flex-end" }
                    className={classes.serviceContainer}
                    style={{marginBottom: '10em'}}>

                    <Grid 
                        item 
                        style={{ 
                            textAlign: matchesSM ? "center" : undefined,
                            width: matchesSM ? undefined : '35em' }}>
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

                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em"}}>
                        <img 
                            className={classes.icon}
                            src={websitesIcon} alt="Website Icon"
                            width="250em" />
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
};

// will go into App js
export default Services
