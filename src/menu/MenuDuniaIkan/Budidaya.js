import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
// import { human } from 'react-native-typography';

const budidaya = [
  { key: 'Memilih Benih ikan Nila', open: 'Benih' },
  { key: 'Persiapan Kolam Budidaya' },
  { key: 'Penebaran Benih Ikan Nila', open: 'Penebaran' },
  { key: 'Pemilihaaan Budiday Ikan Nila' },
  { key: 'Pemiliharaan Ikan Nila)' }
];

class Budidaya extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card title="Budidaya Ikan Nila">
          <FlatList
            data={budidaya}
            renderItem={({ item }) => (
              <ListItem
                onPress={() => this.props.navigation.navigate(item.open)}
                title={item.key}
              />
            )}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default Budidaya;
