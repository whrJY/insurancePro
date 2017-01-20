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
                <h1>File Upload</h1>
                <p>Try uploading multiple files at a time.</p>
                <form action="/api/uploadFile" method="post" enctype="multipart/form-data">
                    <input type="file" name="file" multiple />
                    <input type="submit" value="Upload"/>
                </form>
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
