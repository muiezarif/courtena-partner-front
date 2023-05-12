import * as TYPES from "../actions/types.js"

const INITIAL_STATE = {
    isSignedIn: null,
    userId:null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.LOGIN_ADMIN:
            return {...state,isSignedIn: true,user:action.payload}
        case TYPES.SIGN_OUT:
            return {...state,isSignedIn:false,user:null}
        case TYPES.REGISTER_ADMIN:
            return {...state,isSignedIn:true,user:action.payload}
        default:
            return state;

    }
}