import React, { Component } from 'react';
import { ScrollView, FlatList, Image, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { material } from 'react-native-typography';
import ListInfo from '../../komponen/ListInfo';

const jenis = require('../../konfig/jenis');

class JenisJenis extends Component {
  render() {
    return (
      <ScrollView>
        {/* <Text style={material.display1}> Jenis-jenis Ikan Nila</Text> */}
        <Card title="Jenis-jenis Ikan Nila">
          {/* <List> */}
          <FlatList
            data={jenis.data}
            underlayColor="blue"
            renderItem={({ item }) => (
              <ListInfo
                onPress={() =>
                  this.props.navigation.navigate('Info', {
                    judul: item.key,
                    isi: item.isi,
                    gambar: item.gambar
                  })
                }
                teks={item.key}
                gambar={item.gambar}
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
