const initPhoto = {
    uri: '',
    type: '',
    name: '',
    isUploadPhoto: false,
}


export const photoReducer = (state= initPhoto, action) => {
    if(action.type === 'SET_PHOTO')
    {
        return {
            ...state,
            uri: action.value.uri,
            type: action.value.type,
            name: action.value.name
        }
    }
    if(action.type === 'SET_UPLOAD_STATUS')
    {
        return {
            ...state,
            isUploadPhoto: action.value
        }
    }

    return state
}