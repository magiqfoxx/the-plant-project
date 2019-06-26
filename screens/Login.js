import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

import { fonts, colors, sizes } from "../constants/theme";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    return (
      <View
        style={{
          width: "100%",
          padding: 10,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={styles.title}>the Plant Project</Text>
        <Image
          style={styles.image}
          source={require("../assets/login/iconfinder_Natsu-Recycle_Full_63514.png")}
        />
        <Text style={styles.login}>Log in</Text>
        <TextInput
          style={styles.input}
          placeholder={"email"}
          onChangeText={email => this.setState({ email })}
          value={this.state.text}
        />
        <TextInput
          style={styles.input}
          placeholder={"password"}
          onChangeText={password => this.setState({ password })}
          value={this.state.text}
        />
        <Text style={styles.signin}>Sign in</Text>
        <Text style={{ fontSize: 20 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.main,
    fontSize: sizes.large,
    color: colors.secondaryColor,
    textAlign: "center",
    marginTop: 20
  },
  image: {
    height: 300,
    width: 200
  },
  login: {
    fontSize: sizes.medium,
    color: colors.primaryColor,
    marginTop: 10
  },
  input: {
    width: "70%",
    height: 30,
    borderColor: colors.primaryColor,
    borderWidth: 1,
    margin: 10
  },
  signin: {
    color: colors.secondaryColor,
    textDecorationLine: "underline"
  }
});

export default Login;
