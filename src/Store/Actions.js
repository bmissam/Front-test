import axios from 'axios'
const URL = "http://localhost:3007"

export const AddUserAction = (user) => {
    console.log("geeeeee")
    return (dispatch) => {
        axios.post(URL+'/Users/add_User/', user).then(res => {
            dispatch(
                {
                    type: 'ADD_USER',
                    payload: res.data
                }
            )

        })
    }
}
export const getUserList = () => {
    return disaptch => {
        axios.get(URL+'/Users/').then(res => {
            disaptch({
                type: "GET_USER_LIST",
                payload: res.data

            })
        })
    }


}

export const EditUserAction = (user, id) => {
    return dispatch => {
        axios.put(URL+'/Users/Edit_User/' + id, user).then(res => {
            dispatch({

                type: "EDIT_USER",
                payload: res.data
            })
        })

    }
}
export const RemoveUserAction = (id) => {
    return dispatch => {
        axios.delete(URL+'/Users/User/' + id).then(res => {
            dispatch({
                type: "REMOVE_USER",
                payload: res.data
            })
        })
    }
}



//--------------------------------------------------------------------------------

export const getPhotoList = () => {
    return disaptch => {
        axios.get(URL+'/Photos/').then(res => {
            disaptch({
                type: "GET_PHOTO_LIST",
                payload: res.data

            })
        })
    }


}


export const AddPhotoAction = (photo) => {
    return (dispatch) => {
        axios.post(URL+'/Photos/add_Photo', photo).then(res => {
            dispatch(
                {
                    type: 'ADD_PHOTO',
                    payload: res.data
                }
            )

        })
    }
}



export const RemovePhotoAction = (id) => {
    return dispatch => {
        axios.delete(URL+'/Photos/Photo/' + id).then(res => {
            dispatch({
                type: "REMOVE_PHOTO",
                payload: res.data
            })
        })
    }
}


//-------------------------------------------------------------------------------------


