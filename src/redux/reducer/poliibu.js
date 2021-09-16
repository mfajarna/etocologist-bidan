const initBiodata = {
    dataBiodata: [],
    dataProsesKehamilan: [],
    dataGrafik: [{
        umur_kehamilan: 0,
        bb: 10
    }],
    dataKehamilan: [],
    allIbu : []
}

export const poliibuReducer = (state = initBiodata, action) => {
    if(action.type === "SET_BIODATA")
    {
        return {
            ...state,
            dataBiodata : action.value
        }
    }

    if(action.type === "SET_PROSES_KEHAMILAN")
    {
        return {
            ...state,
            dataProsesKehamilan : action.value
        }
    }

    if(action.type === "SET_GRAFIK_IBU")
    {
        return {
            ...state,
            dataGrafik : action.value
        }
    }

    if(action.type === "SET_IBU")
    {
        return {
            ...state,
            allIbu : action.value
        }
    }

    if(action.type === "SET_KEHAMILAN")
    {
        return {
            ...state,
            dataKehamilan : action.value
        }
    }



    return state;
}