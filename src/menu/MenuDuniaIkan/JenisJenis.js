import React, { Component } from 'react';
import { ScrollView, FlatList, TouchableHighlight } from 'react-native';
import { Card, Button, ListItem } from 'react-native-elements';
import { material } from 'react-native-typography';

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
        {/* <Text style={material.display1}> Jenis-jenis Ikan Nila</Text> */}
        <Card title="Jenis-jenis Ikan Nila">
          {/* <List> */}
          <FlatList
            data={jenis}
            underlayColor="blue"
            renderItem={({ item }) => (
              <ListItem
                onPress={() => this.props.navigation.navigate('Nirwana')}
                title={item.key}
              />
            )}
          />
          {/* </List> */}
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  root: {}
};

export default JenisJenis;
