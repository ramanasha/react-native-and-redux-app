// Import
import React, { Component } from 'react';
import { StatusBar, View, Text } from 'react-native';

// Component
class App extends Component {
  render() {
    return (
        <View>
            <StatusBar
                backgroundColor="darkred"
                barStyle="light-content"
            />
            <View>
                <Text>Hello World</Text>
            </View>
        </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
    container: {
    }
});

// Export
export default App;