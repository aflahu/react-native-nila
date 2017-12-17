import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { human } from 'react-native-typography';

class Penyakit extends Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={human.title2}>Jenis Jenis Penyakit</Text>
        <List>
          <ListItem title="Lernea" />
          <ListItem title="Cacing dan Kulit" />
          <ListItem title="Bercak Merah" />
        </List>
      </View>
    );
  }
}

export default Penyakit;
