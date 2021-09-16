const initPoliAnak = {
    dataAnak: [],
    dataGrafikAnak:[{
        umur: 0,
        bb: 0
    }],

    anak: []
}

export const polianakReducer = (state = initPoliAnak, action) => {
    if(action.type === "SET_ANAK")
    {
        return {
            ...state,
            dataAnak : action.value
        }
    }

    if(action.type === "SET_GRAFIK_ANAK")
    {
        return {
            ...state,
            dataGrafikAnak : action.value
        }
    }

    if(action.type === "SET_SEMUA_ANAK")
    {
        return {
            ...state,
            anak : action.value
        }
    }



    return state;
}