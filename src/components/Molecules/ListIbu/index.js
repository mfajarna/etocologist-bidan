import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ic_poli_ibu } from '../../../assets'

const ListIbu = ({navigation,onPress,nama, umur}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Ic_poli_ibu />
                </View>
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                    <Text style={styles.text}>Ibu {nama}</Text>
                    <Text style={styles.umur}>{umur} Tahun</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListIbu

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#AA96BA',
        borderRadius: 10,
        marginBottom: 15,


        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
    },
    text:{
        fontFamily: 'Poppins-SemiBold',
        color: 'white'
    },
    umur:{
        fontFamily: 'Poppins-Regular',
        color: 'white'
    },

})
