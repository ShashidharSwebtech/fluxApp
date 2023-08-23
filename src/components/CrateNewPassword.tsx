import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  KeyboardTypeOptions,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import React, { Component } from 'react';

import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveScreenWidth as rf,
} from 'react-native-responsive-dimensions';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from "react-native-vector-icons/Feather"
interface Iprops {
  navigation?: {
    navigate: React.FC;
    goBack: () => void;
  };
}
interface IState {
  inputData: {
    placeholder: string;
    type: KeyboardTypeOptions;
  }[];
  password: string,
  confirmPassword: string,
  eyeshow: boolean[]
}
export class CreateNewPassword extends Component<Iprops, IState> {
  constructor(props: Iprops) {
    super(props);

    this.state = {
      inputData: [
        {
          placeholder: 'New Password',
          type: 'default',
        },
        {
          placeholder: 'Confirm Password',
          type: 'default',
        },

      ],
      password: "",
      confirmPassword: "",
      eyeshow: [true, true]
    };
  }
  render() {
    const { inputData, password, confirmPassword, eyeshow } = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.goback}
            testID='goback'
            onPress={() => this.props.navigation?.goBack()}
          >
            <AntIcon name="left" size={rh(3)} color={'#000'} />
          </TouchableOpacity>
          <Text style={styles.heading}>Create new password</Text>
          <Text style={styles.helpertext}>
            Your new password must be different from previously used password
          </Text>

          <KeyboardAvoidingView>
            <FlatList
              data={inputData}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.inputParent}>
                    <TextInput
                      placeholder={item.placeholder}
                      keyboardType={item.type}
                      secureTextEntry={eyeshow[index]}
                      testID={"input" + index}
                      placeholderTextColor={'#00000066'}
                      style={styles.input}
                      onChangeText={(text) => {
                        if (index == 0)
                          this.setState({ password: text })
                        else
                          this.setState({ confirmPassword: text })

                      }}
                    />
                    <TouchableOpacity onPress={() => {
                      eyeshow[index] = !eyeshow[index]
                      this.setState({ eyeshow: eyeshow })
                    }}
                      testID={"eyebutton" + index}
                    >
                      {(index == 0 && password !== "" || index == 1 && confirmPassword !== "") &&
                        <FeatherIcon name={eyeshow[index] ? "eye" : "eye-off"} size={rh(3)}
                        style={styles.eyeIcon}
                        // testID={"eyeicon" + index}
                        />}
                    </TouchableOpacity>

                  </View>
                );
              }}
            />
          </KeyboardAvoidingView>

          <TouchableOpacity
            disabled={(password == "" || confirmPassword == "")}
            testID='navigatetoverfication'
            style={[styles.signInbtn, (password == "" || confirmPassword == "") && { backgroundColor: "rgba(185, 185, 185, 1)" }]}
            onPress={() => this.props.navigation?.navigate('verfication')}>
            <Text style={styles.signIntext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default CreateNewPassword;

const styles = StyleSheet.create({
  container: {
    height: rh(100),
    width: rw(100),
    backgroundColor: '#fff',
    padding: rh(3),
  },
  heading: {
    fontSize: rf(8),
    fontWeight: '400',
    fontFamily: 'Product Sans',
    color: '#000',
    marginTop: rh(2),
  },
  helpertext: {
    marginTop: rh(5),
    fontSize: rf(4),
    fontWeight: '400',
  },
  input: {
    width: rw(75),
    fontSize: rf(4),
    paddingTop: rh(4),
    paddingBottom: rh(2),
    fontWeight: '400',
    fontFamily: 'Product Sans Light',
  },
  goback: {
    width: rh(5),
    height: rh(5),
    borderRadius: 100,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowOffset: { width: 1, height: 1 },
  },
  eyeIcon: {
    marginTop: rh(2),
  },
  inputParent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: rh(0.07),
  },
  signInbtn: {
    backgroundColor: '#2D201C',
    paddingHorizontal: rw(8),
    alignSelf: 'center',
    marginTop: rh(5),
    paddingVertical: rh(2),
    borderRadius: rh(5),
  },
  signIntext: {
    color: '#fff',
    fontSize: rf(3.5),
    textAlign: 'center',
    fontWeight: '600',
  },
});
