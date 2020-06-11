import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#556270';
const arcCGreen = '#4ecdc4';

const theme = createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            SeaGreen: `${arcCGreen}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcCGreen}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '.8rem'
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: '.8rem',
            textTransform: 'none',
            color: 'white'
        }
    }
});

// will go into App for theme provider to pass onto our App there on
export default theme;
