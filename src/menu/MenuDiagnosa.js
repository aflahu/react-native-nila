import React, { Component } from 'react';
import { Text, ScrollView, FlatList, View } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
// import Tombol from '../komponen/element/Tombol';
import CheckList from '../komponen/CheckList';

const BaseData = require('../konfig/gejala.js').data;

class MenuDiagnosa extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const headerRight = (
      <Button backgroundColor="transparent" title="submit" onPress={params.onSubmit} />
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
    const data = this.state.data.filter(item => item.check === true);
    this.props.navigation.navigate('ModalLoading', { data });
    this.onReset();
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
          <Icon name="info" style={styles.icon} />
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
