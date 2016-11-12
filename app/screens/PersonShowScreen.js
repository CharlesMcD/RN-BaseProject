
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity} from 'react-native'
import ViewContainer from 'BaseProject/app/components/ViewContainer'
import StatusBarBackground from 'BaseProject/app/components/StatusBarBackground'
import Icon from 'react-native-vector-icons/Ionicons'

class PersonShowScreen extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ViewContainer style={{backgroundColor: "aliceblue"}}>

        <StatusBarBackground />

        <TouchableOpacity onPress={() => this.props.navigator.pop() } style={{marginLeft: 20}}>
          <Icon name="ios-arrow-back" size={40}/>
        </TouchableOpacity>

        <Text style={{marginTop:100, fontSize:20, marginLeft: 20}}>{'Person show screen'}</Text>
        <Text style={styles.personName}>{this.props.person.firstName} {this.props.person.lastName} </Text>

      </ViewContainer>

    );
  }

}


const styles = StyleSheet.create({
  personName: {
    marginLeft: 25
  }


});

module.exports = PersonShowScreen
