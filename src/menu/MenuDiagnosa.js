import React, { Component } from 'react';
import { Text, ScrollView, FlatList, View, Alert } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
// import Tombol from '../komponen/element/Tombol';
import CheckList from '../komponen/CheckList';

const BaseData = require('../konfig/gejala.js').data;

class MenuDiagnosa extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const headerRight = (
      <View>
        <Button
          buttonStyle={{ borderRadius: 10, height: 35 }}
          backgroundColor="#009688"
          title="Diagnosa"
          onPress={params.onSubmit}
        />
      </View>
    );
    return { headerRight };
  };
  state = {
    data: BaseData
  };

  componentDidMount() {
    // We can only set the function after the component has been initialized
    this.props.navigation.setParams({ onSubmit: this.onSubmit });
    // this.onReset();
  }

  onSubmit = () => {
    const pilihan = this.state.data;
    const data = pilihan.filter(item => item.check === true);
    // console.log(data[0].key);
    if (
      (data[0].key === 1 && data.length > 1) ||
      (data[0].key === 8 && data.length > 1) ||
      (data[0].key === 3 && data.length > 5) ||
      (data[0].key !== 1 && data[0].key !== 8 && data[0].key !== 3 && data.length > 2)
    ) {
      this.props.navigation.navigate('MenuHasil', { data });
      this.onReset();
    } else {
      Alert.alert(
        'Perhatian',
        'Pilihan gejala tidak mencapai syarat minimum, silahkan tambahkan',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
    // return alert
  };
  onPress = gejala => {
    const dGejala = this.state.data;
    const hasil = dGejala.map(item => {
      if (item.key === gejala) {
        item.check = !item.check;
      }
      return item;
    });

    this.setState({ data: hasil });
  };

  onReset = () => {
    const bGejala = this.state.data;
    const base = bGejala.map(item => {
      if (item.check === true) {
        item.check = false;
      }
      return item;
    });
    this.setState({ data: base });
  };

  render() {
    // const gambar = ;
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.info}>
          <Icon name="info" style={styles.icon} color="#009688" />
          <Text>Pilih Gejala yang diderita ikan nila</Text>
        </View>
        <Card wrapperStyle={styles.check}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => {
              return (
                <CheckList
                  gambar={item.gambar}
                  teks={item.teks}
                  checked={item.check}
                  onPress={() => this.onPress(item.key)}
                />
              );
            }}
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 15
  },
  icon: {
    paddingRight: '20px',
    backgroundColor: '#009688'
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
