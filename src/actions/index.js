import courtena from "../api/courtena.js";
import * as TYPES from "./types.js"


export const loginAdmin = (data)=>{
    return async (dispatch)=>{
        const response = await courtena.post("/auth/login-admin",{...data});
        dispatch({type:TYPES.LOGIN_ADMIN,payload:response.data});
    }
}