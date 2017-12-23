import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { material } from 'react-native-typography';
// import penyakit from '../../konfig/peyakit';

const jenis = {
  key: 'benih',
  isi:
    'Pemilihan benih merupakan faktor penting yang menentukan tingkat keberhasilan budidaya ikan nila. Untuk hasil maksimal sebaiknya gunakan benih ikan berjenis kelamin jantan. Karena pertumbuhan ikan nila jantan 40% lebih cepat dari pada ikan nila betina.<br/>Budidaya ikan nila secara monosex (berkelamin semua) lebih produktif dibanding campuran. Karena ikan nila mempunyai sifat gampang memijah (melakukan perkawinan). Sehingga bila budidaya dilakukan secara campuran, energi ikan akan habis untuk memijah dan pertumbuhan bobot ikan sedikit terhambat.<br/>Saat ini banyak yang menyediakan bibit ikan nila monosex. Bila sulit mendapatkannya, bibit ikan nila monosex bisa dibuat sendiri. Caranya bisa dilihat dalam artikel budidaya pembenihan ikan nila.'
};

class Benih extends Component {
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
export default Benih;
