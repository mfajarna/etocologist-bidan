const initPoliAnak = {
    dataAnak: [],
    dataGrafikAnak:[{
        umur: 0,
        bb: 0
    }]
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



    return state;
}