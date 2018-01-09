import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const namaPenyakit = require('../../konfig/namaPenyakit').data;

class Hasil extends Component {
  render() {
    const { penyakit, belief } = this.props.navigation.state.params.diagnosa;
    // console.log(this.props.navigation.state.params.diagnos);
    return (
      <Card>
        <Text style={{ marginBottom: 10 }}>
          Berdasarkan dari gejala-gejala yang dialami, ikan Nila anda terserang penyakit:
        </Text>
        <Text>
          {namaPenyakit[penyakit]} : {(belief * 100).toFixed(2)}%
        </Text>
      </Card>
    );
  }
}

export default Hasil;
