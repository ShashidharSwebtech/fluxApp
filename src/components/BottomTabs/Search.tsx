import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import {Header} from '../../common/Header';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveScreenWidth as rf,
} from 'react-native-responsive-dimensions';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
interface Iprops {}
interface Istate {
  searchtext: string;
}
export class Search extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);

    this.state = {
      searchtext: '',
    };
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Header title={'Discover'} />
          <View style={styles.inputUpperParent}>
          <View style={styles.inputParent}>
          <FeatherIcon name="search" size={rh(2.7)} color="#777E90"/>

            <TextInput
              onChangeText={text => {
                this.setState({searchtext: text});
              }}
              style={styles.input}
              placeholder='Search'
              placeholderTextColor={"#777E90"}
              
            />
            
          </View>
          <View style={[styles.inputParent,{width:rw(14),marginLeft:rw(2)}]}>
          <FontAwesome6Icon name="sliders" size={rh(3.5)}/>
          </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(3),
    backgroundColor:"#fff"
  },
  inputUpperParent:{
    flexDirection:"row",
    alignItems:"center"
  },
  input: {
    fontSize:rf(5),
    marginLeft:rw(3)
  },
  inputParent:{
    flexDirection:"row",
    paddingHorizontal:rw(3),
    paddingVertical:rh(1),
    backgroundColor:"#FAFAFA",
    borderRadius:rw(10),
    marginTop:rh(2),
    elevation:1,
    width:rw(75),
    shadowColor:"#000",
    shadowOpacity:0.1
  }
});
