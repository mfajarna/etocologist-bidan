import axios from "axios";
import { useState } from "react";
import { API_HOST, getData } from "../../utils";



export const getDataPoliIbu = () => dispatch => {
    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/data-pasien`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: 'SET_BIODATA', value: res.data.data.data[0]})
        }).catch(err => {
            console.log(err.message);
        })
    }).catch(err => {
        console.log(err.message)
    })
}

export const getDataProsesKehamilan = (id_ibu) => dispatch => {
    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/get-proses-kehamilan?id_ibu=${id_ibu}`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: 'SET_PROSES_KEHAMILAN', value: res.data.data[0]})
        }).catch(err => {
            console.log(err.message);
        })
    }).catch(err => {
        console.log(err.message)
    })
}


export const getDataKehamilan = (id_ibu) => dispatch => {
    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/get-proses-kehamilan?id_ibu=${id_ibu}`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: 'SET_KEHAMILAN', value: res.data.data})
        }).catch(err => {
            console.log(err.message);
        })
    }).catch(err => {
        console.log(err.message)
    })
}

export const getDataGrafikIbu = () => dispatch => {


    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/data-grafik`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res =>{
            dispatch({type: 'SET_GRAFIK_IBU', value: res.data.data})
            
            
        }).catch(err => {
            console.log(err.message)
        })
    }).catch(err => {
        console.log(err.message);
    })
}


export const getDataPasienIbu = () => dispatch => {


    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/get-data-ibu`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res =>{
            dispatch({type: 'SET_IBU', value: res.data.data})
            
            
        }).catch(err => {
            console.log(err.message)
        })
    }).catch(err => {
        console.log(err.message);
    })
}