import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { CardBox, CardSection, Button, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onButtonPress = () => {
      const { name, phone, shift } = this.props;

      if (name == '' || phone == "" || shift == ""){
        return;
      }

      this.props.employeeCreate({ name, phone, shift: shift || 'Monday'});
  }

  render(){
    return (
      <CardBox>
        <EmployeeForm { ...this.props } />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Create
          </Button>
        </CardSection>
      </CardBox>
    );
  }
}


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
}

export default connect(mapStateToProps,
  { employeeUpdate, employeeCreate })(EmployeeCreate);
