import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { CoinCard } from '../components';
import { fetchCoinData } from '../actions';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.fetchCoinData();
  }

  renderCoinCards = () => {
    const { crypto } = this.props;

    return crypto.data.map((coin, index) => {
      return (
        <CoinCard
          key={index}
          coin_name={coin.name}
          symbol={coin.symbol}
          price_usd={coin.price_usd}
          percent_change_24h={coin.percent_change_24h}
          percent_change_7d={coin.percent_change_7d}
        />
      );
    });
  };

  render() {
    const { crypto } = this.props;

    if (crypto.isFetching) {
      return (
        <View contentContainerStyle={ styles.contentContainer }>
          <Spinner
            visible={crypto.isFetching}
            textContent={'Loading...'}
            textStyle={{ color: '#253145' }}
            animation='fade'
          />
        </View>
      )
    }

    return (
      <ScrollView>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55,
  },
});

const mapStateToProps = (state) => {
  const { crypto } = state;

  return {
    crypto,
  };
};

export default connect(mapStateToProps, { fetchCoinData })(CryptoContainer);
