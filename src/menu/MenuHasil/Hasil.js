import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

class Hasil extends Component {
  render() {
    return (
      <Card>
        <Text style={{ marginBottom: 10 }}>
          Berdasarkan dari gejala-gejala yang dialami, ikan Nila anda terserang penyakit:
        </Text>
        <Text>1. Stereptococcosis = 70%</Text>
        <Text>2. Bintik Putih = 45%</Text>
        <Text>3. Bercak Merah = 10%</Text>
        <Text style={{ marginTop: 10 }}>
          Dilihat dari persentase yang tinggi ikan Nila terserang penyakit Stereptococcosis
        </Text>
      </Card>
    );
  }
}

export default Hasil;
