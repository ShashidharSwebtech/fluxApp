import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from 'react-native';
import React, {Component} from 'react';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveScreenWidth as rf,
} from 'react-native-responsive-dimensions';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  // statusCodes,
  // GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {appleAuth} from '@invertase/react-native-apple-authentication';
// import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
interface Iprops {
  navigation?: {
    navigate: React.FC;
  };
}
interface IStte {
  inputData: {
    placeholder: string;
    type: KeyboardTypeOptions;
  }[];

  userDetails:string[]
}
export class SignUp extends Component<Iprops, IStte> {
  constructor(props: Iprops) {
    super(props);

    this.state = {
      inputData: [
        {
          placeholder: 'Enter your name',
          type: 'default',
        },
        {
          placeholder: 'Email address',
          type: 'email-address',
        },
        {
          placeholder: 'password',
          type: 'default',
        },
        {
          placeholder: 'Confirm password',
          type: 'default',
        },
      ],
  
      userDetails:["","","",""]
    };
  }
  signUp = () => {
    const {
     
      userDetails
    } = this.state;
    const name=userDetails[0]
    const email=userDetails[1]
    const password=userDetails[2]
    const confirmPassword=userDetails[3]
    let EmailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    let PasswordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$');
    console.log(password);
    if (name == '') {
      Alert.alert('User Name is required..!');
    } else if (!EmailRegex.test(email)) {
      Alert.alert('Email is not valide.!');
    } else if (password == '' || password.length < 8) {
      Alert.alert('password should be strong..!');
    } else if (password != confirmPassword) {
      Alert.alert('password and confirm passwrd should be same..!');
    } else {
      // signInWithEmailAndPassword
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('Your account created & signed in!');
          this.props.navigation?.navigate("home")
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('User already in exist!');
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          } else {
            console.error(error);
          }
        });
    }
  };
// onFacebookButtonPress=async()=> {
//     // Attempt login with permissions
//     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
//     if (result.isCancelled) {
//       throw 'User cancelled the login process';
//     }
  
//     // Once signed in, get the users AccessToken
//     const data = await AccessToken.getCurrentAccessToken();
  
//     if (!data) {
//       throw 'Something went wrong obtaining access token';
//     }
  
//     // Create a Firebase credential with the AccessToken
//     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
//     // Sign-in the user with the credential
//     return auth().signInWithCredential(facebookCredential);
//   }
  inputData = (text: string, index: number) => {
    const {userDetails} = this.state;
    userDetails[index]=text;
    this.setState({userDetails:userDetails})

  };
  googleLogin = async () => {
    console.log("in ios")
    // if(Platform.OS=="android"){
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        Alert.alert(String(userInfo?.user?.name)+"Thanks For Sign Up")
        console.log(userInfo);
  
        this.props.navigation?.navigate('home');
      } catch (error: any) {
        Alert.alert(error);
        // console.log(error)
        // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //   // user cancelled the login flow
        //   console.log(error, '1');
        // } else if (error.code === statusCodes.IN_PROGRESS) {
        //   console.log(error, '2');
        //   // operation (e.g. sign in) is in progress already
        // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //   console.log(error, '3');
        //   // play services not available or outdated
        // } else {
        //   console.log(error, '4');
        //   // some other error happened
        // }
      }

    // }else {
    //   Alert.alert("Not Possiable to login")
    // }
  };

  componentDidMount(): void {
    // if(Platform.OS=="android"){
      GoogleSignin.configure();
    // }
  }

  revokeSignInWithAppleToken = async () => {
    // Get an authorizationCode from Apple
    if (appleAuth.isSupported) {
      const {authorizationCode} = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.REFRESH,
      });

      // Ensure Apple returned an authorizationCode
      if (!authorizationCode) {
        throw new Error(
          'Apple Revocation failed - no authorizationCode returned',
        );
      }

      // Revoke the token
      return auth().revokeToken(authorizationCode);
    } else {
      console.log('Apple Auth was not supported..!');
    }
  };

  render() {
    const {inputData,userDetails} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior={'position'}>
            <Text style={styles.heading}>Create </Text>
            <Text style={styles.heading}>your account</Text>
            <FlatList
              data={inputData}
              renderItem={({item, index}) => {
                return (
                  <TextInput
                    placeholder={item.placeholder}
                    keyboardType={item.type}
                    secureTextEntry={index > 1}
                    placeholderTextColor={'#00000066'}
                    style={styles.input}
                    testID={"input"+index}
                    onChangeText={text => this.inputData(text, index)}
                    value={userDetails[index]}
                  />
                );
              }}
            />

            <TouchableOpacity style={styles.signupbtn}
            testID='signup'
            onPress={this.signUp}>
              <Text style={styles.signuptext}>SIGN UP</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <Text style={styles.orwith}>or Log In with</Text>
          <View style={styles.iconcontainer}>
            <TouchableOpacity
              style={[styles.iconParent, {paddingHorizontal: rh(0.3)}]}
              onPress={this.revokeSignInWithAppleToken}
              testID='appleToken'
              >
              <AntIcon name="apple1" size={rh(3)} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconParent}
            onPress={this.googleLogin}
            >
              <Image
                source={require('../assets/google.png')}
                style={styles.googleimg}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconParent, {paddingHorizontal: rh(0.3)}]}
              // onPress={this.onFacebookButtonPress}
              >
              <EvilIcons name="sc-facebook" size={rh(3.5)} color={'#3266CE'} />
            </TouchableOpacity>
          </View>
          <View style={styles.havenAnAc}>
            <Text>Already have account?</Text>
            <TouchableOpacity
              style={styles.signin}
              testID='navigatetosignin'
              onPress={() => this.props.navigation?.navigate('signin')}
              
              >
              <Text>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    height: rh(100),
    width: rw(100),
    backgroundColor: '#fff',
    padding: rh(1.5),
  },
  heading: {
    fontSize: rf(8),
    fontWeight: '400',
    fontFamily: 'Product Sans',
    color: '#000',
    marginTop: rh(2),
  },
  input: {
    borderBottomWidth: rh(0.1),
    fontSize: rf(4),
    paddingTop: rh(4),
    paddingBottom: rh(2),
    fontWeight: '400',
    fontFamily: 'Product Sans Light',
  },
  signupbtn: {
    backgroundColor: '#2D201C',
    paddingHorizontal: rw(6),
    alignSelf: 'center',
    marginTop: rh(5),
    paddingVertical: rh(2),
    borderRadius: rh(5),
  },
  signuptext: {
    color: '#fff',
    fontSize: rf(3),
    textAlign: 'center',
    fontWeight: '600',
  },
  orwith: {
    // fontWeight: '200',
    fontFamily: 'Product Sans Light',
    marginTop: rh(2),
    alignSelf: 'center',
    color: '#00000066',
  },
  iconcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rh(2),
  },
  googleimg: {
    height: rh(4),
    width: rh(4),
  },
  iconParent: {
    borderWidth: rh(0.06),
    borderColor: '#332218',
    borderRadius: rh(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: rw(1),
  },
  havenAnAc: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: rh(3),
  },
  signin: {
    borderBottomWidth: rh(0.05),
  },
});
