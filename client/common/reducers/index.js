import {combineReducers} from 'redux'
import userInfo from './userInfo'
import insuranceInfo from './insuranceInfo'

const rootReducer = combineReducers({userInfo,insuranceInfo}) 

export default rootReducer
