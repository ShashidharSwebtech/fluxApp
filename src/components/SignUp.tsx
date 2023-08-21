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
import AntIcon from "react-native-vector-icons/AntDesign"
import EvilIcons from "react-native-vector-icons/EvilIcons"
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
  userData:{
    name:string,
    email:string,
    password:string,
    confirmPassword:string
  }
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
      userData:{
        name:"",
        email:"",
        password:"",
        confirmPassword:""
      }
    };
  }
  signUp=()=>{
    const {userData:{name,email,password,confirmPassword}}=this.state;
    let EmailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    let PasswordRegex=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")

    if(name){
        Alert.alert("User Name is required..!")
        return ;
    }
    else if(!EmailRegex.test(email)){
        Alert.alert("Email is not valide.!")
    }
    else if(!PasswordRegex.test(password)){
        Alert.alert("password should be strong..!")
    }
    else if(password!=confirmPassword){
        Alert.alert("password and confirm passwrd should be same..!")
    }else {
        auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });

    }
  }
  inputData=(text:string,index:number)=>{
    const {userData}=this.state;
    switch(index){
        case 0:this.setState({userData:{...userData,name:text}})
        break ;
        case 1:
            this.setState({userData:{...userData,email:text}})
            break;
        case 2:
            this.setState({userData:{...userData,password:text}})
            break;
        default:
            this.setState({userData:{...userData,confirmPassword:text}})
    }
  }

  render() {
    const {inputData} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
        <Text style={styles.heading}>Create </Text>
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
                    onChangeText={(text)=>this.inputData(text,index)}
                  />
                );
              }}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.signupbtn}
          onPress={this.signUp}
          >
            <Text style={styles.signuptext}>SIGN UP</Text>
          </TouchableOpacity>
         
          <Text style={styles.orwith}>or Log In with</Text>
          <View style={styles.iconcontainer}>
                <TouchableOpacity style={[styles.iconParent,{paddingHorizontal:rh(0.3)}]}>
                    <AntIcon name="apple1" size={rh(3)}/>
                </TouchableOpacity>
                    <TouchableOpacity style={styles.iconParent}>
                    <Image source={require("../assets/google.png")}
                    style={styles.googleimg}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.iconParent,{paddingHorizontal:rh(0.3)}]}>
                    <EvilIcons name="sc-facebook" size={rh(3.5)}
                    color={"#3266CE"}
                    />
                </TouchableOpacity>
               
        </View>
        <View style={styles.havenAnAc}>
                    <Text>Already have account?</Text>
                    <TouchableOpacity style={styles.signin} onPress={()=>this.props.navigation?.navigate("signin")}>
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
    paddingHorizontal:rw(6),
    alignSelf: 'center',
    marginTop: rh(5),
    paddingVertical:rh(2),
    borderRadius:rh(5)
  },
  signuptext: {
    color: '#fff',
    fontSize: rf(3),
    textAlign: 'center',
    fontWeight:"600"
  },
  orwith:{
    // fontWeight: '200',
    fontFamily: 'Product Sans Light',
    marginTop:rh(2),
    alignSelf:"center",
    color:"#00000066"
  },
  iconcontainer:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:rh(2)
  },
  googleimg:{
    height:rh(4),
    width:rh(4),
   
  },
  iconParent:{
    borderWidth:rh(0.06),
    borderColor:"#332218",
    borderRadius:rh(10),
   alignItems:"center",
   justifyContent:"center",
   marginHorizontal:rw(1)
  },
  havenAnAc:{
    flexDirection:"row",
    alignSelf:"center",
    marginTop:rh(3)
  },
  signin:{
    borderBottomWidth:rh(0.05)
  }
});
