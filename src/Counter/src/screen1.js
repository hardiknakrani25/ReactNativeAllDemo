import React,{Component} from 'react';
import {SafeAreaView,Button,Text} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation'

class Screen1 extends Component{
    render(){
        return(
            <SafeAreaView>
                <Text>
                    Screen1
                </Text>
            </SafeAreaView>
        )
    }
}

const AppNavigator=createStackNavigator({
    Home:{
        Screen1:HomeScreen
    }
})



export default createAppContainer(AppNavigator);