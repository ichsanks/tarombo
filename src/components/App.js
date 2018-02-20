import React from 'react'
import Radium, {Style} from 'radium'
import normalize from 'radium-normalize'

import Header from './Header'
import Main from './Main'

const App = () => (
    <div
        style={[
            styles.base
        ]}
    >
        <Style rules={normalize} />
        <Header />
        <Main />
    </div>
)

const styles = {
    base: {
        fontFamily: 'Arial',
        fontSize: '16px',
        boxSizing: 'border-box'
    }
}

export default Radium(App)