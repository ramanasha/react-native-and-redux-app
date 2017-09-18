// Import
import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, Image, TouchableOpacity, Text } from 'react-native';

// Component
class App extends Component {
  render() {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#B71C1C"
                barStyle="light-content"
            />
            <View style={styles.main}>
                <Image source={require('../assets/images/logo.png')} />
                <TouchableOpacity>
                    <Text style={styles.font}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F44336'
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        fontSize: 22,
        color: '#FFFFFF'
    }
});

// Export
export default App;