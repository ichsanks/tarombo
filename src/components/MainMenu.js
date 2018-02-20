import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Radium from 'radium'

class MainMenu extends Component {    
    render() {
        return (            
            <nav
                className="navbar-offcanvas">                
                <ul
                    style={[
                        styles.base
                    ]}
                >
                    <li><Link to='/' style={[styles.link]}>Home</Link></li>
                    <li><Link to='/page'>Page</Link></li>
                    <li><Link to='/post'>Post</Link></li>
                </ul>
            </nav>
        )
    }
}

const styles = {
    base: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0
    },
    link: {
        padding: '1rem',
        color: 'green',
        textDecoration: 'none'
    }
};

export default Radium(MainMenu)