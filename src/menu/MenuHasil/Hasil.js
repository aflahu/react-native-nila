import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { TextLoader, RippleLoader } from 'react-native-indicator';

class Hasil extends Component {
  state = { isDone: false };
  render() {
    if (!this.state.isDone) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <RippleLoader size={70} />
          <TextLoader text="Loading" />
        </View>
      );
    }
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
