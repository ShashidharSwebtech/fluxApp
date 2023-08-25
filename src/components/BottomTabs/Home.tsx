import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {Header} from '../../common/Header';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterilCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  autumcollection,
  downimg1,
  downimg2,
  newcomponent,
  summercollections,
  topcollections,
} from '../../assets';
import {FanshiProducts, Products} from './Products';

interface Iprops {}
interface Istate {
  topNavigation: React.ReactNode[];
}

export class Home extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);

    this.state = {
      topNavigation: [
        <AntIcon name="woman" size={rh(3)} color={'#fff'} />,
        <AntIcon name="man" size={rh(3)} color={'#fff'} />,
        <MaterilCommunityIcon name="glasses" size={rh(3)} color={'#fff'} />,
        <Image
          source={require('../../assets/brushicon.png')}
          tintColor={'#fff'}
          style={{height: rh(3.8)}}
        />,
      ],
    };
  }
  render() {
    const {topNavigation} = this.state;
    return (
      <SafeAreaView>
        <View style={{backgroundColor: '#fff', paddingBottom: rh(30)}}>
          {/* Header */}
          <Header title={'Fluxstore'} />
          {/* Custom TabTop Navigation */}

          <View style={styles.topnavigaion}>
            <FlatList
              data={topNavigation}
            horizontal
              contentContainerStyle={{
                justifyContent: 'space-between',
                width: rw(90),
                // alignItems: "center",
                marginHorizontal:rw(5)
              }}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.topButtons,
                      index !== 0 && {borderWidth: 0},
                    ]}>
                    <View
                      style={[
                        styles.topButtons,
                        styles.topButtonInner,
                        index == 0
                          ? {backgroundColor: '#3a2c27', borderColor: '#3a2c27'}
                          : {
                              backgroundColor: '#9D9D9D77',
                              borderColor: '#9D9D9D',
                            },
                      ]}>
                      {item}
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <ScrollView>
            <View style={styles.container}>
              {/* Autum Collection */}
              <View style={{width: rw(100), alignSelf: 'center'}}>
                <Image
                  source={autumcollection}
                  resizeMode="stretch"
                  style={styles.autumcollectionimage}
                />
                <Text style={styles.autumtext}>Autumn Collection 2021</Text>
              </View>
              {/* Products */}
              <View >
                <View style={styles.productHeadingParent}>
                  <Text style={styles.featureproduct}>Feature Products</Text>
                  <Text style={styles.showalltext}>Show all</Text>
                </View>
                <FlatList
                  horizontal
                  data={Products}
                  renderItem={({item}) => (
                    <View style={styles.productContainer}>
                      <Image
                        source={item.image}
                        resizeMode="stretch"
                        style={styles.productimg}
                      />
                      <Text style={styles.producttitle}>{item.titel}</Text>
                      <Text style={styles.productprice}>${item.price}</Text>
                    </View>
                  )}
                />
              </View>
            </View>

            {/* New Collection fram */}
            <View style={styles.newCollectioncontainer}>
              <View style={styles.newCollectionTextParent}>
                <Text style={styles.newCollectionheading}>
                  I NEW COLLECTION
                </Text>
                <Text style={styles.newCollectiontext}>HANG OUT & PARTY</Text>
              </View>
              <View style={styles.backgroundcirclre}>
                <View style={styles.backgroundcirclre1}>
                  <Image
                    source={newcomponent}
                    style={{height: rh(23), width: rh(20), marginTop: rh(2)}}
                  />
                </View>
              </View>
            </View>
       {/* Recommended */}
            <View >
              <View style={styles.productHeadingParent}>
                <Text style={styles.featureproduct}>Recommended</Text>
                <Text style={styles.showalltext}>Show all</Text>
              </View>
              <View style={{height:rh(15),paddingTop:rh(2)}}>

              <FlatList
                horizontal
                data={FanshiProducts}
                renderItem={({item}) => (
                  <View style={styles.fanshiContainer}>
                    <Image
                      source={item.image}
                      resizeMode="stretch"
                      style={styles.fanshiimg}
                    />
                    <View
                      style={{justifyContent: 'space-around', padding: rh(1)}}>
                      <Text style={styles.fanshititle}>{item.titel}</Text>
                      <Text style={styles.fanshiprice}>${item.price}</Text>
                    </View>
                  </View>
                )}
              />
              </View>
            </View>
            <View>
              <View style={styles.productHeadingParent}>
                <Text style={styles.featureproduct}>Top Collection</Text>
                <Text style={styles.showalltext}>Show all</Text>
              </View>
              <View
                style={[
                  styles.newCollectioncontainer,
                  {
                    width: rw(92),
                    borderRadius: rh(1),
                    marginLeft: rw(2.5),
                    height:rh(21)
                  },
                ]}>
                <View style={styles.newCollectionTextParent}>
                  <Text style={styles.newCollectionheading}>
                    I Sale up to 40%
                  </Text>
                  <Text
                    style={[
                      styles.newCollectiontext,
                      styles.topcollectionstext,
                    ]}>
                    FOR SLIM & BEAUTY
                  </Text>
                </View>
                <View style={styles.backgroundcirclre1}>
                  <Image
                    source={topcollections}
                    style={{height: rh(23), width: rh(20), marginTop: rh(2)}}
                  />
                </View>
              </View>
            </View>
            <View
              style={[
                styles.newCollectioncontainer,
                {
                  width: rw(92),
                  borderRadius: rh(1),
                  marginLeft: rw(2.5),
                  height:rh(22)
                },
              ]}>
              <View style={styles.newCollectionTextParent}>
                <Text style={styles.newCollectionheading}>
                  I Summer Collection 2021
                </Text>
                <Text style={[styles.newCollectiontext]}>
                  Most sexy & fabulous design
                </Text>
              </View>
              <View style={styles.backgroundcirclre1}>
                <Image
                  source={summercollections}
                  
                  style={{height: rh(25), width: rh(20), marginTop: rh(2)}}
                />
              </View>
            </View>
            {/* bottom designs */}
            <View style={{flexDirection: 'row', marginTop:rh(2),justifyContent:"space-around"}}>
              <View style={[styles.bottomcontainer,{marginLeft:rw(1)}]}>
                <Image source={downimg1} />
                <View style={styles.bottomtextContainer}>
                  <Text style={styles.bottomtexthead}>T-Shirts</Text>
                  <Text style={styles.bottomtext}>The Office Life</Text>
                </View>
              </View>
              <View style={[styles.bottomcontainer,{marginRight:rw(3)}]}>
                <View style={[styles.bottomtextContainer,{paddingLeft:rw(2)}]}>
                  <Text style={styles.bottomtexthead}>Dresses</Text>
                  <Text style={styles.bottomtext}>Elegant Design</Text>
                </View>
                <Image source={downimg2} />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
