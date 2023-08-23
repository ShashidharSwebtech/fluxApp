import {StyleSheet, Text, TouchableOpacity, View,SafeAreaView,TextInput} from 'react-native';
import React, {Component} from 'react';

import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveScreenWidth as rf,
} from 'react-native-responsive-dimensions';
import AntIcon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
interface Iprops {
  navigation?: {
    navigate: React.FC;
    goBack: ()=>void;
  };
}
interface IState {
  email: string;
}
export class Forgot extends Component<Iprops, IState> {
  inputRef0:React.Ref<TextInput>
  inputRef1:React.Ref<TextInput>
  inputRef2:React.Ref<TextInput>
  inputRef3:React.Ref<TextInput>
  constructor(props: Iprops) {
    super(props);

    this.state = {
      email: '',
    };
    this.inputRef0=React.createRef()
    this.inputRef1=React.createRef()
    this.inputRef2=React.createRef()
    this.inputRef3=React.createRef()
  }
  passwordReset=async() => {
    // const {email}=this.state;
    // const reset=await auth().sendPasswordResetEmail(email)
    // console.log(reset)
    // this.props.navigation?.navigate("createPassword")

    this.props.navigation?.navigate("verfication")
  }
  render() {
    const { email } = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.goback}
          onPress={()=>this.props.navigation?.goBack()}
            testID='goback'
          >
            <AntIcon name="left" size={rh(3)} color={'#000'} />
          </TouchableOpacity>
          <Text style={styles.heading}>Forgot Password?</Text>
          <Text style={styles.helpertext}>
            Enter email associated with your account and we’ll send and email
            with intructions to reset your password
          </Text>
          <View style={styles.inputParent}>
          <AntIcon name="mail" size={rh(2.3)} color={'#BFBFBF'}
          style={styles.emailIcon}
          />
            <TextInput
              keyboardType="email-address"
             
              onChangeText={text => this.setState({email: text})}
              style={styles.emailinput}
              value={email}
              placeholder='enter your email here'
              placeholderTextColor={"#00000099"}
              testID='emailinput'
            />
          </View>
          <TouchableOpacity style={styles.signInbtn}
            onPress={() => this.passwordReset()}
            // onPress={()=>this.props.navigation?.navigate("createPassword")}
            testID='navigatetoverfication'
          // 
          >
            <Text style={styles.signIntext}>Enter</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Forgot;

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
    marginTop:rh(5),
    fontSize: rf(4),
    fontWeight:"400"
  },
  emailinput: {
   
    fontSize: rf(4),
    paddingTop: rh(4),
    paddingBottom: rh(2),
    fontWeight: '400',
    fontFamily: 'Product Sans Light',
    marginLeft:rw(1),
    
  },
  goback: {
    width: rh(5),
    height: rh(5),
    borderRadius: 100,
    shadowColor: '#000',
    shadowOpacity:0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowOffset: { width: 1, height: 1 }
  },
  emailIcon:{
   marginTop:rh(2)
  },
  inputParent:{
    flexDirection:"row",
    alignItems:"center",
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
