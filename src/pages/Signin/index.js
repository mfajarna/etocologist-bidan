import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import { useDispatch } from 'react-redux'
import { Ic_google, Ic_logo, Il_google } from '../../assets'
import { CustomButton, CustomTextInput } from '../../components/atoms'
import { signInAction } from '../../redux/action/auth'
import {Gap} from '../../utils'
import useForm from '../../utils/useForm'
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'


const Signin = ({navigation}) => {

    const[form,setForm] = useForm({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(signInAction(form, navigation));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <Text style={styles.desc}>Sign in untuk menikmati berbagai
                layanan kami
            </Text>
            <Gap height={60} />
            <CustomTextInput label="Email" placeholder="Masukan Email" value={form.email} onChangeText={value => setForm('email', value)} />
            <Gap height={12}/>
            <CustomTextInput label="Password" placeholder="Masukan Password" value={form.password} onChangeText={value => setForm('password', value)} secureTextEntry />
            <Gap height={40}/>
            <CustomButton text="Sign in" onPress={onSubmit}/>
            <Gap height={12}/>
            <View style={styles.signupMethod}>

            </View>
            <Gap height={45} />
            <View style={styles.footer}>

            </View>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 33,
        paddingTop: 35
    },
    title:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        color: '#493657',
        
    },
    desc:{
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
        color: '#A7A7A7',
        maxWidth: 250
    },
    signup:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: '#493657'
    },
    footer:{
        alignItems: 'center'
    },
    google:{
        flexDirection: 'row'
    },
    textGoogle:{
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        marginLeft: 5,
        marginTop: -2
    },
    signupMethod:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    signupGoogle:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: '#493657',
        
    }
})
