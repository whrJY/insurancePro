import React, {Children, Component, cloneElement} from 'react'
import actions from '../../../common/actions'
import styles from '../sass/App' 
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


class App extends Component {
    constructor() {
        super()
    }
  
    
    componentDidMount() {
        const {actions} = this.props

        actions.fetchInsurance({name:'qiuye',age:'28'})
    }

    render() {
        
        const {insurance} = this.props
       

        return (
            <div  className={styles.app}> 
                <p>{insurance && JSON.stringify(insurance)}</p> 
            </div>
        )
    }
}


function mapStateToProps(state) {
    
    return {insurance: state.insuranceInfo}
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
