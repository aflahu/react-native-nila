import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const budidaya = require('../../konfig/budidaya');

class Budidaya extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card title="Budidaya Ikan Nila">
          <FlatList
            data={budidaya.data}
            renderItem={({ item }) => (
              <ListItem
                onPress={() =>
                  this.props.navigation.navigate('Info', {
                    judul: item.key,
                    isi: item.isi
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

export default Budidaya;
