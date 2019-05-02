import React,{Component} from 'react'
import {
    SafeAreaView,
    View,
    Button,
    TextInput,
    StyleSheet, Text,ScrollView,Image,
    KeyboardAvoidingView,
    Alert
} from 'react-native';

import DatePicker from 'react-native-datepicker';
import {Avatar,CheckBox,ButtonGroup} from 'react-native-elements';

import PhotoUpload from 'react-native-photo-upload'


export default class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            username: '', password: '', email: '', phone_number: '', dob: new Date(), checked:false,
            selectedIndex:0,image:''

        }

        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    dobChange(dob){
        this.setState({dob:dob})
    }




    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    signUp = async () => {
        const { username, password, email, phone_number } = this.state
        try {

            const {navigation} = this.props;
            navigation.navigate('ImageUpload',{
                userName:this.state.username,
                password:this.state.password,
                email:this.state.email,
                phno:this.state.phone_number,
                dob:this.state.dob,
                gender:this.state.selectedIndex==0?'Male':'Female',
                image:'data:image/jpeg;base64,'+this.state.image
            });
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }

    render() {

        const buttons = ['Male', 'Female']
        const { selectedIndex } = this.state

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

            <SafeAreaView >

                <ScrollView>

        <View style={{alignItems: 'center'}}>
            <Text style={styles.textStyle}>
                Registration
            </Text>
        </View>

        <PhotoUpload
            onPhotoSelect={avatar => {
                if (avatar) {
                    this.setState({image:avatar})
                    // console.log('Image base64 string: ', avatar)
                }
            }}
        >
            <Image
                style={{
                    paddingVertical: 30,
                    width: 150,
                    height: 150,
                    borderRadius: 75
                }}
                resizeMode='cover'
                source={{
                    uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                }}
            />
        </PhotoUpload>

        {/*<View style={{alignItems: 'center'}}>*/}
        {/*<Avatar*/}
        {/*rounded*/}
        {/*size={'xlarge'}*/}
        {/*source={{*/}
        {/*uri:*/}
        {/*'https://static.thenounproject.com/png/17241-200.png',*/}
        {/*}}*/}
        {/*showEditButton*/}
        {/*/>*/}
        {/*</View>*/}


        <TextInput
            style={styles.input}
            placeholder='Username'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
            style={styles.input}
            placeholder='Phone Number'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <DatePicker
            style={{width:'90%',color:'white'}}
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

        <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}

        />
        <CheckBox
            center
            onPress={() => {
                this.setState({checked: !this.state.checked});
            }}
            title='Accept Terms and conditions'
            checked={this.state.checked}
        />

        <Button
            color={'black'}
            title='Sign Up'
            onPress={this.signUp}
        />

</ScrollView>


            </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#f55742',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontFamily:'Noteworthy',
        fontWeight: '500',
    },
    textStyle:{
        fontSize:32,
        fontFamily: 'Noteworthy'
    },
    container: {
        backgroundColor:'#f5b042',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})