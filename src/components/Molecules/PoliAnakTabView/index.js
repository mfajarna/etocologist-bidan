import React, { useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { ItemValue } from '../..';
import { getDataGrafik, getDataGrafikAnak, getDataKehamilan, getDataProsesKehamilan } from '../../../redux/action';
import DashedLine from 'react-native-dashed-line';
import { LineChart } from 'react-native-chart-kit';



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
        const bb = id_ibu.bb / 1000;
        return(
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
                <ItemValue label="Nama" value={id_ibu.nama} />
                <ItemValue label="Nama Ibu" value={id_ibu.ibu.nama} />
                <ItemValue label="Nama Ayah" value={id_ibu.ibu.nama_suami} />
                <ItemValue label="bb" value={bb} />
                <ItemValue label="Jenis Kelamin" value={id_ibu.jenis_kelamin} />
                <ItemValue label="Tanggal Lahir" value={id_ibu.tanggal_lahir} />
                <ItemValue label="Tempat Lahir" value={id_ibu.tempat_lahir} />
        </View>
        )
    }

    const RiwayatKehamilan = ({id_ibu}) => {

            const dispatch = useDispatch();
            const{dataGrafikAnak} = useSelector(state => state.polianakReducer);

                useEffect(() => {
                dispatch(getDataGrafikAnak(id_ibu))
       
            },[])

        var array = dataGrafikAnak.map(item => {
            return item.umur
        })

        var array2 = dataGrafikAnak.map(item => {
         return item.bb
        })

        const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: "#FFFFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(83, 0, 143, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false // optional
    };
        return(
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
                <LineChart
                    width={screenWidth}
                    chartConfig={chartConfig}
                    data={{
                    labels: array,
                        datasets: [
                            {
                            data: array2,
                            color: (opacity = 1) => `rgba(15, 25, 24, ${opacity})`, // optional

                        }
                    ],
                    legend: ["Grafik Kesehatan Anak"]
                    }}
                
                    xAxisLabel =" Minggu "
                    yAxisSuffix = " Kg"
                    bezier
                    verticalLabelRotation={0}
                    height={260}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        
                    }}
                />
        </View>
        )
    }

    const Grafik = ({id_ibu}) => {

    return(
        <View style={{paddingTop: 8}}>
            
        </View>
        )
    }
    

    const initialLayout = {width: Dimensions.get('window').width};

    const PoliAnakTabView = ({data}) => {

        const id_anak = data.id;
        const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
        {key: 'first', title: 'Biodata Anak'},
        {key: 'second', title: 'Grafik Kesehatan'},

    ]);

        const renderScene = SceneMap({
        first: () => <BiodataIbu id_ibu={data} />,
        second: () => <RiwayatKehamilan id_ibu={id_anak} />,

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

export default PoliAnakTabView

const styles = StyleSheet.create({})
