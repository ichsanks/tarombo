import React, {Component} from 'react'
import Radium from 'radium'
import MainMenu from './MainMenu'
import Button from './Button'

class Header extends Component {
    render() {
        return (
            <header 
                style={[
                    styles.base
                ]}
            >
                <a href="#" className="navbar-brand">Logos</a>
                <Button
                    kind="navbarToggle">
                    X
                </Button>
                <MainMenu />
            </header>
        )
    }
}

const styles = {
    base: {
        display: 'flex',
        width: '100%',
        height: '80px',
        borderBottom: '1px solid black',
        alignItems: 'center',
        boxSizing: 'border-box'
    }
};

export default Radium(Header)