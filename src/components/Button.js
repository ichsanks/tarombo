import React, {Component} from 'react'
import Radium from 'radium'
import styles from './shared.styles'

class Button extends Component {
    render() {
        return (
            <button 
                onClick={this.props.onClick}
                style={[
                    styles.button.base,
                    styles.button[this.props.kind]
                ]}
            >
                {this.props.text || this.props.children}
            </button>
        )
    }
}

export default Radium(Button)