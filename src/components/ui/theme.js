import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#556270';
const arcCGreen = '#4ecdc4';
const arcGrey = "#868686"

const theme = createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            SeaGreen: `${arcCGreen}`
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcCGreen
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
        },
        h2: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: 'Pacifico',
            fontSize: '2.5rem',
            color: arcBlue
        },
        h4: {
            fontFamily: 'Raleway',
            fontSize: '1.75rem',
            color: arcBlue,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: '1.25rem',
            fontWeight: 300,
            color: arcGrey
        },
        subtitle2: {
            fontSize: '1.25rem',
            fontWeight: 300,
            color: "white"
        },
        learnButton: {
            color: arcBlue,
            borderColor: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        }
    }
});

// will go into App for theme provider to pass onto our App there on
export default theme;
