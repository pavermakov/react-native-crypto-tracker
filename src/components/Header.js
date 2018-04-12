import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.header}>Cryptocurrency App</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Header;
