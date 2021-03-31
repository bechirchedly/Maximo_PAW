const initialState = {
    user : "HI"
}

const userReducer  = (state = initialState,action ) =>{
    if(action.type === 'CHANGE_USER'){

    }
    else if(action.type === 'RESET_USER'){

    }
    return state;
}
export default userReducer;