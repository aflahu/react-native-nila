import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
// import Tombol from '../komponen/element/Tombol';
import CheckList from '../komponen/CheckList';

const data = require('../konfig/gejala.js').data;

class MenuDiagnosa extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const headerRight = <Button title="submit" onPress={params.onSubmit} />;
    return { headerRight };
  };
  state = {
    language: '',
    bool: false,
    data: []
  };
  componentDidMount() {
    // We can only set the function after the component has been initialized
    this.props.navigation.setParams({ onSubmit: this.onSubmit });
    this.setState({ data });
  }
  onSubmit = () => {
    this.props.navigation.navigate('MenuHasil');
  };
  onPress = () => {
    // this.setState({ data: });
  };

  render() {
    // const gambar = ;
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card wrapperStyle={styles.info}>
          <Icon name="info" style={styles.icon} />
          <Text>Pilih Gejala yang diderita ikan nila</Text>
        </Card>
        <Card wrapperStyle={styles.check}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => {
              return (
                <CheckList
                  gambar={item.gambar}
                  teks={item.teks}
                  checked={item.check}
                  onPress={this.onPress}
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
