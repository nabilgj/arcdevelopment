import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#556270';
const arcCGreen = '#4ecdc4';

const theme = createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            pink: `${arcCGreen}`
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
            fontSize: '1rem'
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white'
        }
    }
});

// will go into App for theme provider to pass onto our App there on
export default theme;
