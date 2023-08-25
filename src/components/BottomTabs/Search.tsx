import {SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {Header} from '../../common/Header';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveScreenWidth as rf,
} from 'react-native-responsive-dimensions';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import { searchimg1, searchimg2, searchimg3, searchimg4 } from '../../assets';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';

const Drawer = createDrawerNavigator();
interface Iprops {
  navigation?:{
    navigate:React.FC,
    goBack:()=>void
  },
  clothsData:{id:number,title:string,items:string}[]
}
interface Istate {
  searchtext: string;
  imgContaner:{
    image:string,
    color:string,
    title:string
  }[],
  avtiveIndex:number
}
export class Search extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);

    this.state = {
      searchtext: '',
      imgContaner:[
        {
          image:searchimg1,
          color:"#A3A798",
          title:"CLOTHING"
        },
        {
          image:searchimg2,
          color:"#898280",
          title:"ACCESSORIES"
        },
        {
          image:searchimg3,
          color:"#44565C",
          title:"SHOES"
        },
        {
          image:searchimg4,
          color:"#B9AEB2",
          title:"COLLECTION"
        }
      ],
      avtiveIndex:-1
    };
  }
  render() {
    const {imgContaner,avtiveIndex}=this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
        
          <Header title={'Discover'} />
          {/* Search Icon */}
          <View style={styles.inputUpperParent}>
          <View style={[styles.inputParent,{borderRadius:rw(8),}]}>
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
            <TouchableOpacity style={[styles.inputParent,{width:rh(7),marginLeft:rw(2)}]}
            onPress={()=>this.props.navigation?.navigate("searchfilter")}
            >
                <FontAwesome6Icon name="sliders" color={"#777E90"} size={rh(3.5)}/>
            </TouchableOpacity>
            
          </View>
          {/*  */}
          <View>
          <FlatList
          data={imgContaner}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom:rh(47)
          }}
          renderItem={({item,index})=>{
            return(
              <TouchableOpacity style={[styles.flatlistitem,{backgroundColor:item.color}]}
              onPress={()=>this.setState({avtiveIndex:avtiveIndex==index?-1:index})}
              >
                <View style={styles.titleParent}>
                <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.imgoutercircle}>
                <View style={[styles.imgoutercircle,{
                  width:rh(12),
                  height:rh(12),
                  backgroundColor:"rgba(194, 199, 181, 0.50)"
                },index==1&&{
                  height:rh(15)
                }]}>
                  <Image source={item.image}
                  resizeMode='stretch'
                  style={styles.img}/>
                </View>
                </View>
              </TouchableOpacity>
            )
          }}
          />
          </View>
        
        </View>
      </SafeAreaView>
    );
  }
}


const mpaState=(state:any)=>({
  clothsData:state.search.clothsData
})


export default connect(mpaState)(Search);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(3),
    backgroundColor:"#fff",
    paddingTop:rh(2),
 
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
    marginVertical:rh(1.5),
    marginTop:rh(2)
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
  flatlistitem:{
    justifyContent:"space-between",
    height:rh(18),
    marginVertical:rh(1.5),
    borderRadius:rh(3),
    flexDirection:"row",
    alignItems:"center"
  },
  img:{
    height:rh(18),
    width:rh(18)
  },
  imgoutercircle:{
    backgroundColor:"rgba(194, 199, 181, 0.50)",
    width:rh(17),
    height:rh(17),
    justifyContent:"center",
    alignItems:"center",
    borderRadius:rh(9)
  },
  title:{
    textAlign:"center",
    color:"#fff",
    fontSize:rf(4),
    fontWeight:"700"
  },
  titleParent:{
    width:rw(40)
  }
});
