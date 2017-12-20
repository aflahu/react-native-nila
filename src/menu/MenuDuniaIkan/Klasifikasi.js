import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Markdown from 'react-native-simple-markdown';

class Klasifikasi extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {/* <Markdown>
          Pada awalnya, ikan Nila dimasukkan ke dalam jenis Tilapia nilotica atau ikan dari golongan
          tilapia yang tidak mengerami telur dan larva di dalam mulut induknya. Akhirnya, diketahui
          bahwa yang mengerami telur dan larva di dalam mulut hanya induk betina. Para pakar
          perikanan kemudian memustuskan bahwa nama ilmiah yang tepat untuk ikan ini adalah
          Oreochromis niloticus atau Oreochromis sp. Nama nilotika menunjukkan tempat ikan Nila
          berasal, yakni Sungai Nil di Benua Afrika. Berikut klasifikasi ikan Nila selengkapnya.
          {'\n\n'}
          | # | Name | Age |{'\n'}
          |---|--------|-----|{'\n'}
          | 1 | John | 19 |{'\n'}
          | 2 | Sally | 18 |{'\n'}
          | 3 | Stream | 20 |{'\n'}
        </Markdown> */}
        <Card title="Klasifkasi">
          <Text>
            Pada awalnya, ikan Nila dimasukkan ke dalam jenis Tilapia nilotica atau ikan dari
            golongan tilapia yang tidak mengerami telur dan larva di dalam mulut induknya. Akhirnya,
            diketahui bahwa yang mengerami telur dan larva di dalam mulut hanya induk betina. Para
            pakar perikanan kemudian memustuskan bahwa nama ilmiah yang tepat untuk ikan ini adalah
            Oreochromis niloticus atau Oreochromis sp. Nama nilotika menunjukkan tempat ikan Nila
            berasal, yakni Sungai Nil di Benua Afrika. Berikut klasifikasi ikan Nila selengkapnya:
          </Text>
        </Card>
        <Card title="Morfology">
          <Text>
            Secara umum, bentuk tubuh ikan Nila memanjang dan ramping, dengan sisik berukuran besar.
            Bentuk matanya besar dan menonjol dengan tepi yang berwarna putih. Sirip punggung, sirip
            perut, dan sirip dubur mempunyai jari-jari lemah tetapi keras dan tajam seperti duri.
            Sirip pungung dan dadanya bewarna hitam. Begitu juga dengan bagian pinggir sirip
            punggung. Jika dibedakan berdasarkan jenis kelamin, ikan Nila jantan memiliki ukuran
            sisik yang lebih besar dibandingkan dengan ikan Nila betina. Alat kelamin ikan Nila
            jantan terletak di depan anus. Bentuknya berupa tonjolan agak runcing, berfungsi sebagai
            saluran urine dan saluran sperma. Sementara itu, alat kelamin ikan Nila betina juga
            terletak di depan anus, tetapi memiliki lubang genital yang terpisah dengan lubang
            saluran urine. Banyak yang keliru membedakan antara ikan Nila dan Mujair, dapat dilihat
            perbandingan antara panjang total dan tinggi badan,untuk ukuran tubuh ikan Nila adalah
            3:1 sedangkan Mujair 2:1. Selain itu, terlihat pola garis vertikal yang sangat jelas di
            sirip ekor ada 6 buah dan sirip punggung ada 8 buah.
          </Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Klasifikasi;
