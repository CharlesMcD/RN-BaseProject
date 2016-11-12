import React, { Component } from 'react';

import { Text,StyleSheet, View, ScrollView } from 'react-native';

import HomeScreen from '../screens/HomeScreen'
import MyListScreen from '../screens/MyListScreen'

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

class TabBarComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return <ScrollableTabView
      renderTabBar={() => <DefaultTabBar />}
      tabBarPosition='bottom'
      initialPage={0}
    >

      <ScrollView tabLabel="Accueil" >
        <View>
          <HomeScreen navigator={this.props.navigator} />
        </View>
      </ScrollView>

      <ScrollView tabLabel="Ma liste" >
        <View>
          <MyListScreen navigator={this.props.navigator} />
        </View>
      </ScrollView>

    </ScrollableTabView>
    ;
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.01)',
  }
});

module.exports = TabBarComponent