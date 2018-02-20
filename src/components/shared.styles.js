import vars from './variables'

export default {
    button: {
        base: {
            padding: '0.5rem 1.5rem',
            borderRadius: 4,
            display: 'inline-block',
            color: vars.color.blue,
            boxShadow: 0,
            backgroundColor: 'transparent',
            border: '1px solid transparent',
            outline: 'none',
            cursor: 'pointer',
            boxSizing: 'border-box'
        },
        primary: {
            backgroundColor: vars.color.blue,
            color: 'white',
            ":hover": {
                backgroundColor: vars.color.blueHover
            }
        },
        navbarToggle: {
            display: 'inline-flex',
            flexDirection: 'column',
            padding: 0,
            borderRadius: 0
        }
    },
    forms: {
        base: {
            padding: '.5rem',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: vars.color.grey,
            borderRadius: 4,
            display: 'flex',
            boxSizing: 'border-box',
            width: '100%',
            ':focus': {
                outline: 0
            }
        }
    }
}