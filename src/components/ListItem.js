import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress = () => {
      Actions.employeeEdit({employee: this.props.employee});
  }

  render(){
    const { name } = this.props.employee;
    return (
      <TouchableOpacity onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    paddingLeft: 15,
    fontSize: 15
  }
});

export default ListItem;
