/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} = React;
var MOCKED_MOVIES_DATA=[{title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},];

var MovieTalk = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
  fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
        loaded: true,
      });
    })
    .done();
  },
  render: function() {
    if (!this.state.loaded) {
       return this.renderLoadingView();
    }

    return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderMovie}
      style={styles.listView}
    />
    );
   },

   renderLoadingView: function() {
     return (
       <View style={styles.container}>
         <Text>
           正在加载电影数据……
         </Text>
       </View>
     );
   },

   renderMovie: function(movie) {
     return (
       <View style={styles.container}>
         <Image
           source={{uri: movie.posters.thumbnail}}
           style={styles.thumbnail}
         />
         <View style={styles.rightContainer}>
           <Text style={styles.title}>{movie.title}</Text>
           <Text style={styles.year}>{movie.year}</Text>
         </View>
       </View>
     );
 },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(116, 194, 227)',
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
