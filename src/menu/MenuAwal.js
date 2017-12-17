import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { human } from 'react-native-typography';

// const gambar = require('../Images/ikan.jpg');

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
        <Text style={styles.title}>Sistem Pakar Diagnosa Ikan</Text>
        <Card containerStyle={styles.card} title="Pilihan Menu">
          <Button
            raised
            containerViewStyle={styles.button}
            icon={{ name: 'search' }}
            title="Diagnosa"
            onPress={this.onDiagnosa}
          />
          <Button
            raised
            containerViewStyle={styles.button}
            icon={{ name: 'info-outline' }}
            title="Dunia Ikan"
            onPress={this.onDuniaIkan}
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
    alignItems: 'center'
  },
  card: {
    width: '80%'
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
