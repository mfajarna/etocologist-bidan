import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Headers } from '../../components/atoms'
import { getDataProfile } from '../../redux/action/profile'
import { Gap } from '../../utils'

const Profile = ({navigation}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataProfile());
    },[])

    const{dataProfile} = useSelector(state => state.profileReducer);

    console.log('data profilea', dataProfile);

    const onLogout = () => {
        AsyncStorage.multiRemove(['userProfile','token']).then(()=> {
        navigation.reset({index: 0, routes:[{name: 'Signin'}]})
    })

    }
    return (
        <View style={styles.container}>
            <Headers title="Profile" subTitle="Profile Pengguna" />
            <View style={styles.content}>
                <Text style={styles.text}>Detail Profile</Text>
                <Gap height={10} />
                <View style={styles.containerContent}>
                    <Image style={styles.image} source={{ uri: dataProfile.profile_photo_url }} />
                    <View style={styles.textContent}>
                        <Text style={styles.desc}>{dataProfile.name}</Text>
                        <Text style={styles.desc}>{dataProfile.email}</Text>
                        <Text style={styles.desc}>User</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.containerButton} onPress={onLogout}>
                            <Text style={styles.buttonLogout}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 25
    },
    text:{
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#493657'
    },
    containerContent:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    desc:{
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        marginLeft: 10,
        color:'#787A91'
    },
    textContent:{
        justifyContent: 'center',
        marginLeft: -80
    },
    button:{
        justifyContent: 'center'
    },
    containerButton:{
        padding: 8,
        backgroundColor:'#493657',
        borderRadius: 7
    },
    buttonLogout:{
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        fontSize: 13
    }
})
