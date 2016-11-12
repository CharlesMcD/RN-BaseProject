
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity, Navigator} from 'react-native'
import ViewContainer from 'BaseProject/app/components/ViewContainer'
import StatusBarBackground from 'BaseProject/app/components/StatusBarBackground'


const people = [
  {firstName: "Charles", lastName: "MacDuff", number: 10},
  {firstName: "David", lastName: "Boudreault", number: 15},
  {firstName: "Sam", lastName: "Roy", number: 43}
]

class MyListScreen extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})

    this.state = {
      peopleDataSource : ds.cloneWithRows(people)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />

        <ListView
          style={{marginTop:20}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this._renderPersonRow(person)} }
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          enableEmptySections={true}
          />

      </ViewContainer>

    );
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={ (event) => this._navigateToPersonShow(person)}>
          <View style={{flex: 1}}>
            <Text style={styles.personName}>
              {person.firstName} {person.lastName}
            </Text>
          </View>
        </TouchableOpacity>
    )
  }

  _navigateToPersonShow(person) {
    this.props.navigator.push({
      ident: "PersonShow",
      person: person,
      //sceneConfig:Navigator.SceneConfigs.FloatFromBottom
    })
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listview:{
    flex: 1,
    flexDirection: 'row',
    marginTop:50
  },
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height:40
  },

  personName: {
    marginLeft: 25
  },

  personIcon: {
    marginRight: 25
  }


});

module.exports = MyListScreen
