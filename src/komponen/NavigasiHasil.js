import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

class NavigasiHasil extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Button
          backgroundColor="#009688"
          onPress={this.props.onMenuAwal}
          buttonStyle={styles.button}
          title="Menu Awal"
        />
        <Button
          backgroundColor="#009688"
          onPress={this.props.onDiagnosaUlang}
          buttonStyle={styles.button}
          title="Diagnosa Ulang"
        />
      </View>
    );
  }
}
const styles = {
  root: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    bottom: 0
  },
  button: {
    height: 35,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5
  }
};
export default NavigasiHasil;
