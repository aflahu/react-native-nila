import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { human } from 'react-native-typography';

const penyakit = [
  { key: 'Lernea' },
  { key: 'Cacing Insang dan Kulit' },
  { key: 'Becak merah' },
  { key: 'Trichodina' },
  { key: 'Saprolegenesis)' },
  { key: 'Epstylis' },
  { key: 'Bintik Putih' },
  { key: 'Panducle' },
  { key: 'Edward Siella' },
  { key: 'Kutu Ikan' },
  { key: 'Stereptococcosis' },
  { key: 'Tilapia Like Virus' }
];

class Penyakit extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card title="penyakit-penyakit Ikan Nila">
          <FlatList data={penyakit} renderItem={({ item }) => <ListItem title={item.key} />} />
        </Card>
      </ScrollView>
    );
  }
}

export default Penyakit;
