import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ic_logo, Il_Support } from '../../assets'
import { Gap, getData } from '../../utils'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(()=> {
            getData('token').then(res => {
                if(res)
                {
                    navigation.reset({index: 0, routes:[{name: 'MainApp'}]})
                }else{
                    navigation.replace('Signin')
                }
            })
        },2000)
    },[]);

    return (
        <View style={styles.container}>
            <View>

            </View>
            <View style={styles.center}>
                <Ic_logo />
                <Gap height={10} />
                <Text style={styles.text}>E-TOCOLOGIST</Text>
            </View>
            <View style={styles.footer}>
                <Image source={Il_Support} />
            </View>
            
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    text:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        color: '#493657'
    },
    center:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    }
})