//
export default Home;
const styles = StyleSheet.create({
  topcollectionstext: {
    color: '#777E90',
    marginTop: rh(1),
    fontWeight: '200',
  },
  fanshiContainer: {
    flexDirection: 'row',

    backgroundColor: '#F9F9F9',
    marginHorizontal: rw(1),
    height: rh(10),
    borderRadius: rh(2),
    elevation:1,
    shadowColor:"#000",
    shadowOpacity:0.1,
    shadowOffset:{height:0.5,width:0.5},
    marginRight: rh(2.5)
  },
  fanshiimg: {
    borderRadius: rh(1),
    height: rh(10),
    width: rh(10),
  },
  fanshititle: {
    color: '#1D1F22',
    fontSize: rf(1.8),
    fontFamily: 'Product Sans Medium',
    fontWeight: '300',
  },
  fanshiprice: {
    color: '#1D1F22',
    fontSize: rf(2),
    fontFamily: 'Product Sans',
    fontWeight: '700',
  },
  container: {
    paddingHorizontal: rw(3),
  },
  header: {},
  productimg: {
    width: rw(40),
    height: rh(27),
    borderRadius: rh(2),
  },
  producttitle: {
    color: '#1D1F22',
    fontSize: rf(1.8),
    fontFamily: 'Product Sans Medium',
    fontWeight: '500',
    marginVertical:rh(1)
  },
  productprice: {
    color: '#1D1F22',
    fontSize: rf(2),
    fontFamily: 'Product Sans',
    fontWeight: '700',
  },
  autumcollectionimage: {
    width: rw(90),
    height: rh(25),
    alignSelf: 'center',
    borderRadius: rh(3),
  },
  autumtext: {
    color: '#fff',
    fontSize: rf(3.3),
    width: rw(50),
    position: 'absolute',
    right: rw(0),
    top: rh(1),
    paddingLeft: rw(5),
    fontFamily: 'Product Sans',
    fontWeight: '600',
  },
  topnavigaion: {
    height: rh(8),
    marginTop: rh(1),

  },
  topButtonInner: {
    backgroundColor: '#3A2C27',
    height: rh(6),
    width: rh(6),
    borderRadius: rh(3),
    marginRight: 0,
    marginLeft: 0,
  },
  topButtons: {
    width: rh(7),
    height: rh(7),
    alignItems: 'center',
    justifyContent: 'center',
    
 
    borderRadius: rh(4),
    borderWidth: 2,
    borderColor: '#3A2C27',
    padding: 2,
   
  },
  productContainer: {
    marginVertical: rh(1),
    marginHorizontal: rw(4),
  },
  productHeadingParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: rh(1.5),
    paddingHorizontal: rw(2),
  },
  featureproduct: {
    fontSize: rf(2),
    fontWeight: '600',
    fontFamily: 'Product Sans',
    color: '#000',
  },
  showalltext: {
    fontSize: rf(2),
    fontWeight: '600',
    fontFamily: 'Product Sans Medium',
    color: '#9b9b9b',
  },
  newCollectioncontainer: {
    backgroundColor: '#F9F9F9',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: rw(4),
    width: rw(100),
    height: rh(23.5),
    marginTop: rh(2),
  },
  newCollectionTextParent: {
    // width: rw(36),
  },
  newCollectionheading: {
    color: '#777E90',
    fontSize: rf(1.8),
    fontWeight: '300',
    fontFamily: 'Product Sans Light',
    width:rw(50),
    marginBottom:rh(1.8),
    marginTop:rh(5)
  },
  newCollectiontext: {
    fontSize: rf(2.5),
    fontWeight: '200',
    fontFamily: 'Product Sans Light',
    marginTop: rh(1),
    width:rw(25)
  },
  backgroundcirclre: {
    backgroundColor: '#E2E2E299',
    borderRadius: rh(11),
    width: rh(22),
    height: rh(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundcirclre1: {
    backgroundColor: '#E2E2E2ff',
    borderRadius: rh(9),
    width: rh(17),
    height: rh(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  bottomcontainer:{
    backgroundColor:"#f8f8f8",
    borderRadius:rh(2),
    width:rw(45),
    flexDirection:"row",
   overflow:"hidden"
  },
  bottomtexthead:{
    color:"#737680",
    fontSize:rf(2)
  },
  bottomtext:{
    color:"#1D1F22",
    fontSize:rf(3.1),
    width:rw(20),
    fontWeight:"300",
    marginTop:rh(1)
  },
  bottomtextContainer:{
    marginVertical:rh(4)
  }
});
