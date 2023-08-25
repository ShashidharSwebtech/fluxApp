import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
    responsiveHeight as rh,
    responsiveWidth as rw,
    responsiveScreenWidth as rf,
  } from 'react-native-responsive-dimensions';
import { searchInitState, addToSearchHistory,removeFromSearchHistory,deleteSearchHistory } from '../store/SearchSlice';
import { connect } from 'react-redux';
import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { searchbtn1, searchbtn2 } from '../assets';
interface Iprops{
    navigation?:{
        goBack:()=>void,
    }
    history:string[],
    addToSearchHistory:(text:string)=>void,
    removeFromSearchHistory:(index:number)=>void,
    deleteSearchHistory:()=>void
}
interface IState{
    search:string
}
export class SearchFilter extends Component<Iprops,IState> {
    constructor(props:Iprops) {
      super(props)
    
      this.state = {
         search:""
      }
    }
  render() {
    const {history}=this.props;
    const {search}=this.state;
    console.log(history)
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <TouchableOpacity style={styles.goback}
          onPress={()=>this.props.navigation?.goBack()}
            testID='goback'
          >
            <AntIcon name="left" size={rh(3)} color={'#000'} />
          </TouchableOpacity>
                <View style={[styles.inputUpperParent,{}]}>
                    <View style={[styles.inputParent,{borderRadius:rw(8),}]}>
                        <FeatherIcon name="search" size={rh(2.7)} color="#777E90"/>
                        <TextInput
                            onChangeText={text => {
                            this.setState({search: text});
                            }}
                            style={styles.input}
                            placeholder='Search'
                            placeholderTextColor={"#777E90"}
                            value={search}
                        />
                    </View>
                    <View style={[styles.inputParent,{width:rh(7),marginLeft:rw(2)}]}>
                        <TouchableOpacity style={{}} onPress={()=>{
                            this.props.addToSearchHistory(search)
                            this.setState({search:""})
                            }}>
                             <FontAwesome6Icon name="sliders" color={"#777E90"} size={rh(3.5)}/>
                        </TouchableOpacity>
                    </View>
                </View>
            {/* Recent Search */}
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                marginVertical:rh(1.5),
                paddingHorizontal:rw(1.3)
            }}>
                <Text style={{
                    color:"#33302E7D",
                    fontSize:rf(4.5)
            }}>Recent Searches</Text>
            <TouchableOpacity onPress={this.props.deleteSearchHistory}>
                <AntIcon name="delete" size={rh(2.5)} color={"#33302E7D"} />
            </TouchableOpacity>
            </View>
            
           <View style={styles.historyParent}>
                    {history.map((item:string,index:number)=><View style={styles.historyParentInner}>
                        <TouchableOpacity  
                        style={styles.history}
                        key={index}>
                        <Text style={styles.historytitle}>{item}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.removeFromSearchHistory(index)}>
                         <FontAwesome name="remove" size={rh(2.5)} color="#CCD2E3"/>
                    </TouchableOpacity>
                    </View>)}
           </View>
           {/* Popular this Week */}
           <View style={{marginTop:rh(2)}}>
                <View style={styles.PopularHeadingParent}>
                  <Text style={styles.featurePopular}>Popular this week</Text>
                  <Text style={styles.showalltext}>Show all</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                    <View>
                    <Image source={searchbtn1} style={styles.bottomimg}/>
                    <Text style={styles.populartitle}>Lihua Tunic White</Text>
                    <Text style={[styles.populartitle,{color:"#1D1F22"}]}>$ 53.00</Text>
                    </View>
                    <View>
                    <Image source={searchbtn2} style={styles.bottomimg}/>
                    <Text style={styles.populartitle}>Lihua Tunic White</Text>
                    <Text  style={[styles.populartitle,{color:"#1D1F22"}]}>$ 53.00</Text>
                    </View>
                </View>
           </View>
            </View>
            
        </SafeAreaView>
    )
  }
}

const mpaState=(state:any)=>({
    history:state.search.history
})

const mapDispatch={
    addToSearchHistory,
    removeFromSearchHistory,
    deleteSearchHistory
}
export default connect(mpaState,mapDispatch)(SearchFilter)
const styles=StyleSheet.create({
    historytitle:{color:"#33302EB2",fontWeight:"500",fontSize:rf(5)},
    container: {
        paddingHorizontal: rw(3),
        backgroundColor:"#fff",
        paddingTop:rh(1),
        height:rh(100)
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
      inputUpperParent:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:rh(1.5)
      },
      input: {
        fontSize:rf(5),
        marginLeft:rw(3)
      },
      inputParent:{
        flexDirection:"row",
        paddingHorizontal:rw(3),
        backgroundColor:"#FAFAFA",
        borderRadius:rw(4),
        elevation:1,
        width:rw(75),
        shadowColor:"#000",
        shadowOpacity:0.1,
        height:rh(7),
       alignItems:"center"
      },
      historyParent:{
        flexWrap:"wrap",
        flexDirection:"row",
       
      },
      history:{
        paddingHorizontal:rw(4),
        paddingVertical:rh(2),
      },
      historyParentInner:{
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#FAFAFA",
        margin:rh(.6),
        borderRadius:rh(2),
        paddingHorizontal:rw(2)
        },
    PopularHeadingParent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: rh(1.5),
            paddingHorizontal: rw(2),
          },
    featurePopular: {
            fontSize: rf(4.8),
            fontWeight: '600',
            fontFamily: 'Popular Sans',
            color: '#000',
          },
    showalltext: {
            fontSize: rf(4),
            fontWeight: '600',
            fontFamily: 'Popular Sans Medium',
            color: '#9b9b9b',
          },
    bottomimg:{
        borderRadius:rh(2)
          },
    populartitle:{
        color:"#1D1F22",
        marginVertical:rh(0.5),
        fontSize:rf(4)
    }
})
