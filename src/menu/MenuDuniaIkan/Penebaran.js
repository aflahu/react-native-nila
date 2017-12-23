import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { material } from 'react-native-typography';
// import penyakit from '../../konfig/peyakit';

const jenis = {
  key: 'penebaran',
  isi:
    'Kolam yang telah terisi air sedalam 60-75 cm siap untuk ditebari benih ikan nila. Padat tebar kolam tanah untuk budidaya ikan nila sebanyak 15-30 ekor/m2. Dengan asumsi, ukuran benih sebesar 10-20 gram/ekor dan akan dipanen dengan ukuran 300 gram/ekor.<br/>Sebelum benih ditebar, hendaknya melewati tahap adaptasi terlebih dahulu. Gunanya agar benih ikan terbiasa dengan kondisi kolam, sehingga resiko kematian benih bisa ditekan. Caranya, masukkan wadah yang berisi benih ikan nila ke dalam air kolam. Biarkan selama beberapa jam. Kemudian miringkan atau buka wadah tersebut. Biarkan ikan keluar dan lepas dengan sendirinya.'
};

class Penebaran extends Component {
  render() {
    return (
      <View>
        <Card>
          <Text style={material.body1}>{jenis.isi.replace(new RegExp('<br/>', 'g'), '\n\n')}</Text>
        </Card>
      </View>
    );
  }
}
export default Penebaran;
