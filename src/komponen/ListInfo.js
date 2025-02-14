import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { ListItem } from 'react-native-elements';

class ListInfo extends Component {
  render() {
    const { teks, onPress, gambar } = this.props;
    return (
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Image
          style={{ width: 86, height: 78, alignSelf: 'center', marginRight: 5 }}
          source={gambar}
        />
        <ListItem containerStyle={{ flex: 1 }} onPress={onPress} title={teks} />
      </View>
    );
  }
}

export default ListInfo;
