import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CustomButton = ({onPress, text,color = '#493657', textColor = '#FFFF'}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <View style={styles.container(color)}>
                <Text style={styles.text(textColor)}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: color => ({
        backgroundColor: color,
        padding: 7,
        borderRadius: 10,
  }),
  text: textColor  => ({
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        color: textColor,
        textAlign: 'center',
  }),
})
