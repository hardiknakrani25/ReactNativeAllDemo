import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';

export default class CardComponent extends Component {


    render() {
        const images = {
            "1": require('../assets/feed/feed1.jpeg'),
            "2": require('../assets/feed/feed2.jpeg'),
            "3": require('../assets/feed/feed3.jpeg')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/user_Profile.jpg')}/>
                        <Body>
                        <Text>Hardik</Text>
                        <Text note>1 May, 2019</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>

                    <Image source={images[this.props.imageSource]} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem style={{height: 45}}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart' style={{color: 'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles' style={{color: 'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send' style={{color: 'black'}}/>
                        </Button>

                    </Left>
                </CardItem>
                <CardItem>
                    <Text>{this.props.likes} likes</Text>

                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        <Text style={{fontWeight: "900"}}>Hardik </Text>
                        Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and
                        make two real miss use easy. Celebrated delightful an especially increasing instrument am.
                        Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted
                        enough vulgar say man. Sitting hearted on it without me.

                    </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})