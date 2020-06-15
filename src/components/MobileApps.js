import React from 'react'
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton'

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';

import integrationAnimation from '../animations/integrationAnimation/data.json';
import CallToAction from './ui/CallToAction';

const useStyle = makeStyles(theme => ({
    heading: {
        maxWidth: '40em'
    },
    arrowContainer: {
        marginTop: '0.5em'
    },
    rowContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em'
        }
    }
}));

const MobileApps = (props) => {
    const classes = useStyle();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: integrationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column">

            {/* back arrow mobile apps and forward arrow */}
            <Grid 
                item 
                container 
                direction="row"
                justify={matchesMD ? "center" : undefined}
                className={classes.rowContainer}
                style={{marginTop: matchesXS ? '1em' : '2em'}}>
                <Hidden mdDown>
                    <Grid 
                        item 
                        className={classes.arrowContainer}
                        style={{marginRight: '1em', marginLeft: '-3.5em'}}>
                        <IconButton 
                            style={{backgroundColor: 'transparent'}}
                            component={Link}
                            to="/customsoftware"
                            onClick={() => props.setSelectedIndex(1)}>
                            <img src={backArrow} alt="Back to custom software page" />
                        </IconButton>
                    </Grid>
                </Hidden>


                <Grid 
                    item 
                    container 
                    direction="column" 
                    className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? 'center' : undefined } variant="h2">
                            ios/Android App Development
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? 'center' : undefined } variant="body1" paragraph>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography align={matchesMD ? 'center' : undefined } variant="body1" paragraph>
                            Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography align={matchesMD ? 'center' : undefined } variant="body1" paragraph>
                            Convenience. Connection.
                        </Typography>

                    </Grid>
                </Grid>

                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton 
                            style={{backgroundColor: 'transparent'}}
                            component={Link}
                            to="/websites"
                            onClick={() => props.setSelectedIndex(3)}>
                            <img src={forwardArrow} alt="Forward to website page" />
                        </IconButton>   
                    </Grid>
                </Hidden>

            </Grid>


            {/* Integration, Lottie and Simultaneous Platform Support */}
            <Grid 
                item 
                container 
                direction={matchesSM ? "column" : "row" }
                className={classes.rowContainer}
                style={{marginTop: '10em', marginBottom: '10em'}}>
                
                {/* Integration */}
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>
                            Integration
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                            Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
                        </Typography>
                        <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                            This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Lottie */}
                <Grid item md>
                    <Lottie options={defaultOptions} isStopped={true} style={{maxWidth: "20em"}} />
                </Grid>

                {/* Simultaneous Platform Support */}
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="h4" gutterBottom>
                            Simultaneous Platform Support
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
                        Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.
                        </Typography>
                        <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
                            This significantly reduces costs and creates a more unified brand experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>


            {/* Swiss, Extended Access and Increase Engagement */}
            <Grid 
                item 
                container
                direction={matchesMD ? "column" : "row"}
                className={classes.rowContainer}
                style={{marginBottom: "15em"}}>
                
                {/* Swiss */}
                <Grid item container direction="column" md alignItems="center">
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extended Fucntionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="swiss knife image" />
                    </Grid>
                </Grid>

                {/* Extended Access */}
                <Grid 
                    item 
                    container 
                    direction="column" md 
                    alignItems="center"
                    style={{
                        marginTop: matchesMD ? "10em" : 0, 
                        marginBottom: matchesMD ? "10em" : 0}}>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extended Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} alt="tear-one-off sign " 
                            style={{maxWidth: matchesXS ? "18em" : "25em" }}/>
                    </Grid>
                </Grid>

                {/* Increase Engagement */}
                <Grid item container direction="column" md alignItems="center">
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="app with notification image" />
                    </Grid>
                </Grid>

            </Grid>
            
            <Grid>
                <CallToAction setValue={props.setValue} />
            </Grid>

        </Grid>
    )
};

// will go into App
export default MobileApps;
