import types from '../constants/ActionTypes'
 
export default function insuranceInfo(state = null, action) {
     switch (action.type) {
        case types.REPLACE_INSURANCE_INFO:
            return action.info
        case types.CLEAR_INSURANCE_INFO:
            return null
        default:
            return state
    }
}
