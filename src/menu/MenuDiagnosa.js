import React, { Component } from 'react';
import { Text, View, Picker, Image } from 'react-native';
import { Card, Icon, CheckBox } from 'react-native-elements';

class MenuDiagnosa extends Component {
  state = {
    language: ''
  };
  render() {
    return (
      <View>
        <Card wrapperStyle={styles.info}>
          <Icon name="info" style={styles.icon} />
          <Text>Pilih Gejala yang diderita ikan nila</Text>
        </Card>
        <Card>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 66, height: 58 }} source={require('../Gambar/nila2.jpg')} />
            <CheckBox
              containerStyle={{ flex: 1 }}
              title="Mata Menonjol dan mata rusak seperti katarak"
              checked={this.state.checked}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 66, height: 58 }} source={require('../Gambar/nila2.jpg')} />
            <CheckBox
              containerStyle={{ flex: 1 }}
              title="Mata Menonjol dan mata rusak seperti katarak"
              checked={this.state.checked}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 66, height: 58 }} source={require('../Gambar/nila2.jpg')} />
            <CheckBox
              containerStyle={{ flex: 1 }}
              title="Mata Menonjol dan mata rusak seperti katarak"
              checked={this.state.checked}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 66, height: 58 }} source={require('../Gambar/nila2.jpg')} />
            <CheckBox
              containerStyle={{ flex: 1 }}
              title="Mata Menonjol dan mata rusak seperti katarak"
              checked={this.state.checked}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 66, height: 58 }} source={require('../Gambar/nila2.jpg')} />
            <CheckBox
              containerStyle={{ flex: 1 }}
              title="Mata Menonjol dan mata rusak seperti katarak"
              checked={this.state.checked}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 66, height: 58 }} source={require('../Gambar/nila2.jpg')} />
            <CheckBox
              containerStyle={{ flex: 1 }}
              title="Mata Menonjol dan mata rusak seperti katarak"
              checked={this.state.checked}
            />
          </View>
        </Card>
        <View style={styles.kontrol}>
          <Icon raised name="keyboard-arrow-left" />
          <Picker
            style={styles.picker}
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
          >
            <Picker.Item label="Halaman 1" value="1" />
            <Picker.Item label="halaman 2" value="2" />
          </Picker>
          <Icon raised name="keyboard-arrow-right" />
        </View>
      </View>
    );
  }
}

const styles = {
  info: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    paddingRight: '20px'
    // justify: 'center'
  },
  kontrol: {
    flexDirection: 'row'
  },
  picker: {
    flex: 1
  }
};

export default MenuDiagnosa;
