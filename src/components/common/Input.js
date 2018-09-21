import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.inputStyle}
        placeholder={props.placeholder}
        autoCorrect={false}
        secureTextEntry={props.secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});


export { Input };
