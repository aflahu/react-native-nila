import React, { Component } from 'react';
import { View, Text, Image, BackHandler } from 'react-native';
import { Card } from 'react-native-elements';
import { human } from 'react-native-typography';
import Tombol from '../komponen/element/Tombol';

class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  onDiagnosa = () => {
    this.props.navigation.navigate('MenuDiagnosa');
  };
  onDuniaIkan = () => {
    this.props.navigation.navigate('MenuDuniaIkan');
  };
  handleBackButtonClick() {
    BackHandler.exitApp();
    return true;
  }

  render() {
    return (
      <View style={styles.root}>
        <Image style={{ width: 100, height: 110 }} source={require('../Gambar/uin.jpg')} />
        <Text style={styles.title}>Sistem Pakar Diagnosa Ikan Nila</Text>
        <Card containerStyle={styles.card} title="Pilihan Menu">
          <Tombol
            gaya={styles.button}
            warnaDasar="#3F51B5"
            ikon="search"
            teks="Diagnosa"
            onTekan={this.onDiagnosa}
          />
          <Tombol
            warnaDasar="#3F51B5"
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
    backgroundColor: 'white'
  },
  card: {
    width: '80%',
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
