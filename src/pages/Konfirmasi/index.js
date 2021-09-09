import axios from 'axios'
import firebase from 'firebase'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { CustomButton, Headers } from '../../components/atoms'
import { getDataProfile } from '../../redux/action'
import { API_HOST, getData, storeData } from '../../utils'
import Firebase from '../../utils/Firebase'



const Konfirmasi = ({navigation}) => {

    const data = {
        is_messages : 1
    }

    const dispatch = useDispatch();
    const{dataProfile} = useSelector(state => state.profileReducer);
    
    const id = dataProfile.id;
    useEffect(() => {
        dispatch(getDataProfile())
        
    },[])

    if(dataProfile.is_messages > 0)
    {
        navigation.reset({index: 0, routes:[{name: 'MainApp'}]})
    }

    const onSubmit = () => {
        getData('token').then(resToken => {
            axios.post(`${API_HOST.url}/update-messages/${id}`, data,{
                headers:{
                    Authorization: resToken.value
                }
            }).then(res => {
                if(res)
                {
                    Firebase.auth().createUserWithEmailAndPassword(dataProfile.email, dataProfile.pwd)
                    .then(res => {
                        const data = {
                        uid: res.user.uid,
                        email: res.user.email,
                        nama: dataProfile.name
                        }

                        console.log("status fbase", res);
                        Firebase.database()
                            .ref('bidan/' + res.user.uid + '/')
                            .set(data);

                            storeData('user', data)
                            navigation.reset({index: 0, routes:[{name: 'MainApp'}]})
            }).catch(err => {
                console.log(err)
            })
                    navigation.reset({index: 0, routes:[{name: 'SplashScreen'}]})
                }
            console.log(res)
            }).catch(err => {
                console.log(err)
            })
        })
    }


    return (
        <View style={styles.container}>
            <Headers title="Konfirmasi User" subTitle="Konfirmasi Fitur Chat" />
            <View style={styles.content}>
                <View>
                <Text style={styles.text}>About Fitur Chat</Text>
                <Text style={styles.desc}>Fitur chat digunakan untuk bidan dengan pasien ibu sebagai sarana fasilitas dari kami untuk melayani pasien ibu.</Text>
                </View>

                <View style={{ marginBottom : 20 }}>
                    <CustomButton text="Konfirmasi" onPress={onSubmit} />
                </View>
                
            </View>
        </View>
    )
}

export default Konfirmasi

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        paddingHorizontal: 25,
        justifyContent: 'space-between'
    },
    text:{
        fontFamily: 'Poppins-SemiBold',
        color: '#493657',
        fontSize: 14
    },
    desc:{
        fontFamily:'Poppins-Light'
    }
})
