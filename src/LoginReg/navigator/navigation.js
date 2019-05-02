import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

// import Home from '../index';
import Login from '../components/login';
import Date from '../components/date'
import Reg from '../components/reg'
import SignUp from '../components/signup';
import FlateList from '../components/flateList';


import ImageUpload from '../components/imageUpload';


const AppNavigator = createStackNavigator({
    Login,
    Date,
    Reg,
    SignUp,
    ImageUpload,
    FlateList
},{
    headerMode:'none',
    initialRouteName: 'SignUp'


});

export default createAppContainer(AppNavigator);
