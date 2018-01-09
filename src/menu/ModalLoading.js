import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import { Card } from 'react-native-elements';
import { TextLoader, RippleLoader } from 'react-native-indicator';
import mulai from '../metode/kombinasi';

const beliefj = require('../konfig/beliefj').data;

class ModalLoading extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   this.setState({ data: navigation.state.data });
  // };
  state = { isDone: false, diagnosa: [] };

  componentDidMount() {
    // this.setState({ data: this.props.navigation.state.params.data });
    // console.log(this.props.navigation.state.params.data);
    this.onTunggu();
  }
  componentDidUpdate() {
    if (this.state.isDone) {
      this.props.navigation.navigate('MenuHasil', { diagnosa: this.state.diagnosa });
    }
  }

  onTunggu = async () => {
    try {
      // const gejala = belief.data.filter(item => item.key === this.state.data.data.key);
      const { data } = this.props.navigation.state.params;
      const idPilih = data.map(item => item.key);

      const hasil = beliefj.filter((item, i) => {
        if (idPilih.includes(item.key)) {
          return beliefj[i];
        }
      });
      const diagnosa = await mulai(hasil);
      console.log(diagnosa);
      this.setState({ isDone: true, diagnosa });
    } catch (error) {
      this.setState({ isDone: true });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <RippleLoader size={70} />
        <TextLoader text="Loading" />
      </View>
    );
  }
}

export default ModalLoading;
