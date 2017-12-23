import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { material } from 'react-native-typography';

const jenis = require('../../konfig/jenis');

class JenisJenis extends Component {
  render() {
    console.log(jenis);
    return (
      <ScrollView>
        {/* <Text style={material.display1}> Jenis-jenis Ikan Nila</Text> */}
        <Card title="Jenis-jenis Ikan Nila">
          {/* <List> */}
          <FlatList
            data={jenis.data}
            underlayColor="blue"
            renderItem={({ item }) => (
              <ListItem
                onPress={() =>
                  this.props.navigation.navigate('InfoJenisIkan', {
                    judul: item.key,
                    isi: item.isi
                  })
                }
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
