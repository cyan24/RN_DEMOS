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
  Image,
} = React;
var MOCKED_MOVIES_DATA=[{title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},];

var MovieTalk = React.createClass({
  render: function() {
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit index.ios.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       Press Cmd+R to reload,{'\n'}
    //       Cmd+D or shake for dev menu
    //     </Text>
    //   </View>
    // );
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style = {styles.container}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image source = {{uri: movie.posters.thumbnail}}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#rgb(116, 194, 227)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});





AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
