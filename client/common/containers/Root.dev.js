import React, {Component} from 'react'
import DevTools from './DevTools'
import Common from './Common'
import App from '../../wap/insuranceList/containers/App'

class Root extends Component {
    constructor() {
        super()
        this.state = {isMounted: false}
    }

    componentDidMount() {

        this.setState({isMounted: true})
        console.log('Redux Devtools is now available. Press key "ctrl-h" to toggleVisibility. Press key "ctrl-w" to changePosition.')
    }

    render() {
        const {isMounted} = this.state,
            {children} = this.props

        return (
            <div>
                <App>{children}</App>
                {isMounted && <DevTools/>}
            </div>
        )
    }
}

export default Root
