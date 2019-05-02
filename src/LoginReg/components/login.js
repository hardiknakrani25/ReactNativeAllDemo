
import React, { Component } from 'react';
import { ActivityIndicator , View, StyleSheet } from 'react-native';


export default class App extends Component {
    state = {
        email: '',
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator style={{justifyContent:'space-around',flexDirection:'row'}} size='large' color="#0000ff" />
            </View>

        );
    }

    _submit = () => {
        alert(`Confirmation email has been sent to ${this.state.email}`);
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor: '#ecf0f1',
    },

});





















// import React, {Component} from 'react'
// import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native'
// import {AppButton} from '../subComponent'
// import {themeColor} from '../helper/constant'
//
// export default class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {userEmail: 'Jay'};
//     }
//
//     render() {
//         const {centerItems, fontText, inputText,alignViewInput} = style;
//         return (
//             <SafeAreaView style={{flex: 1, backgroundColor: themeColor}}>
//                 <View style={centerItems}>
//                     <Text style={fontText}>
//                         Login
//                     </Text>
//                 </View>
//
//
//                 <View style={alignViewInput}>
//                     <TextInput style={inputText} onChangeText={(userEmail) => {
//                         this.setState({userEmail});
//                     }} placehodler={'Email'}/>
//
//                 </View>
//
//
//                 <View style={centerItems}>
//                     <AppButton title={'Login'}/>
//                 </View>
//
//
//             </SafeAreaView>
//         )
//
//     };
// }
//
//
// const style = StyleSheet.create({
//         centerItems: {
//             alignItems: 'center',
//
//
//         },
//     alignViewInput:{
//         alignItems: 'center',
//         backgroundColor: 'white',
//         borderRadius: 10,
//         width: '90%',
//         alignContent: 'center',
//         justifyContent: 'center',
//     },
//         fontText: {
//             color: '#ffffff',
//             fontSize: 32,
//             fontFamily: 'Noteworthy'
//         },
//         inputText: {
//             alignContent: 'center',
//             justifyContent: 'center',
//             width: '100%'
//             // backgroundColor: 'white',
//             // borderRadius: 2,
//
//         }
//     }
// );