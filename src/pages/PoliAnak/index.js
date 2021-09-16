import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Headers } from '../../components'
import ListAnak from '../../components/Molecules/ListAnak'
import { getSemuaAnak } from '../../redux/action'
import { Gap } from '../../utils'

const PoliAnak = ({navigation}) => {

    const dispatch = useDispatch();
    const{anak} = useSelector(state => state.polianakReducer)

    useEffect(() => {
        dispatch(getSemuaAnak())
    },[])

    return (
        <View style={styles.container}>
            <Headers title="Poli Anak" subTitle="Lihat Data Pasien Anak" onBack={() => navigation.reset({index: 0, routes:[{name:'MainApp'}]})} />
            <View style={styles.content}>
                 <Text style={styles.text}>List Data Anak</Text>
                 <Gap height={15} />
                 {anak.map(item => {
                     return(
                        <ListAnak
                            key={item.id}
                            nama={item.nama}
                            umur={item.tanggal_lahir}
                            nama_ibu={item.ibu.nama}
                            onPress={() => navigation.navigate('DetailAnak', item)}
                        />
                        )
                 })}
                 
            </View>

        </View>
    )
}

export default PoliAnak

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
})
