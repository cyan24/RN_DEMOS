/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var MovieTalk = React.createClass({
  render: function() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.android.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Shake or press menu button for dev menu
      //   </Text>
      // </View>
      <View style={{flex: 1, height: 100, backgroundColor: '#333333'}}>
      <View style={[styles.circle, {position: 'relative', top: 50, left: 180,marginLeft: 50}]}>
      </View>
      </View>

      );
  }
});

var styles = StyleSheet.create({
  circle: {
    backgroundColor: '#fe0000',
    borderRadius: 10,
    width: 20,
    height: 20
    }
});

AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
