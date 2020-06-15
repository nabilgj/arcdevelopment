import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import ButtonArrow from './ui/ButtonArrow';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        paddingBottom: '10em',
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 50,
        width: 160,
        backgroundColor: theme.palette.common.SeaGreen,
        fontSize: '1rem',
        marginRight: '5em',
        marginLeft: '2em',
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
        },
        [theme.breakpoints.down('md')]: {
            marginRight: 0,
            marginLeft: 0
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.8rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em'
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: '5em',
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 45,
        height: 45,
        width: 245,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.SeaGreen,
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark
        },
        [theme.breakpoints.down('sm')]: {
            height: 35,
            width: 200
        }
    }
}));

const Contact = props => {
    const classes = useStyles();
    const theme = useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState("");

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState("");

    const [message, setMessage] = useState('');

    const [open, setOpen] = useState(false);

    const onChange = event => {
        let valid;

        switch(event.target.id) {
            case 'email':
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

                if(!valid) {
                    setEmailHelper("Invalid Email")
                } else {
                    setEmailHelper("")
                }
                break;

            case 'phone':
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);

                if(!valid) {
                    setPhoneHelper("Invalid Phone")
                } else {
                    setPhoneHelper("")
                }
                break;

            default: 
                break;
        }
    }


    return (
        <Grid container direction="row">

            {/* contact form  */}
            <Grid 
                item 
                container 
                direction="column" 
                justify="center"
                alignItems="center"
                lg={4}
                xl={3}
                style={{
                    marginBottom: matchesSM ? "1em" : matchesMD ? '5em' : 0, 
                    marginTop: matchesSM ? "1em" : matchesMD ? '5em' : 0}} >


                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography 
                                variant="h2" 
                                style={{ lineHeight: 1 }}
                                align={matchesMD ? "center" : undefined}>
                                Contact Us
                            </Typography>
                            <Typography 
                                variant="body1" 
                                style={{color: theme.palette.common.blue}}
                                align={matchesMD ? "center" : undefined}>
                                We're waiting
                            </Typography>
                        </Grid>


                        {/* phone icon and number */}
                        <Grid item container style={{marginTop: '2em'}}>

                            <Grid item>
                                <img 
                                    src={phoneIcon} 
                                    alt="phone icon" 
                                    style={{marginRight: '0.5em'}}/>
                            </Grid>
                            <Grid item>
                                <Typography 
                                    variant="body1" 
                                    style={{color: theme.palette.common.blue, fontSize: '1rem'}}>
                                    <a href="tel:1234567890" style={{textDecoration: 'none', color: 'inherit'}}>(123) 456 7890</a>
                                </Typography>
                            </Grid>

                        </Grid>

                        {/* email icon and number */}
                        <Grid item container style={{marginBottom: '2em'}}>

                            <Grid item>
                                <img 
                                    src={emailIcon} 
                                    alt="envelope" 
                                    style={{marginRight: '0.5em', verticalAlign: "bottom"}}/>
                            </Grid>
                            <Grid item>
                                <Typography 
                                    variant="body1" 
                                    style={{color: theme.palette.common.blue, fontSize: '1rem'}}>
                                    <a href="mailto:babawithu@hotmail.com" style={{textDecoration: 'none', color: 'inherit'}}>babawithu@hotmail.com</a>
                                </Typography>
                            </Grid>

                        </Grid>


                        {/* text field for name email and phone */}
                        <Grid 
                            item 
                            container
                            direction="column"
                            style={{maxWidth: '20em'}}>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField 
                                    label="Name"
                                    id="name"
                                    fullWidth
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField 
                                    label="Email" 
                                    id="email"
                                    error={emailHelper.length !== 0}
                                    helperText={emailHelper}
                                    fullWidth
                                    value={email}
                                    onChange={onChange} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField 
                                    label="Phone" 
                                    id="phone"
                                    error={phoneHelper.length !== 0}
                                    helperText={phoneHelper}
                                    fullWidth
                                    value={phone}
                                    onChange={onChange} />
                            </Grid>
                        </Grid>

                        {/* text field for message */}
                        <Grid
                            item
                            style={{maxWidth: '20em'}}>
                            <TextField 
                                InputProps={{ disableUnderline: true }}
                                value={message}
                                className={classes.message}
                                id="message"
                                fullWidth
                                onChange={(e) => setMessage(e.target.value)}
                                multiline
                                rows={10} />
                        </Grid>

                        <Grid item container justify="center" style={{marginTop: '2em'}}>
                            <Button 
                                disabled={
                                    name.length === 0 || 
                                    message.length === 0 || 
                                    emailHelper.length !== 0 || 
                                    phoneHelper.length !== 0 }

                                variant="contained" 
                                className={classes.sendButton}
                                onClick={() => setOpen(true)}>
                                Send Message
                                <img src={airplane} alt="paper airplane" style={{ marginLeft: '1em'}}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            {/* dialog bo for message confirmation */}
            <Dialog 
                style={{zIndex: 1302}}
                open={open}
                fullScreen={matchesXS}
                onClose={() => setOpen(false)}
                PaperProps={{ style: { 
                        paddingTop: matchesXS ? "1em" : '5em', 
                        paddingBottom: matchesXS ? "1em" : '5em', 
                        paddingLeft: matchesXS ? 0 : matchesSM ? '5em' : matchesMD ? '8em' : '12em', 
                        paddingRight: matchesXS ? 0 : matchesSM ? '5em' : matchesMD ? '8em' : '12em'}}}>
                <DialogContent>
                    <Grid container direction="column">

                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                Confirm Message
                            </Typography>
                        </Grid>

                        <Grid item style={{marginBottom: "0.5em"}}>
                            <TextField 
                                label="Name"
                                id="name"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </Grid>
                        <Grid item style={{marginBottom: "0.5em"}}>
                            <TextField 
                                label="Email" 
                                id="email"
                                error={emailHelper.length !== 0}
                                helperText={emailHelper}
                                fullWidth
                                value={email}
                                onChange={onChange} />
                        </Grid>
                        <Grid item style={{marginBottom: "0.5em"}}>
                            <TextField 
                                label="Phone" 
                                id="phone"
                                error={phoneHelper.length !== 0}
                                helperText={phoneHelper}
                                fullWidth
                                value={phone}
                                onChange={onChange} />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        style={{maxWidth: matchesXS ? '100%' : '20em'}}>
                        <TextField 
                            InputProps={{ disableUnderline: true }}
                            value={message}
                            className={classes.message}
                            id="message"
                            fullWidth
                            onChange={(e) => setMessage(e.target.value)}
                            multiline
                            rows={10} />
                    </Grid>

                    <Grid 
                        item 
                        container
                        direction={matchesSM ? "column" : "row"}
                        style={{marginTop: '2em'}}
                        alignItems="center">

                        <Grid item>
                            <Button 
                                style={{fontWeight: 300}}
                                color="primary" onClick={() => setOpen(false)}> 
                                Cancel 
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button 
                                // disabled={
                                //     name.length === 0 || 
                                //     message.length === 0 || 
                                //     emailHelper.length !== 0 || 
                                //     phoneHelper.length !== 0 }

                                variant="contained" 
                                className={classes.sendButton}
                                onClick={() => setOpen(true)}>
                                Send Message
                                <img src={airplane} alt="paper airplane" style={{ marginLeft: '1em'}}/>
                            </Button>
                        </Grid>

                    </Grid>
                </DialogContent>
            </Dialog>


            {/* call to action */}
            <Grid 
                item 
                container
                alignItems="center"
                justify={matchesMD ? "center" :  undefined}
                direction={matchesMD ? "column" : "row"}
                className={classes.background}
                lg={8}
                xl={9}>

                <Grid 
                    item 
                    style={{
                        marginLeft: matchesMD ? 0 : '3em', 
                        textAlign: matchesMD ? 'center' : 'inherit'}}>
                    
                    <Grid container direction="column">
                        <Grid item>

                            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                                Simple Software. <br /> 
                                Revolutionary Results.
                            </Typography>
                            <Typography variant="subtitle2" align={matchesMD ? "center" : undefined} style={{fontSize: '1.5rem'}}>
                                Take advantage of the 21st century
                            </Typography>

                            <Grid container item justify={matchesMD ? 'center' : undefined}>
                                <Button 
                                    variant="outlined" 
                                    className={classes.learnButton}
                                    component={Link}
                                    to="/revolution"
                                    onClick={() => props.setValue(2)}>
                                    <span style={{marginRight: 5}}> Learn More </span>
                                    <ButtonArrow 
                                        width={10}
                                        height={10}
                                        fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item>
                    <Button 
                        variant="contained" 
                        className={classes.estimateButton}
                        component={Link}
                        to="/estimate"
                        onClick={() => props.setValue(5)}>
                        Free Estimate
                    </Button>
                </Grid>

            </Grid>


        </Grid>
    )
}

// will go into App js
export default Contact;
