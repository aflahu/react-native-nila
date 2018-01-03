import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { ListItem } from 'react-native-elements';

class ListInfo extends Component {
  render() {
    const { teks, onPress, gambar } = this.props;
    // const gambar = require(this.state.gambar);
    return (
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Image
          style={{ width: 66, height: 58, alignSelf: 'center', marginRight: 5 }}
          source={gambar}
        />
        <ListItem containerStyle={{ flex: 1 }} onPress={onPress} title={teks} />
      </View>
    );
  }
}

export default ListInfo;
