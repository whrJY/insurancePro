import React, {Component} from 'react'
// import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }
    componentDidMount(){
        const {actions} = this.props 
        actions.fetchUserInfo()
    }

    render() {
       const {userInfo} = this.props

        return (
            <div  className={styles.app}>
                {userInfo && JSON.stringify(userInfo)}
            </div>
        )
    }
}

export default App
