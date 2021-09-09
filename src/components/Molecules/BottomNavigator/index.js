import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import {
    Ic_home_on,
    Ic_home_off,
    Ic_messages_on,
    Ic_messages_off,
    Ic_profile_on,
    Ic_profile_off
} from '../../../assets'

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Dashboard':
      return focus ? <Ic_home_on /> : <Ic_home_off />;
    case 'Messages':
      return focus ? <Ic_messages_on /> : <Ic_messages_off />;
    case 'Profile':
      return focus ? <Ic_profile_on /> : <Ic_profile_off />;
  }
};


const BottomNavigator = ({state, descriptors, navigation}) => {
     const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={styles.nav}>
              <Icon style={styles.icon} label={label} focus={isFocused} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomNavigator

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 13,
    paddingBottom: 8,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  nav: {
    alignItems: 'center',
  },
})
