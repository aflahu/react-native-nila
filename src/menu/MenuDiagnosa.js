import React, { Component } from 'react';
import { Text, View, Picker, Image, ScrollView } from 'react-native';
import { Card, Icon, CheckBox, Button } from 'react-native-elements';
import Tombol from '../komponen/element/Tombol';

class MenuDiagnosa extends Component {
  static navigationOptions = {
    headerRight: <Button title="submit" />
  };
  state = {
    language: ''
  };
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card wrapperStyle={styles.info}>
          <Icon name="info" style={styles.icon} />
          <Text>Pilih Gejala yang diderita ikan nila</Text>
        </Card>
        <Card wrapperStyle={styles.check}>
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
        {/* <View style={styles.kontrol}>
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
        </View> */}
      </ScrollView>
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
  check: {
    // height: '100%',
    // flex: 1
    position: 'relative'
  },
  kontrol: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50
  },
  picker: {
    flex: 1
  }
};

export default MenuDiagnosa;
