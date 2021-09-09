import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ic_cek_kesehatan, Ic_find_us, Ic_lainnya, Ic_poli_anak, Ic_poli_ibu, Ic_poli_massas, Ic_upload_usg } from '../../../assets/icons'

const FiturContent = ({label, onPress}) => {

    const renderIcon = () => {
        if(label === "Poli Anak")
        {   
            return(
            <View style={{ alignItems: 'center' }}>
                 <Ic_poli_anak />
            </View>
            )

            
        }
        if(label === "Poli Ibu")
        {
         return(
            <View style={{ alignItems: 'center' }}>
                 <Ic_poli_ibu />
            </View>
            )
        }
        if(label === "Poli Massas")
        {
         return(
            <View style={{ alignItems: 'center' }}>
                 <Ic_poli_massas />
            </View>
            )
        }
        if(label === "Lainnya")
        {
         return(
            <View style={{ alignItems: 'center' }}>
                 <Ic_lainnya />
            </View>
            )
        }
        if(label === "Kesehatan")
        {
         return(
            <View style={{ alignItems: 'center' }}>
                 <Ic_cek_kesehatan />
            </View>
            )
        }
        if(label === "Find Us")
        {
         return(
            <View style={{ alignItems: 'center' }}>
                 <Ic_find_us />
            </View>
            )
        }
        if(label === "Upload Usg")
        {
         return(
            <View style={{ alignItems: 'center' }}>
                 <Ic_upload_usg />
            </View>
            )
        }
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.icon}>
                {renderIcon()}
            </View>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

export default FiturContent

const styles = StyleSheet.create({
    container: {
        marginRight: 18,
    },
    icon:{
        backgroundColor: '#ECECEC',
        paddingHorizontal: 20,
        paddingVertical: 11,
        borderRadius: 9,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
    },
    text:{
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        color: '#493657',
        textAlign: 'center',
        marginTop: 5
    }
})
