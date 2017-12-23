import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { material } from 'react-native-typography';
// import penyakit from '../../konfig/peyakit';

const jenis = [
  {
    key: 'Karakteristik',
    isi:
      '1) Parasit berbentuk jangkar/kail menempel pada permukaan tubuh, lubang hidung, pangkal sirip, insang, dan rongga pipi. <br/>2) Pendarahan di area menempelnya parasit berbentuk jangkar'
  },
  {
    key: 'Gejala',
    isi:
      '1) Rendam ikan menggunakan 2,5 ml Formalin yang di campur 100 liter air bersih, lakukan 10 menit. <br/>2) Jika pengobatan dilakukan di dalam kolam pemeliharaan, gunakan insektisida dari golongan Organofosfat dengan dosis 0,5 mg/l. Insektisida tersebut disemprotkan sebanyak 4 kali berturut-turut. <br/>3) Mengangkat tubuh ikan yang sakit secara hati-hati, kemudian menggunting parasit yang menancap ditubuh  ikan tersebut.'
  },
  {
    key: 'Pengobatan',
    isi:
      '1) Ikan yang terserang diisolasi dari ikan yang lain. <br/>2) Manajemen pakan (kebersihan dan frekuensi pemberian makannya) <br/>3) Pengendapan dan penyaringan air masuk'
  },
  {
    key: 'Pencegahan',
    isi:
      '1) Ikan yang terserang diisolasi dari ikan yang lain. <br/>2)	Manajemen pakan (kebersihan dan frekuensi pemberian makannya) <br/>3) Pengendapan dan penyaringan air masuk'
  }
];

class Lernea extends Component {
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
export default Lernea;
