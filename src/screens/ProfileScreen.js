import React, {Component} from 'react';
import {Text, View} from 'react-native';

class ProfileScreen extends Component {

  onMenuPressed = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={{backgroundColor: 'blue'}}><Text>Drawer Test</Text></View>
    );
  }
}

export default ProfileScreen;