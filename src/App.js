import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'
import { LogBox } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store'
import { Loading } from './components/atoms';
import FlashMessage from 'react-native-flash-message';

const MainApp = () => {
  const {isLoading} = useSelector((state) => state.globalReducer);
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  return(
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  )
}


const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App;

