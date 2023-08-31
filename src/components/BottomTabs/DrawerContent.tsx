import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight as rh,
  responsiveFontSize as rf,
  responsiveScreenWidth as rw,
} from 'react-native-responsive-dimensions';
import {
  colorsData,
  discountData,
  startsData,
} from '../../constants/SliderData';
export class DrawerContent extends Component {
  render() {
    return (
      <SafeAreaView>
       
        <View style={styles.container}>
          <View style={styles.filterContainer}>
            <Text style={styles.filterText}>Filter</Text>
            <FontAwesome6
              name="sliders"
              size={rh(3)}
              color={'rgba(51, 48, 46, 1)'}
            />
          </View>
          <View>
           
            <Text>Price</Text> 

          </View>
          <View>
           
            <Text>Color</Text>
            <View style={styles.colorContainers}>
             
              {colorsData.map(item => (
                <View
                  key={item.color}
                  style={{
                    height: rh(3),
                    width: rh(3),
                    borderRadius: rh(3),
                    backgroundColor: item.color,
                    marginHorizontal:rw(1)
                  }}>

                  </View>
              ))}
            </View>
          </View>
          <View style={styles.colorContainers}>
           
            {startsData.map(item => (
              <View
                key={item}
                style={{
                  backgroundColor: item === 5 ? '#000' : 'transparent',
                  height: rh(5.2),
                  width: rh(5.2),
                  borderRadius: rh(4),
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginHorizontal:rw(1)
                }}>
               
                <AntDesign
                  name="star"
                  color={item === 5 ? '#fff' : '#000'}
                  size={rh(2)}
                />
                <Text
                  style={{
                    fontSize: rf(2),
                    marginHorizontal: rw(1),
                    color: item === 5 ? '#fff' : '#000',
                  }}>
                 
                  {item}
                </Text>
              </View>
            ))}
          </View>
          <View>
           
            <Text>Discount</Text>
            <View style={styles.discountContainer}>
             
              {discountData.map(item => (
                <View key={item} style={styles.eachItem}>
                 
                  <Text style={styles.percentage}>{item}</Text>
                  <Text
                    style={[
                      styles.percentage,
                      {marginHorizontal: rf(2), fontWeight: '600'},
                    ]}>
                    X
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View>
           
            <Text>Reset</Text>
            <TouchableOpacity>
             
              <Text>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default DrawerContent;
const styles = StyleSheet.create({
  percentage: {
    color: 'rgba(51, 48, 46, 1)',
    fontSize: rf(2.5),
    fontWeight: '500',
    fontFamily: 'Nuntio',
  },
  eachItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: rf(2),
    borderRadius: rf(3.5),
    margin: rf(1),
  },
  discountContainer: {flexWrap: 'wrap', flexDirection: 'row'},
  colorContainers: {justifyContent: 'space-between', flexDirection: 'row'},
  filterText: {
    fontFamily: 'Product Snas',
    fontWeight: '500',
    fontSize: rf(3),
    color: 'rgba(51, 48, 46, 1)',
    letterSpacing: rf(0.1),
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(243, 243, 246, 1)',
    paddingBottom: rh(4),
  },
  container:{
    borderRadius:rh(2),
    paddingHorizontal:rw(2)
  }
});
