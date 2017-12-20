import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const jenis = [
  { key: 'Nirwana' },
  { key: 'Larasati' },
  { key: 'Best' },
  { key: 'Gesit' },
  { key: 'Hitam (lokal)' },
  { key: 'Merah' },
  { key: 'GIFT' },
  { key: 'GET' },
  { key: 'GET' }
];

class JenisJenis extends Component {
  render() {
    return (
      <ScrollView>
        <Card title="Jenis-jenis Ikan Nila">
          <FlatList data={jenis} renderItem={({ item }) => <ListItem title={item.key} />} />
        </Card>
      </ScrollView>
    );
  }
}

export default JenisJenis;
