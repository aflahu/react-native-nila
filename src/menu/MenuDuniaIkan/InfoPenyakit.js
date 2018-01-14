import React, { Component } from 'react';
import { ScrollView, Text, FlatList, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { material } from 'react-native-typography';

const gambarPenyakit = require('../../konfig/GambarPenyakit');

class InfoPenyakit extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card>
          <Image
            resizeMode="stretch"
            style={{ width: '100%', height: 300 }}
            source={gambarPenyakit.gambar[this.props.navigation.state.params.index]}
          />
        </Card>
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
      </ScrollView>
    );
  }
}
export default InfoPenyakit;
