
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator, Text} from 'react-native'

import MyListScreen from './app/screens/MyListScreen'
import PersonShowScreen from './app/screens/PersonShowScreen'
import TabBarComponent from './app/components/TabBarComponent'

class BaseProject extends Component {

  _renderScene( route, navigator) {

    var globalNavigatorProps = { navigator }

    switch (route.ident) {

      case "HomeShow":
        return (
          <TabBarComponent
          {...globalNavigatorProps}/>
        )

      case "PersonShow":
        return (
          <PersonShowScreen
          {...globalNavigatorProps}
          person={route.person}/>
        )

      default:
        return (
          <Text>{'Mauvaise route'}</Text>
        )
      }
  }

  render() {
    return (
      <Navigator
      initialRoute={{ident: "HomeShow"}}
      ref="appNavigator"
      style={styles.navigatorStyles}
      renderScene={this._renderScene}
      configureScene={(route) => ({
        ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
    )
  }

}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

});

AppRegistry.registerComponent('BaseProject', () => BaseProject);
