import React, {Component} from 'react';
import {DatePickerIOS, View, StyleSheet,Button} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {chosenDate: new Date()};

        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate});
    }

    render() {
        return (
            <View style={styles.container}>
                <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                />
                <Button
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});