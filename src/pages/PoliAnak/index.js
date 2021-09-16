import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers } from '../../components'

const PoliAnak = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="Poli Anak" subTitle="Lihat Data Pasien Anak" onBack={() => navigation.reset({index: 0, routes:[{name:'MainApp'}]})} />
        </View>
    )
}

export default PoliAnak

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    }
})
