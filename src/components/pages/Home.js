import React, {Component} from 'react'
import Radium from 'radium'

import Button from '../Button'
import Select from '../Select'
import sharedstyles from '../shared.styles'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>This is Home!</h1>
                <Button 
                    text="Click me!"
                    kind="primary"
                />
                <Select name="test" />
                <input
                    style={[
                        sharedstyles.forms.base
                    ]}
                    type="text"
                />
            </div>
        )
    }
}

export default Radium(Home)