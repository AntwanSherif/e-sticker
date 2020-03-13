import { createMuiTheme } from '@material-ui/core/styles';
const { pxToRem } = createMuiTheme().typography;

const createAppTheme = (direction = 'ltr') => {
    const theme = createMuiTheme({
        direction,
        palette: {
            primary: {
                main: '#0CB3A1',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#424956',
            },
            error: {
                main: '#FF0000',
            },
            background: {
                default: '#F4F4F4',
            },
            text: {
                primary: '#000',
                secondary: '#676767'
            }
        },
        typography: {
            fontFamily: ['Roboto', 'Open Sans'].join(','),
            color: '#000',
            fontSize: 16,
            htmlFontSize: 16,
            h1: {
                fontSize: pxToRem(26),
                fontFamily: 'Montserrat',
                fontWeight: 'bold'
            },
            h2: {
                fontSize: pxToRem(20),
                fontFamily: 'Montserrat',
                fontWeight: 'bold'
            },
            h3: {
                fontSize: pxToRem(18),
                fontFamily: 'Montserrat',
                fontWeight: 'bold'
            },
            subtitle1: { fontSize: pxToRem(18) },
            subtitle2: { fontSize: pxToRem(16) },
            body1: { fontSize: pxToRem(14) },
            body2: { fontSize: pxToRem(12) },
            caption: { fontSize: pxToRem(10) },
            button: { fontSize: pxToRem(26), fontWeight: 'normal' }
        }
    });

    theme.overrides = {
        MuiLink: {
            underlineHover: {
                "&:hover": {
                    textDecoration: 'none',
                }
            }
        },
        MuiButton: {
            root: {
                borderRadius: 4,
                padding: '19px 30px 19px 30px',
                height: 47,
                textTransform: 'none'
            },
            contained: {
                boxShadow: '0px 3px 25px #00E67633',
            }
        },
        MuiFab: {
            root: {
                boxShadow: 'none',
                '&$disabled': {
                    backgroundColor: 'rgba(0, 230, 118, 0.5)',
                    color: '#fff'
                }
            },
        },
        MuiIconButton: {
            root: {
                "&:hover": {
                    backgroundColor: "$labelcolor"
                }
            }
        },
        MuiAppBar: {
            root: {
                height: 81,
                boxShadow: 'none'
            },
            colorPrimary: {
                backgroundColor: 'rgba(41, 41, 41, 1)'
            }
        },
        MuiInputBase: {
            input: {
                '&:-internal-autofill-selected': {
                    backgroundColor: 'rgba(0, 230, 118, 0.15)',
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(2),
                    '-webkit-transition-delay': '99999s',
                    fontSize: theme.typography.body1.fontSize
                },
            },
        },
        MuiOutlinedInput: {
            root: {
                height: 42,
                borderRadius: 31,
                fontSize: theme.typography.body1.fontSize,
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                backgroundColor: 'rgba(0, 230, 118, 0.15)',
                '&$error': {
                    backgroundColor: 'rgba(255, 0, 0, 0.15)'
                }
            },
            notchedOutline: {
                border: 'none'
            }
        },
        MuiFormHelperText: {
            root: {
                fontSize: theme.typography.body2.fontSize
            }
        },
        MuiSelect: {
            root: {
                '&:error': {
                    backgroundColor: 'rgba(255, 0, 0, 0.15)'
                }
            },
            select: {
                '&:focus': {
                    backgroundColor: '$labelcolor'
                }
            }
        },
        MuiCard: {
            root: {
                borderRadius: 8
            }
        }
    };


    return theme;
}

export default createAppTheme;