import Raleway from './Fonts/Raleway-SemiBold.ttf';
import { createMuiTheme } from '@material-ui/core/styles';

const raleway = {
    fontFamily: 'Raleway',
    fontStyle: 'semi-bold',
    fontDisplay: 'swap',
    fontWeight: '600',
    src: `
        local('Raleway'),
        local('Raleway-SemiBold'),
        url(${Raleway}) format('ttf')
    `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Raleway', 'sans-serif'].join(','),
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
            '@font-face': [raleway],
            },
        }
    }
  });

export default theme;