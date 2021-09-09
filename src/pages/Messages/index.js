import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AdminList } from '../../components'
import { Headers } from '../../components/atoms'

import { getData } from '../../utils'
import Firebase from '../../utils/Firebase'

const Messages = ({navigation}) => {

    const [bidan, setBidan] = useState([]);

    const getUserData = () => {
    getData('user').then(res => {
      const data = res;
    });
  };


    const getBidan = () => {
    Firebase.database()
      .ref('users/')
      // .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
         
          setBidan(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }

    const [user, setUser] = useState({});
    const [historyChat, setHistoryChat] = useState([]);

    useEffect(() =>{
        getBidan();
        getUserData();
        navigation.addListener('focus', () => {
            getUserData();
        });

        getDataUserFromLocal();
        const rootDB = Firebase.database().ref();
        const urlHistory = `messages/${user.uid}/`;
        const messagesDB = rootDB.child(urlHistory);

        messagesDB.on('value', async snapshot => {
        if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async key => {
          const urlUidAdmin = `users/${oldData[key].uidPartner}`;
          const detailAdmin = await rootDB.child(urlUidAdmin).once('value');
          data.push({
            id: key,
            detailAdmin: detailAdmin.val(),
            ...oldData[key],
          });
          console.log(data[1].detailAdmin.email)
        });

        await Promise.all(promises);

        setHistoryChat(data);
      }
    });
    },[user.uid,navigation])

 const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  console.log('data admin', bidan)


    return (
        <View style={styles.container}>
            <Headers title="Chatting" subTitle="Kirim pesan ke Pasien Ibu" />
            <View style={styles.content}>
                {bidan.map(data => {
                    return(
                    <AdminList
                        key={data.id}
                        name={data.data.nama}
                        onPress={() => navigation.navigate('Chatting', data)}
                    />        
                    )
                })}
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        paddingHorizontal: 25,
        flex: 1
    }
})
