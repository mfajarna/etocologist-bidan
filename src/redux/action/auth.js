import axios from "axios";
import { API_HOST, showMessage, storeData } from "../../utils";
import { setLoading } from "./global";


export const signInAction = (form, navigation) => dispatch => {
    dispatch(setLoading(true));
    axios.post(`${API_HOST.url}/login`,form).then(res => {
        const profile = res.data.data.user;
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        dispatch(setLoading(false));
        showMessage('Selamat Berhasil Login','success');
        storeData('token', {value: token});
        storeData('userProfile', profile);
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    }).catch(err => {
        dispatch(setLoading(false));
        showMessage('Username atau Password Salah');
        console.log('error', err);
    })
}