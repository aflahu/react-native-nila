import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { TextLoader, RippleLoader } from 'react-native-indicator';
import mulai from '../../metode/mulai';

const belief = require('../../konfig/belief');
const namaPenyakit = require('../../konfig/namaPenyakit').data;

class Hasil extends Component {
  state = {
    loading: true,
    diagnosa: {}
  };
  componentDidMount() {
    // this.setState({ data: this.props.navigation.state.params.data });
    // console.log(this.props.navigation.state.params.data);
    this.onTunggu();
  }
  onTunggu = async () => {
    try {
      // const gejala = belief.data.filter(item => item.key === this.state.data.data.key);
      const { data } = this.props.navigation.state.params;
      const idPilih = data.map(item => item.key);

      const hasil = belief.filter((item, i) => {
        if (idPilih.includes(item.key)) {
          return belief[i];
        }
      });
      // console.log(hasil);
      const diagnosa = await mulai(hasil);
      // console.log(diagnosa);
      this.setState({
        loading: false,
        diagnosa
      });
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <RippleLoader size={70} />
          <TextLoader text="Loading" />
        </View>
      );
    }
    const { penyakit, persen } = this.state.diagnosa;
    console.log({ penyakit, persen });
    return (
      <Card>
        <Text style={{ marginBottom: 10 }}>
          Berdasarkan dari gejala-gejala yang dialami, ikan Nila anda terserang penyakit:
        </Text>
        <Text>
          {namaPenyakit[Number(penyakit)]} : {(persen * 100).toFixed(2)}%
        </Text>
      </Card>
    );
  }
}

export default Hasil;
