import React, {Component} from 'react'
import Radium from 'radium'
import sharedstyles from './shared.styles'

class Select extends Component {
    render() {
        return (
            <div
                name={this.props.name}
                style={[
                    sharedstyles.forms.base,
                    styles.base
                ]}
            >
                <label
                    style={[
                        styles.label
                    ]}
                >
                this is select
                </label>
                <span>v</span>                
            </div>
        )
    }
}

const styles = {
    base: {
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer'
    },
    label: {
        overflow: 'hidden'
    }
}

export default Radium(Select)