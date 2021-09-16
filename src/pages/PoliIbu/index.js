import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Headers, ListIbu } from '../../components'
import { getDataPasienIbu } from '../../redux/action'
import { Gap } from '../../utils'

const PoliIbu = ({navigation}) => {

    const dispatch = useDispatch();

    const{allIbu} = useSelector(state => state.poliibuReducer);


    console.log(allIbu)
    useEffect(() => {
        dispatch(getDataPasienIbu())
    },[])


    return (
        <View style={styles.container}>
            <Headers title="Poli Ibu" subTitle="Lihat Data Pasien Ibu" onBack={() => navigation.reset({index: 0, routes:[{name:'MainApp'}]})} />
            <View style={styles.content}>
                 <Text style={styles.text}>List Pasien Ibu</Text>
                 <Gap height={15} />
                 {allIbu.map(item => {
                     return(
                        <ListIbu 
                            key={item.id}
                            nama={item.nama}
                            umur={item.umur}
                            onPress={() => navigation.navigate('DetailIbu', item)}
                        />
                        )
                 })}
            </View>

        </View>
    )
}

export default PoliIbu

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    text:{
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#493657'
    },
    content:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 25
    }
})
