import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import ListInfo from '../../komponen/ListInfo';

const jenis = require('../../konfig/jenis');

class JenisJenis extends Component {
  render() {
    return (
      <ScrollView>
        <Card title="Jenis-jenis Ikan Nila">
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
        </Card>
      </ScrollView>
    );
  }
}

export default JenisJenis;
