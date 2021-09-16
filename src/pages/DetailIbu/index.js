import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers, PoliIbuTabView } from '../../components'

const DetailIbu = ({navigation, route}) => {

    const data = route.params;

    return (
        <View style={styles.container}>
            <Headers title="Detail Pasien Ibu" subTitle="Lihat Detail Pasien Ibu" onBack={() => navigation.reset({index: 0, routes:[{name:'PoliIbu'}]})} />
            <View style={styles.content}>
                <PoliIbuTabView data={data} />
            </View>
        </View>
    )
}

export default DetailIbu

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1
    }
})
