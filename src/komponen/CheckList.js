import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

class CheckList extends Component {
  render() {
    const { teks, checked, gambar, onPress } = this.props;
    // const gambar = require(this.state.gambar);
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image style={{ width: 66, height: 58 }} source={gambar} />
        <CheckBox containerStyle={{ flex: 1 }} title={teks} checked={checked} onPress={onPress} />
      </View>
    );
  }
}

// const styles = {
//   root: {}
// };

export default CheckList;
