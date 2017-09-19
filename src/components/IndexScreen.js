// Imports
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default props => (
    <View style={styles.main}>
        <Image source={require('../../assets/images/logo.png')} />
        <TouchableOpacity onPress={() => false}>
            <Text style={styles.font}>Get Started</Text>
        </TouchableOpacity>
    </View>
);

// Styles
const styles = StyleSheet.create({
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