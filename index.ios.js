// Import
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { App } from './src/App';

// Component
class app extends Component {
  render() {
    return (
      <App />
    );
  }
}

// Render
AppRegistry.registerComponent('app', () => app);
