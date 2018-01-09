import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { human } from 'react-native-typography';

const namaPenyakit = require('../../konfig/namaPenyakit').data;
const penyakitData = require('../../konfig/penyakit');

class Penyakit extends Component {
  onAddKey = arr => arr.map(item => ({ key: item }));
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card title="penyakit-penyakit Ikan Nila">
          <FlatList
            data={this.onAddKey(namaPenyakit)}
            renderItem={({ item, index }) => (
              <ListItem
                onPress={() =>
                  this.props.navigation.navigate('InfoPenyakit', {
                    judul: item.key,
                    isi: penyakitData.data[index].data
                  })
                }
                title={item.key}
              />
            )}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default Penyakit;
