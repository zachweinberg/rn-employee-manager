import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.headerTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 34,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,

  },
  headerText: {
    fontSize: 20,
    paddingBottom: 5
  }
});

export {Header};
