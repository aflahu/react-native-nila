import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

class CheckList extends Component {
  // state = {
  //   gambar: this.props.gambar
  // };
  render() {
    const { teks, checked, gambar } = this.props;
    // const gambar = require(this.state.gambar);
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image style={{ width: 66, height: 58 }} source={gambar} />
        <CheckBox containerStyle={{ flex: 1 }} title={teks} checked={checked} />
      </View>
    );
  }
}

// const styles = {
//   root: {}
// };

export default CheckList;
