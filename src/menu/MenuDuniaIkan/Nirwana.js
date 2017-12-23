import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { material } from 'react-native-typography';
// import penyakit from '../../konfig/peyakit';

const jenis = {
  key: 'nirwana',
  isi:
    'Nama Nirwana bersal dari singkatan (Nila ras wanayasa). Wanayasa merupakan salah satu Kecamatan di Purwakarta, Jawa Barat, tempat berlangsung kegiatan penelitian untuk pemuliaan ikan Nila ini selama tiga tahun (2003-2006), tepatnya di Balai Pengembangan Benih Ikan (BPBI) Wanayasa. <br/>Berdasarkan hasil penelitian, ikan Nila Nirwana memiliki beberapa keunggulan sebagai berikut:<br/>a.	Pertumbuhan bobot ikan Nila Nirwana meningkat sekitar 45% pada generasi ke-3 (F3) dibandingkan dengan populasi awalnya. Pemeliharaan sejak larva hingga berbobot di atas 650 gram per ekor dapat dicapai hanya dalam waktu enam bulan (lebih cepat dibanding dengan jenis Nila lainnya).<br/>b.	Tubuh Nila Nirwana relatif lebih besar dengan ukuran kepala yang lebih pendek. Hail ini menjadikan ikan ini memiliki struktur daging yang lebih tebal dibandingkan dengan ikan Nila lainnya.<br/>c.	Memiliki toleransi yang cukup tinggi terhadap lingkungan hidupnya, sehingga bisa dipelihara di daratan rendah yang berair payau hingga daratan tinggi yang berair tawar dengan kisaran 0-15‰ (promil). <br/>d.	Relatif tahan terhadap serangan hama dan penyakit. Salah satunya, tahan terhadap serangan bakteri streptococcus.'
};

class Nirwana extends Component {
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
export default Nirwana;
