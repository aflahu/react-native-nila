import React, { Component } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { TextLoader, RippleLoader } from 'react-native-indicator';
import ProgressCircle from 'react-native-progress-circle';
import axios from 'axios';
// import mulai from '../../metode/mulai';
const penyakitInfo = require('../../konfig/penyakit');

// const belief = require('../../konfig/belief');
const namaPenyakit = require('../../konfig/namaPenyakit').data;

class Hasil extends Component {
  state = {
    loading: true,
    diagnosa: {},
    error: false
  };
  async componentDidMount() {
    // this.setState({ data: this.props.navigation.state.params.data });
    // console.log(this.props.navigation.state.params.data);
    await this.onTunggu();
  }
  onTunggu = async () => {
    try {
      const { data } = this.props.navigation.state.params;
      const idPilih = data.map(item => item.key);
      // const hasil = belief.filter((item, i) => {
      //   if (idPilih.includes(item.key)) {
      //     return belief[i];
      //   }
      // });
      const diagnosa = await axios.post('https://agile-gorge-87388.herokuapp.com/', {
        gejala: idPilih
      });
      if (diagnosa.status === 400) {
        throw 'oops';
      }
      // console.log(diagnosa.status);
      this.setState({
        loading: false,
        diagnosa: diagnosa.data.hasil
      });
    } catch (error) {
      Alert.alert(
        'Oops',
        'Silahkan coba kembali',
        [{ text: 'OK', onPress: () => this.props.navigation.navigate('MenuDiagnosa') }],
        { cancelable: false }
      );
      // this.setState({ loading: false, error: true });
      // console.log(error);
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
    // console.log({ penyakit, persen });
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card title="Hasil">
          <Text style={{ marginBottom: 10 }}>
            Berdasarkan dari gejala-gejala yang dialami, ikan Nila anda terserang penyakit:
          </Text>
          <View style={{ alignItems: 'center' }}>
            <ProgressCircle
              percent={Number((persen * 100).toFixed())}
              radius={50}
              borderWidth={8}
              color="#3F51B5"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text>{(persen * 100).toFixed()}%</Text>
            </ProgressCircle>
            <Text>{namaPenyakit[penyakit[0] - 1]}</Text>
          </View>
        </Card>
        <Card title="Pengobatan">
          <Text>
            {penyakitInfo.data[penyakit[0]].data[2].isi.replace(new RegExp('<br/>', 'g'), '\n\n')}
          </Text>
        </Card>
        <Card title="Pencegahan">
          <Text>
            {penyakitInfo.data[penyakit[0]].data[3].isi.replace(new RegExp('<br/>', 'g'), '\n\n')}
          </Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Hasil;
