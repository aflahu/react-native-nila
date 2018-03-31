import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { Table, TableWrapper, Rows, Col } from 'react-native-table-component';
import { material } from 'react-native-typography';
const morfology = require('../../Gambar/morfology.png');

class Klasifikasi extends Component {
  render() {
    const tableTitle = [
      'Filum',
      'Subfilum',
      'Kelas',
      'Subkelas',
      'Bangsa',
      'Suku',
      'Marga',
      'Spesies',
      'Nama Asing',
      'Nama Lokal'
    ];
    const tableData = [
      ['Chordata'],
      ['Vertebrata'],
      ['Pisces'],
      ['Acanthopterigii'],
      ['Perciformes'],
      ['Chichlidae'],
      ['Oreochronis'],
      ['Oreochromis Niloticus'],
      ['Nile Tilapia'],
      ['Nila']
    ];
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card title="Klasifikasi" style={{ marginBottom: 15 }}>
          <Text style={material.body1}>
            Pada awalnya, ikan Nila dimasukkan ke dalam jenis Tilapia nilotica atau ikan dari
            golongan tilapia yang tidak mengerami telur dan larva di dalam mulut induknya. Akhirnya,
            diketahui bahwa yang mengerami telur dan larva di dalam mulut hanya induk betina. Para
            pakar perikanan kemudian memustuskan bahwa nama ilmiah yang tepat untuk ikan ini adalah
            Oreochromis niloticus atau Oreochromis sp. Nama nilotika menunjukkan tempat ikan Nila
            berasal, yakni Sungai Nil di Benua Afrika. Berikut klasifikasi ikan Nila selengkapnya:
            {'\n'}
          </Text>
          <Table>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col
                data={tableTitle}
                style={styles.title}
                heightArr={[28, 28]}
                textStyle={styles.text}
              />
              <Rows data={tableData} flexArr={[2]} style={styles.row} textStyle={styles.text} />
            </TableWrapper>
          </Table>
        </Card>
        <Card title="Morfology">
          <Image source={morfology} />
          <Text style={[...material.body1, styles.tallText]}>
            {'\n'}
            Keterangan Bagian ikan Nila:
            {'\n'}
            a. celah mulut (rima oris)
            {'\n'}
            b. mata (organon visus)
            {'\n'}
            c. tutup insang (apparatus opercularis)
            {'\n'}
            d. sirip punggung (pinna dorsalis)
            {'\n'}
            e. sirip dada (pinna pectoralis)
            {'\n'}
            f. sirip perut (pinna abdominales)
            {'\n'}
            g. sirip anus (pinna analis)
            {'\n'}
            h. sirip ekor (pinna caudalis)
            {'\n'}
            {'\n'}
            Secara umum, bentuk tubuh ikan Nila memanjang dan ramping, dengan sisik berukuran besar.
            Bentuk matanya besar dan menonjol dengan tepi yang berwarna putih. Sirip punggung, sirip
            perut, dan sirip dubur mempunyai jari-jari lemah tetapi keras dan tajam seperti duri.
            Sirip pungung dan dadanya bewarna hitam. Begitu juga dengan bagian pinggir sirip
            punggung. {'\n\n'}Jika dibedakan berdasarkan jenis kelamin, ikan Nila jantan memiliki
            ukuran sisik yang lebih besar dibandingkan dengan ikan Nila betina. Alat kelamin ikan
            Nila jantan terletak di depan anus. Bentuknya berupa tonjolan agak runcing, berfungsi
            sebagai saluran urine dan saluran sperma. Sementara itu, alat kelamin ikan Nila betina
            juga terletak di depan anus, tetapi memiliki lubang genital yang terpisah dengan lubang
            saluran urine.{'\n\n'}Banyak yang keliru membedakan antara ikan Nila dan Mujair, dapat
            dilihat perbandingan antara panjang total dan tinggi badan,untuk ukuran tubuh ikan Nila
            adalah 3:1 sedangkan Mujair 2:1. Selain itu, terlihat pola garis vertikal yang sangat
            jelas di sirip ekor ada 6 buah dan sirip punggung ada 8 buah.
          </Text>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  title: { flex: 1, backgroundColor: '#90CAF9' },
  row: { height: 28 },
  text: { marginLeft: 2 },
  tallText: { textAlign: 'justify' }
};

export default Klasifikasi;
