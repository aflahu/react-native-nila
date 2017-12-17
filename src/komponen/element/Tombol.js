import React, { Component } from 'react';
import { Button } from 'react-native-elements';

class Tombol extends Component {
  render() {
    const { gaya, ikon, teks, onTekan, warnaDasar } = this.props;
    return (
      <Button
        raised
        containerViewStyle={[styles.root, gaya]}
        backgroundColor={warnaDasar}
        borderRadius={14}
        icon={{ name: ikon }}
        title={teks}
        onPress={onTekan}
      />
    );
  }
}

const styles = {
  root: {}
};

export default Tombol;
