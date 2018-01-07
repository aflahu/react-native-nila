import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import { Card } from 'react-native-elements';
import { TextLoader, RippleLoader } from 'react-native-indicator';
import mulai from '../metode/kombinasi';

class ModalLoading extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   this.setState({ data: navigation.state.data });
  // };
  state = { isDone: false, data: [] };

  componentDidMount() {
    this.setState({ data: this.props.navigation.state.params.data });
    // console.log(this.props.navigation.state.params.data);
    this.onTunggu();
  }
  componentDidUpdate() {
    if (this.state.isDone) {
      this.props.navigation.navigate('MenuHasil');
    }
  }

  onTunggu = async () => {
    const gejala = [
      {
        key: 4,
        penyakit: [2, 5, 6, 8, 9, 10, 11, 12],
        belief: 0.3
      },
      {
        key: 5,
        penyakit: [2, 3, 5, 6, 7, 11],
        belief: 0.5
      },
      {
        key: 32,
        penyakit: [11],
        belief: 0.7
      }
    ];
    const hasil = await mulai(gejala).catch(e => console.log(e));
    console.log(hasil);
    this.setState({ isDone: true });
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
