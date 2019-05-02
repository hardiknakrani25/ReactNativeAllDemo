
import React, {Component} from 'react'
import {View,Text ,StyleSheet,TouchableOpacity} from 'react-native'

const AppButton = (props) => {
    const {btnOuter,btnText} = style
    const { title, onPress } = props;
    return(
        <View style={btnOuter}>
            <TouchableOpacity onPress={onPress}>
            <Text style={btnText}>
                {title}
            </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    btnOuter:{
        flexDirection: "row",
        width: '50%',
     justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#f73378',
        alignItems: 'center',
    },
    btnText:{
        fontSize: 24,
        color: '#ffffff',
        padding: 16,
    }
})
export {AppButton}