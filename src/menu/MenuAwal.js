import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { human } from 'react-native-typography';
import Tombol from '../komponen/element/Tombol';

class App extends Component {
  onDiagnosa = () => {
    this.props.navigation.navigate('MenuDiagnosa');
  };
  onDuniaIkan = () => {
    this.props.navigation.navigate('MenuDuniaIkan');
  };

  render() {
    return (
      <View style={styles.root}>
        <Image style={{ width: 100, height: 110 }} source={require('../Gambar/uin.jpg')} />
        <Text style={styles.title}>Sistem Pakar Diagnosa Ikan</Text>
        <Card containerStyle={styles.card} title="Pilihan Menu">
          <Tombol
            gaya={styles.button}
            warnaDasar="#6186E8"
            ikon="search"
            teks="Diagnosa"
            onTekan={this.onDiagnosa}
          />
          <Tombol
            warnaDasar="#6186E8"
            ikon="info-outline"
            teks="Dunia Ikan"
            onTekan={this.onDuniaIkan}
          />
        </Card>
      </View>
    );
  }
}

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4EAF7'
  },
  card: {
    width: '80%',
    backgroundColor: '#EAF3FB',
    borderRadius: 10
  },
  title: {
    ...human.title2Object,
    alignSelf: 'center'
  },
  button: {
    marginBottom: 20
  }
};

export default App;
