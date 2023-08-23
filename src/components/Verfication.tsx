import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';

import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveScreenWidth as rf,
} from 'react-native-responsive-dimensions';
import AntIcon from 'react-native-vector-icons/AntDesign';

interface Iprops {
  navigation?: {
    navigate: React.FC;
    goBack: ()=>void;
  };
}
interface IState {
  otpArray: number[];
}
export class Verification extends Component<Iprops, IState> {
  inputRef0:React.Ref<TextInput>
  inputRef1:React.Ref<TextInput>
  inputRef2:React.Ref<TextInput>
  inputRef3:React.Ref<TextInput>
  constructor(props: Iprops) {
    super(props);

    this.state = {
      otpArray: [0, 0, 0, 0],
    };
    this.inputRef0=React.createRef()
    this.inputRef1=React.createRef()
    this.inputRef2=React.createRef()
    this.inputRef3=React.createRef()
  }
 componentDidUpdate(prevProps: Readonly<Iprops>, prevState: Readonly<IState>, snapshot?: any): void {
     console.log(this.inputRef0)
 }
  render() {
    const {otpArray} = this.state;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.goback}
          onPress={()=>this.props.navigation?.goBack()}
            testID='goback'
          >
            <AntIcon name="left" size={rh(3)} color={'#000'} />
          </TouchableOpacity>
          <Text style={styles.heading}>Verification code</Text>
          <Text style={styles.helpertext}>
            Please enter the verification code we sent to your email address
          </Text>
          <View style={{height: rh(10), marginTop: rh(5),flexDirection:"row"}}>
          <TextInput style={styles.input} keyboardType="numeric"
                  onChangeText={(text)=>{ 
                    if(text.length==1){
                      this.inputRef1?.current?.focus()
                    }
                  }}
                  ref={this.inputRef0}
                  autoFocus
                  />
     <TextInput style={styles.input} keyboardType="numeric"
                  onChangeText={(text)=>{ }}
                  ref={this.inputRef1}
                 
                  />
    <TextInput style={styles.input} keyboardType="numeric"
                  onChangeText={(text)=>{ }}
                  ref={this.inputRef2}
                  />
                <TextInput style={styles.input} keyboardType="numeric"
                  onChangeText={(text)=>{ }}
                  ref={this.inputRef2}
                  />
            <FlatList
              data={otpArray}
              numColumns={4}
              renderItem={({item,index}) => {
                return (
                  <TextInput style={styles.input} keyboardType="numeric"
                  onChangeText={(text)=>{
                    console.log(this.inputRef0)
                    if(text.length==1){
                     
                    }
                  }}
                  ref={index==0?(this.inputRef0):(index==1?(this.inputRef1):(index==2?(this.inputRef2):this.inputRef3))}
                  />
                );
              }}
            />
          </View>
          <Text style={styles.resend}>
            Resend in 00:10
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Verification;

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
    shadowOffset: {width: 1, height: 1},
  },

  inputParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    height: rh(5),
    width: rh(5),
    marginHorizontal: rw(5),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: rw(4),
    fontSize: rf(5),
  },
  resend:{
color:"rgba(18, 20, 32, 0.5)"
  }
});
