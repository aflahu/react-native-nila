import React, { Component } from 'react';
import { Text, View, ScrollView, Alert, Image } from 'react-native';
import { Card, ButtonGroup, Button, Icon } from 'react-native-elements';
import { TextLoader, RippleLoader } from 'react-native-indicator';
import ProgressCircle from 'react-native-progress-circle';
import axios from 'axios';
import NavigasiHasil from '../../komponen/NavigasiHasil';
// import mulai from '../../metode/mulai';
const penyakitInfo = require('../../konfig/penyakit');

// const belief = require('../../konfig/belief');
const namaPenyakit = require('../../konfig/namaPenyakit').data;
const gambarPenyakit = require('../../konfig/GambarPenyakit');

class Hasil extends Component {
  static navigationOptions = () => {
    return { headerLeft: null };
  };
  state = {
    loading: true,
    diagnosa: {},
    error: false
  };
  async componentDidMount() {
    await this.onTunggu();
  }
  onTunggu = async () => {
    try {
      const { data } = this.props.navigation.state.params;
      const idPilih = data.map(item => item.key);
      const diagnosa = await axios.post('https://agile-gorge-87388.herokuapp.com/', {
        gejala: idPilih
      });
      if (diagnosa.status === 400) {
        throw 'oops';
      }
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
    }
  };

  onDiagnosaUlang = () => this.props.navigation.goBack();
  onMenuAwal = () => {
    this.props.navigation.navigate('MenuAwal');
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <RippleLoader size={70} color="#3F51B5" />
          <TextLoader text="Loading" />
        </View>
      );
    }

    const { penyakit, persen } = this.state.diagnosa;
    const buttons = ['Menu Utama', 'Diagnosa Ulang'];
    return (
      <View style={{ flex: 1 }}>
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
          <Card>
            <Image
              style={{ width: 150, height: 150, alignSelf: 'center' }}
              source={gambarPenyakit.gambar[penyakit[0] - 1]}
            />
          </Card>
          <Card title="Pengobatan">
            <Text>
              {penyakitInfo.data[penyakit[0] - 1].data[2].isi.replace(
                new RegExp('<br/>', 'g'),
                '\n\n'
              )}
            </Text>
          </Card>
          <Card title="Pencegahan">
            <Text>
              {penyakitInfo.data[penyakit[0] - 1].data[3].isi.replace(
                new RegExp('<br/>', 'g'),
                '\n\n'
              )}
            </Text>
          </Card>
          <View style={{ marginBottom: 70 }} />
        </ScrollView>
        <NavigasiHasil onDiagnosaUlang={this.onDiagnosaUlang} onMenuAwal={this.onMenuAwal} />
      </View>
    );
  }
}

export default Hasil;
