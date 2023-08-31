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
  email:string,
  password:string
}
export class SignIn extends Component<Iprops, IStte> {
  constructor(props: Iprops) {
    super(props);

    this.state = {
      inputData: [
        {
          placeholder: 'Email address',
          type: 'email-address',
        },
        {
          placeholder: 'password',
          type: 'default',
        },
      ],
      email:"",
      password:""
    };
  }
  signIn=()=>{
    const {email,password}=this.state;
     
    let EmailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

     if (!EmailRegex.test(email)) {
      Alert.alert('Email is not valide.!');
    }
     auth()
     .signInWithEmailAndPassword(email, password)
     .then(() => {
       Alert.alert('Your Logedin into system!');
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
  inputData=(text:string,index:number)=>{
    if(index==0){
      this.setState({email:text})
    }else{
      this.setState({password:text})
    }
  }
  render() {
    const {inputData,email,password} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
        <Text style={styles.heading}>Log into</Text>
          <Text style={styles.heading}>your account</Text>
         
          <KeyboardAvoidingView>
            <FlatList
              data={inputData}
              renderItem={({item, index}) => {
                return (
                  <TextInput
                    placeholder={item.placeholder}
                    keyboardType={item.type}
                    secureTextEntry={index > 1}
                    testID={"input"+index}
                    placeholderTextColor={'#00000066'}
                    style={styles.input}
                    onChangeText={(text)=>this.inputData(text,index)}
                    value={index==0?email:password}
                  />
                );
              }}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.forgot}
          testID='forgot'
          onPress={()=>this.props.navigation?.navigate("forgot")}
          >
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInbtn}
          onPress={this.signIn}
          testID='signin'
          >
            <Text style={styles.signIntext}>LOG IN</Text>
          </TouchableOpacity>

          <Text style={styles.orwith}>or Sign Up with</Text>
          <View style={styles.iconcontainer}>
            <TouchableOpacity
              style={[styles.iconParent, {paddingHorizontal: rh(0.3)}]}>
              <AntIcon name="apple1" size={rh(3)} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconParent}>
              <Image
                source={require('../assets/google.png')}
                style={styles.googleimg}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconParent, {paddingHorizontal: rh(0.3)}]}>
              <EvilIcons name="sc-facebook" size={rh(3.5)} color={'#3266CE'} />
            </TouchableOpacity>
          </View>
          <View style={styles.havenAnAc}>
            <Text>Don’t have an account?</Text>
            <TouchableOpacity
            testID='signup'
              onPress={() => this.props.navigation?.navigate('signup')}>
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignIn;

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
  orwith: {
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
    marginTop: rh(15),
  },
  forgot:{
    alignItems:"flex-end",
    marginTop:rh(4)
  }
});
