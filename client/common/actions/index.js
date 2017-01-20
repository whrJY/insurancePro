import types from '../constants/ActionTypes'
import utils from '../../shared/utils'

function replaceUserInfo(userInfo) {
    return {
        type: types.REPLACE_USER_INFO,
        userInfo
    }
}


function clearUserInfo() {
    return {type: types.CLEAR_USER_INFO}
}

function fetchUserInfo() {

    return dispatch => {
        utils.ajax({url: '/api/user/getUserInfo'}).then(res => {
            dispatch(replaceUserInfo(res))
        })
    }
}

function replaceInsurnce(info) {
    return { 
        type:types.REPLACE_INSURANCE_INFO,
        info
    }
}

function fetchInsurance(datas) {
     
    return dispatch => { 
        utils.ajax({url: '/api/insuranceApp/getInfo',data:datas}).then(res => {
            dispatch(replaceInsurnce(res))
        })
    }
}

 
export default {
    replaceUserInfo,
    fetchUserInfo,
    clearUserInfo,
    fetchInsurance,
    replaceInsurnce, 
}
