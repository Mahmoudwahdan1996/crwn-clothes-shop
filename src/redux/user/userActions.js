import {SET_CURRENT_USER,SET_CURRENT_USER_FAILURE,SET_CURRENT_USER_LOADING} from "./userTypes"

export const setCurrentUser=(user)=>({
    type: SET_CURRENT_USER,
    payload:user
})
export const setCurrentUserLoading=()=>{
    return {type:SET_CURRENT_USER_LOADING}
}

export const setCurrentUserFailure=(error)=>{
    return {type:SET_CURRENT_USER_FAILURE,payload:error}
}