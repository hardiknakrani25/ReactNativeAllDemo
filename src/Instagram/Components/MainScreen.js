import React, { Component } from "react";
import {SafeAreaView, Text, StyleSheet, Platform} from "react-native";
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import {Icon} from "native-base";


import HomeTab from './AppTabNavigator/HomeTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import SearchTab from './AppTabNavigator/SearchTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';



class MainScreen extends Component {
    static navigationOptions = {
        headerLeft: <Icon name="camera" style={{paddingLeft: 15}}/>,
        title: "Instagram",
        headerRight: <Icon name="send" style={{paddingRight: 15}}/>
    };

  render() {
    return (

        <AppTabNavigator/>

    );
  }
}

export default MainScreen;

const TabsNavigator = createBottomTabNavigator({
    HomeTab,
    SearchTab,
    AddMediaTab,
    LikesTab,
    ProfileTab
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white'
                }
            })
        },

        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
})

const AppTabNavigator = createAppContainer(TabsNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
