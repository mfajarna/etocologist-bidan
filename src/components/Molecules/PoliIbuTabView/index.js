import React, { useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { ItemValue } from '../..';
import { getDataKehamilan, getDataProsesKehamilan } from '../../../redux/action';
import DashedLine from 'react-native-dashed-line';



    const renderTabBar = props => (

    <TabBar
        {...props}
        indicatorStyle={{
        backgroundColor: '#493657',
        height: 3,
        alignItems: 'space-around',
        }}
        style={{
        backgroundColor: 'white',
        evelation: 0,
        shadowOpacity: 0,
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
        }}
        contentContainerStyle={{
        justifyContent: 'space-around',
        }}
        tabStyle={{elevation: 0}}
        renderLabel={({route, focused, color}) => (
        <Text
            style={{
            color: focused ? '#493657' : '#8D92A3',
            fontFamily: 'Poppins-Regular',
            }}>
            {route.title}
        </Text>
        )}
    />
    );

    const BiodataIbu = ({id_ibu}) => {

        const dispatch = useDispatch();
        const{dataProsesKehamilan} = useSelector(state => state.poliibuReducer)

        useEffect(() => {
            dispatch(getDataProsesKehamilan(id_ibu))
        },[])

        const render = () => {
            if(dataProsesKehamilan.length < 1){

            }else{
                return(
                    <>
                        <View style={{ paddingHorizontal: 5 }}>
                             <ItemValue label="Nama" value={dataProsesKehamilan.ibu.nama} />
                             <ItemValue label="Umur" value={dataProsesKehamilan.ibu.umur} />
                             <ItemValue label="Alamat" value={dataProsesKehamilan.ibu.alamat} />
                             <ItemValue label="Nama Suami" value={dataProsesKehamilan.ibu.nama_suami} />
                             <ItemValue label="No Telp" value={dataProsesKehamilan.ibu.no_telp} />
                             <ItemValue label="Posyandu" value={dataProsesKehamilan.ibu.posyandu} />
                       </View>
                    </>
                )
            }
        }

        return(
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
            {render()}
        </View>
        )
    }

    const RiwayatKehamilan = ({id_ibu}) => {

        const dispatch = useDispatch();
        const{dataKehamilan} = useSelector(state => state.poliibuReducer)

        useEffect(() => {
            dispatch(getDataKehamilan(id_ibu))
        },[])

        console.log('data kehamilan',dataKehamilan)

        const render = () => {
            if(dataKehamilan.length < 1){

            }else{
                return(
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                        {dataKehamilan.map(item => {
                            return(
                                
                            <View style={{ marginBottom: 10 }}>
                                
                                <ItemValue label="Berat Badan" value={item.bb} />
                                <ItemValue label="Umur Kehamilan" value={item.umur_kehamilan} />
                                <ItemValue label="Keluhan" value={item.keluhan} />
                                <ItemValue label="Konseling" value={item.konseling} />
                                <ItemValue label="Tanggal Berkunjung" value={item.tanggal} />
                                <DashedLine dashLength={5} />
                            </View>
                            
                                )
                        })}
                        </ScrollView>
                    </View>
                )
            }
        }

        return(
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
            {render()}
        </View>
        )
    }

    const Grafik = ({id_ibu}) => {

        const dispatch = useDispatch();
        const{dataProsesKehamilan} = useSelector(state => state.poliibuReducer)

        useEffect(() => {
            dispatch(getDataProsesKehamilan(id_ibu))
        },[])

        console.log('data proses kehamilan',dataProsesKehamilan)

        const render = () => {
            if(dataProsesKehamilan.length < 1){

            }else{
                return(
                    <>
                        <View style={{ paddingHorizontal: 5 }}>
                             <ItemValue label="Nama" value={dataProsesKehamilan.ibu.nama} />
                             <ItemValue label="Umur" value={dataProsesKehamilan.ibu.umur} />
                             <ItemValue label="Alamat" value={dataProsesKehamilan.ibu.alamat} />
                             <ItemValue label="Nama Suami" value={dataProsesKehamilan.ibu.nama_suami} />
                             <ItemValue label="No Telp" value={dataProsesKehamilan.ibu.no_telp} />
                             <ItemValue label="Posyandu" value={dataProsesKehamilan.ibu.posyandu} />
                       </View>
                    </>
                )
            }
        }

        return(
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
            {render()}
        </View>
        )
    }
    

    const initialLayout = {width: Dimensions.get('window').width};

    const PoliIbuTabView = ({data}) => {

        const id_ibu = data.id;
        const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
        {key: 'first', title: ' Biodata Ibu'},
        {key: 'second', title: 'Riwayat Kehamilan'},
        {key: 'third', title: 'Grafik Kesehatan'},

    ]);

        const renderScene = SceneMap({
        first: () => <BiodataIbu id_ibu={id_ibu} />,
        second: () => <RiwayatKehamilan id_ibu={id_ibu} />,
        third: () => <Grafik id_ibu={id_ibu} />,

    });

        return (
        <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{backgroundColor: 'white'}}
        />

        )
    }

export default PoliIbuTabView

const styles = StyleSheet.create({})
