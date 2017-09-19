// Imports
import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import IndexScreen from './components/IndexScreen';

// Component
class App extends Component {
  render() {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#B71C1C"
                barStyle="light-content"
            />
            <IndexScreen />
        </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F44336'
    }
});

// Export
export default App;