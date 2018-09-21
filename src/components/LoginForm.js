import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { CardBox, Input, CardSection, Button, Spinner } from './common';

class LoginForm extends Component {

  onEmailChange = text => {
    this.props.emailChanged(text);
  }

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  }

  onButtonPress = () => {
    const { email, password } = this.props
    this.props.loginUser({email, password});
  }

  renderButton = () => {
    if (this.props.loading){
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress}>Login</Button>
    )
  }

  renderError = () => {
    if (this.props.error){
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  render(){
    return (
      <CardBox>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChange}
            secure
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </CardBox>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);


const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});
