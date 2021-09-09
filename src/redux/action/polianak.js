import axios from "axios";
import { API_HOST, getData } from "../../utils";



export const getDataAnak = () => dispatch => {
    getData('token').then(resToken =>{
        axios.get(`${API_HOST.url}/anak`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
             dispatch({type: 'SET_ANAK', value: res.data.data.data});
        })
    }).catch(err => {
        console.log(err.message)
    })
}

export const getDataGrafikAnak = (id) => dispatch => {


    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/grafik-anak?id_anak=${id}`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res =>{
            dispatch({type: 'SET_GRAFIK_ANAK', value: res.data.data})
            
            
        }).catch(err => {
            console.log(err.message)
        })
    }).catch(err => {
        console.log(err.message);
    })
}