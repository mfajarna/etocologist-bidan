import React from 'react'
import { StyleSheet, Text, View,  TextInput as TextInputRn } from 'react-native'

const CustomTextInput = ({label, placeholder, ...restProps}) => {
    return (
        <View >
            <Text style={styles.label}>{label}</Text>
             <TextInputRn
                style={styles.input}
                placeholder={placeholder}
                {...restProps}></TextInputRn>
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    label: {
        fontSize: 15,
        marginBottom: 12,
        fontFamily: 'Poppins-SemiBold',
        color: '#493657',
  },
   input: {
    backgroundColor: '#ECECEC',
    borderRadius: 8,
    padding: 7,
    color: 'black',
    fontFamily: 'Poppins-Light'
  },
})
