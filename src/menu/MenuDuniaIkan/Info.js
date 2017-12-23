import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { material } from 'react-native-typography';
// import penyakit from '../../konfig/peyakit';

class Info extends Component {
  // onCompile = () => {
  //   return ;
  // };
  render() {
    return (
      <View>
        <Card>
          <Text style={material.body1}>
            {this.props.navigation.state.params.isi.replace(new RegExp('<br/>', 'g'), '\n\n')}
          </Text>
        </Card>
      </View>
    );
  }
}
export default Info;
