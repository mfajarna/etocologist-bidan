import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers } from '../../components'
import MapView, { Marker } from 'react-native-maps';

const FindUs = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="Find Us" subTitle="Cari Klinik Kami Bedasarkan Lokasi" onBack={() => navigation.reset({index: 0, routes:[{name: 'MainApp'}]})  }/>
            <View style={styles.content}>
                  <MapView
                        style={StyleSheet.absoluteFill}
                            initialRegion={{
                            latitude: -6.8609268,
                            longitude: 107.5480597,
                            latitudeDelta: 0.009,
                            longitudeDelta: 0.009
                        }}
                    >
                        <Marker coordinate={{ 
                            latitude: -6.860964036241302, 
                            longitude: 107.54804832757202
                         }} />
                    </MapView>
            </View>
        </View>
    )
}

export default FindUs

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    content:{
        flex: 1,
        paddingHorizontal : 24
    }
})
