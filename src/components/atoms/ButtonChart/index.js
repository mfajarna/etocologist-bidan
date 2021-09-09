import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ic_chart } from '../../../assets'

const ButtonChart = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                <Text style={styles.text}>Monitoring</Text>
                <Text style={styles.desc}>Grafik Kesehatan {title}</Text>
            </View>
            <View style={{ justifyContent: 'center', marginRight: 10  }}>
                <Ic_chart />
            </View>
        </TouchableOpacity>
    )
}

export default ButtonChart

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17,
        paddingVertical: 9,
        backgroundColor :'#F0D9FF',
        height: 70,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
        
    },
    text:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: '#493657'
    },
    desc:{
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: '#493657'
    }
})
