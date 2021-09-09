import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ChatItem, InputChat } from '../../components';
import { Headers } from '../../components/atoms'
import { getChatTime, getData, setDateChat } from '../../utils';
import Firebase from '../../utils/Firebase';

const Chatting = ({navigation, route}) => {

    const dataBidan = route.params;
    const [chatContent, setChatContent] = useState('');
    const [user, setUser] = useState({});
    const [chatData, setChatData] = useState([]);
    const scrollView= useRef();
    const [namaUser,setNamaUser] = useState('');

    useEffect(() =>{
        getDataUserFromLocal();
        const chatID = `${dataBidan.data.uid}_${user.uid}`;
        const urlFirebase = `chatting/${chatID}/allChat/`;

    Firebase.database()
      .ref(urlFirebase)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map(key => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map(itemChat => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
        }
      })
    }, [dataBidan.data.uid, user.uid])

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
        setUser(res);
        setNamaUser(res.email)
        });
     };

         const chatSend = () =>{
         const today = new Date();

         const data = {
            sendBy: user.uid,
            chatDate: today.getTime(),
            chatTime: getChatTime(today),
            chatContent: chatContent,
         };

         const chatID = `${dataBidan.data.uid}_${user.uid}`;
         const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
         const urlMessageUser = `messages/${user.uid}/${chatID}`;
         const urlMessageDoctor = `messages/${dataBidan.data.uid}/${chatID}`;

        const dataHistoryChatForUser = {
        lastContentChat: chatContent,
        lastChatDate: today.getTime(),
        uidPartner: dataBidan.data.uid,
        };

    const dataHistoryChatForDoctor = {
        lastContentChat: chatContent,
        lastChatDate: today.getTime(),
        uidPartner: user.uid,
        };

        Firebase.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
        // set history for user
        Firebase.database()
          .ref(urlMessageUser)
          .set(dataHistoryChatForUser);

        // set history for dataDoctor
        Firebase.database()
          .ref(urlMessageDoctor)
          .set(dataHistoryChatForDoctor);
      })
      .catch(err => {
        showError(err.message);
      });

    //   const dataJson = JSON.stringify({
    //     "to": `${device_token}`,
    //     "priority": "high",
    //     "soundName": "default",
    //     "notification": {
    //         "title": "Admin Hasnida",
    //         "body": `Ada pesan baru dari ${namaUser}`
        
    //         }
    //   });

    //   axios.post('https://fcm.googleapis.com/fcm/send', dataJson,{
    //     headers:{
    //       Authorization: 'key=AAAAMn40zS0:APA91bG50ySLS-gl3e0KKQbKB51F01Q2x70opMDt6X1Se0l6zZ0oaaUvTDZ2Nj8240pFfKHBmB9Pe-BKSHM05hkC1hvbH6hkmEYLZ6m0MDoXZY7hM1WM0T0hn1elhdz0s-NzXPv-76PN',
    //       "content-type": "application/json",
    //     }
    //   }).then(res => {
    //     console.log(res);
    //   }).catch(err =>{
    //     console.log(err.message)
    //   })
    }


    return (
        <View style={styles.container}>
            <Headers title={dataBidan.data.nama} subTitle="Silahkan konsultasi dengan pasien!" onBack={() => navigation.goBack()} />

             <View style={styles.wrapperMessage}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={scrollView}
          onContentSizeChange={() => scrollView.current.scrollToEnd({ animated: false })}
          >
          {chatData.map(chat => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map((itemChat) => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return (
                    <ChatItem key={itemChat.id}
                        isMe={isMe}
                        text={itemChat.data.chatContent}
                        date={itemChat.data.chatTime}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
            </View>

        <InputChat
            value={chatContent}
            onChangeText={value => setChatContent(value)}
            onButtonPress={chatSend}
            targetChat={dataBidan}
            
            />
        </View>
        


    )
}

export default Chatting

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
      wrapperMessage: {
        flex:1,
        backgroundColor: '#FAFAFA'
    },
    category:{
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
    chatDate: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
    marginVertical: 20,
    textAlign: 'center',
  },
})
