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
} from 'react-native';
import React, {Component} from 'react';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveScreenWidth as rf,
} from 'react-native-responsive-dimensions';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
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
    };
  }
  render() {
    const {inputData} = this.state;
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
                    placeholderTextColor={'#00000066'}
                    style={styles.input}
                  />
                );
              }}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.forgot}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInbtn}>
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
    marginTop: rh(15),
  },
  forgot:{
    alignItems:"flex-end",
    marginTop:rh(4)
  }
});
