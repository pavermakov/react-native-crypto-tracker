import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchCoinData } from '../actions';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.fetchCoinData();
  }

  render() {
    return (
      <View>
        <Text>Container</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { crypto } = state;

  return {
    crypto,
  };
};

export default connect(mapStateToProps, { fetchCoinData })(CryptoContainer);
