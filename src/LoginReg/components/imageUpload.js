import React,{Component} from 'react';
import {Alert,SafeAreaView,View ,Text,Image,StyleSheet} from 'react-native';

import PhotoUpload from 'react-native-photo-upload'


export default  class imageUpload extends Component{
    constructor(props){
        super(props)
        this.state={
           user: this.props.navigation.getParam('userName'),
            password:this.props.navigation.getParam('password'),
            email:this.props.navigation.getParam('email'),
            phno:this.props.navigation.getParam('phno'),
            gender:this.props.navigation.getParam('gender'),
            dob:this.props.navigation.getParam('dob'),
            image:this.props.navigation.getParam('image')

        }

    }
render() {
    return(
<SafeAreaView style={styles.container}>
    <View style={{alignItems:'center'}}>

        <Text style={styles.textStyle}>
            Register Successfully
        </Text>

        <Text style={{fontFamily:'Noteworthy'}}>
           Welcome {this.state.user}

        </Text>


    </View>




        <Image
            style={{
                paddingVertical: 30,
                width: 150,
                height: 150,
                borderRadius: 75
            }}
            resizeMode='cover'
            source={{
                uri: this.state.image
            }}
        />


    <Text>
        {this.state.email}
    </Text>

    <Text>
        {this.state.gender}
    </Text>
    <Text>
        {this.state.phno}
    </Text>
    <Text>
        {this.state.dob}
    </Text>
</SafeAreaView>

    )

}

}



const styles=StyleSheet.create({
    textStyle:{
        fontSize:32,
        fontFamily: 'Noteworthy'
    },
    container:{
        backgroundColor:'#f5b042',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})