import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers, ItemValue } from '../../components'
import PoliAnakTabView from '../../components/Molecules/PoliAnakTabView';

const DetailAnak = ({navigation, route}) => {

    const data = route.params;

    

    return (
        <View style={styles.container}>
            <Headers title="Poli Anak" subTitle="Lihat Detail Pasien Anak" onBack={() => navigation.reset({index: 0, routes:[{name:'MainApp'}]})} />
            <View style={styles.content}>
                <PoliAnakTabView 
                    data={data}
                />
            </View>
        </View>
    )
}

export default DetailAnak

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        backgroundColor: 'white',
    }
})
