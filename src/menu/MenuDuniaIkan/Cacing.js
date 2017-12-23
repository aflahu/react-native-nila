import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { material } from 'react-native-typography';
// import penyakit from '../../konfig/peyakit';

const jenis = [
  {
    key: 'Karakteristik',
    isi:
      'Penyakit ini umumnya ditemui pada insang dan kulit ikan Nila. Parasit Dactylogyrus menyerang insang dan kulit ikan Nila. Sementara itu, Gyrodactylus menyerang bagian kulit saja.'
  },
  {
    key: 'Gejala',
    isi:
      '1) Warna tubuh ikan keputihan dan pucat <br/>2) Nafsu makan menurun,ikan tidak seperti biasanya dan ikan tidak mau makan <br/>3) Ikan sulit bernafas, sering megap-megap dan muncul ke permukaan <br/> 4) Lendir berlebihan, ikan terlihat mengkilap dan licin <br/>5) Ikan sering berkumpul di saluran air masuk <br/>6) Ikan mengosok-gosokkan badannya pada benda keras <br/>7) Bercak merah atau hitam di badan ikan <br/>8) Sisik terkelupas <br/>9) Ikan berenang dengan cara melonjak-lonjak'
  },
  {
    key: 'Pengobatan',
    isi:
      '1)  Ikan yang terserang diisolasi dari ikan yang lain. <br/>2) Manajemen pakan (kebersihan dan frekuensi pemberian makannya) <br/>3) Pengendapan dan penyaringan air masuk'
  },
  {
    key: 'Pencegahan',
    isi:
      '1) Frekuensi pergantian air lebih sering dengan suhu air >29° <br/>2) Berikan vitamin C untuk meningkatkan ketahanan tubuh.'
  }
];

class Cacing extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={jenis}
          renderItem={({ item }) => (
            <Card title={item.key}>
              <Text style={material.body1}>
                {item.isi.replace(new RegExp('<br/>', 'g'), '\n\n')}
              </Text>
            </Card>
          )}
        />
      </View>
    );
  }
}
export default Cacing;
