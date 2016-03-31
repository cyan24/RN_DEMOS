/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var LayoutAnimation =require('LayoutAnimation');
// var PanResponderDemo = require('./PanResponderExample');
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
} = React;
var MOCKED_MOVIES_DATA=[{title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},];

var MovieTalk = React.createClass({
  componentWillMount() {
    // 创建动画
    LayoutAnimation.spring();
  },

  getInitialState() {
    return { w: 100, h: 100 }
  },

  _onPress() {
    // 让视图的尺寸变化以动画形式展现
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    // width:200,
    // height:400,
    flex:1,
    // flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(116, 194, 227)',
  },
  box:{
    width:100,
    height:130,
    backgroundColor:"#f5c067",
  },
  button:{
    width:100,
    height:40,
    alignItems: 'center',
    backgroundColor:'#c5f5fb',
    justifyContent: 'center',
  },
  rightContainer:{
    flex:1,
  },
  thumbnail:{
    width:53,
    height:81,
  },
  title:{
    fontSize:20,
    marginBottom:8,
    textAlign:'center'
  },
  year:{
    textAlign:'center'
  },
  listView:{
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
