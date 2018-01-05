import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { material } from 'react-native-typography';

class InfoPenyakit extends Component {
  render() {
    console.log(this.props.navigation.state.params.isi);
    return (
      <View>
        <FlatList
          data={this.props.navigation.state.params.isi}
          renderItem={({ item }) => (
            <Card title={item.key}>
              <Text style={material.body1}>
                {item.isi.replace(new RegExp('<br/>', 'g'), '\n\n')}
              </Text>
            </Card>
          )}
        />
      </View>
    );
  }
}
export default InfoPenyakit;
