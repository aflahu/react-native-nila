import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import { Card } from 'react-native-elements';
import { TextLoader, RippleLoader } from 'react-native-indicator';

class ModalLoading extends Component {
  state = { isDone: false };

  componentDidMount() {
    this.onTunggu();
  }
  componentDidUpdate() {
    if (this.state.isDone) {
      this.props.navigation.navigate('MenuHasil');
    }
  }

  onTunggu = async () => {
    setTimeout(() => {
      this.setState({ isDone: true });
    }, 3000);
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
