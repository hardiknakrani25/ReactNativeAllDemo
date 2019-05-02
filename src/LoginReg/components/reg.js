import React, {Component} from 'react';
import {SafeAreaView, View ,DatePickerIOS,Alert, TextInput , Text,StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Avatar,CheckBox,ScrollView} from 'react-native-elements'

export  default  class  Reg extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email:'',
            password:'',
            cPassword:'',
            dob: '',
            gender:'',
            EULA:'',
            checked:false,
        }
    }

    dobChange(dob){
        this.setState({dob:dob})
    }



    render(){
        return(
            <SafeAreaView style={style.container}>
                <ScrollView>
                <View>
                <View style={style.textView}>
                    <Text style={style.textStyle}>
                        Registration
                    </Text>
                </View>

                <View style={{alignItems:'center',paddingTop: 50}}>
                    <View style={style.roundView}>
                        <TextInput style={style.styleTextInput} placeholder='Name' onChangeText={(name)=> {
                            this.setState({name})
                        }}/>
                    </View>
                </View>

                <View style={{alignItems:'center',paddingTop: 10}}>
                    <View style={style.roundView}>
                        <TextInput style={style.styleTextInput} placeholder='Email' onChangeText={(email)=> {
                            this.setState({email})
                        }}/>
                    </View>
                </View>

                <View style={{alignItems:'center',paddingTop: 10}}>
                    <View style={style.roundView}>
                        <TextInput style={style.styleTextInput} placeholder='Password' secureTextEntry={true} onChangeText={(password)=> {
                            this.setState({password})
                        }}/>
                    </View>
                </View>

                <View style={{alignItems:'center',paddingTop: 10}}>
                    <View style={style.roundView}>
                        <TextInput style={style.styleTextInput} placeholder='Confirm password' secureTextEntry={true} onChangeText={(cPassword)=> {
                            this.setState({cPassword})
                        }}/>
                    </View>
                </View>



                <View style={{alignItems:'center',paddingTop: 10}}>
                    <DatePicker
                        style={{width:'90%'}}
                        date={this.state.dob}
                        mode="date"
                        placeholder="select date of birth"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {this.setState({dob: date})}}
                    />
                </View>
                     <CheckBox
                            center
                            onPress={() => {
                                this.setState({checked: !this.state.checked});
                            }}
                            title='Accept Terms and conditions'
                            checked={this.state.checked}
                        />



                <View>
                    <Text>{this.state.dob}</Text>
                </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        );
    }



}


const style = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#3FB7EB'
        },

        roundView:{
            flexDirection:'row',
            width:'90%',
            borderRadius:10,
            backgroundColor: 'white',

        },

        textView:{
            alignItems:'center',

        },
        textStyle:{
            fontSize:32,
            color:'#ffffff',
            fontFamily: 'Noteworthy'
        },
        styleTextInput:{
            fontSize: 24,
            padding:10
        }

    }
);