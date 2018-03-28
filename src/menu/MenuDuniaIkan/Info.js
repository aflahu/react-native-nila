import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { material } from 'react-native-typography';
// import penyakit from '../../konfig/peyakit';

class Info extends Component {
  ifCompile = () => {
    if (this.props.navigation.state.params.gambar) {
      return (
        <Image
          resizeMode="stretch"
          style={{ height: 300, width: '100%', marginBottom: 10 }}
          source={this.props.navigation.state.params.gambar}
        />
      );
    }
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card>
          {this.ifCompile()}
          <Text style={material.body1}>
            {this.props.navigation.state.params.isi.replace(new RegExp('<br/>', 'g'), '\n\n')}
          </Text>
        </Card>
      </ScrollView>
    );
  }
}
export default Info;
