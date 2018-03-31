import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

class CheckList extends Component {
  render() {
    const { teks, checked, gambar, onPress } = this.props;
    return (
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Image
          style={{ width: 86, height: 78, alignSelf: 'center', marginRight: 5 }}
          source={gambar}
        />
        <CheckBox
          containerStyle={{ flex: 1, backgroundColor: 'white' }}
          checkedColor="#009688"
          title={teks}
          checked={checked}
          onPress={onPress}
        />
      </View>
    );
  }
}

export default CheckList;
