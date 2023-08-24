import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

// import { FlatList } from 'react-native-gesture-handler';
interface Iprops{
    navigation?:{
      navigate:React.FC
    }
    }
interface IState {
  caroselData: {
    title: string;
    text: string;
    imgsource: string;
    id: number;
  }[];
  activeIntex:number
}
export class ShopNow extends Component<Iprops, IState> {
    carosel:React.Ref<any>
  constructor(props: Iprops) {
    super(props);

    this.state = {
      caroselData: [
        {
          id: 1,
          title: 'Discover something new',
          text: 'Special new arrivals just for you',
          imgsource: require('../assets/image1.png'),
        },
        {
          id: 2,
          title: 'Update trendy outfit',
          text: 'Favorite brands and hottest trends',
          imgsource: require('../assets/image2.png'),
        },
        {
          id: 2,
          title: 'Explore your true style',
          text: 'Relax and let us bring the style to you',
          imgsource: require('../assets/image3.png'),
        },
      ],
      activeIntex:0
    };
    this.carosel=React.createRef()
  }
  render() {
    const {caroselData,activeIntex} = this.state;
    return (
      <SafeAreaView>
        <View style={style.container}>
          <View style={{zIndex: 1,height:responsiveHeight(70)}}>
            <Carousel
            style={{alignItems:'center'}}
              data={caroselData}
              ref={this.carosel}
              itemWidth={responsiveWidth(75)}
              sliderWidth={responsiveWidth(100)}
              itemHeight={responsiveHeight(100)}
              autoplay={true}
              indicatorStyle='white'
              inactiveSlideScale={1}
      
            onSnapToItem={(index)=>this.setState({activeIntex:index})}
       
              renderItem={({item,index}) => {
                return (
                    
                  <View style={style.imageContainer}>
                    {index==activeIntex?<>
                        <Text style={style.title}>{item.title}</Text>
                    <Text style={style.text}>{item.text}</Text>
                    <View style={style.imagebackgrond}>
                      <Image
                        source={item.imgsource}
                        resizeMode="stretch"
                        style={style.image}
                      />
                    </View>
                    </>:<View style={[style.imagebackgrond,style.inActivemagebackgrond]}>
                        <View style={[style.image,style.inactiveImage]}>
                        </View>
                    </View>}
                    
                  </View>
                );
              }}
            />
            <Pagination
            dotsLength={caroselData.length}
            activeDotIndex={activeIntex}
            carouselRef={this.carosel}
            tappableDots={true}
            inactiveDotStyle={{
                borderWidth:1,
                borderColor:"#fff",
                backgroundColor:"transparent",
                width:responsiveHeight(2),
                height:responsiveHeight(2),
                borderRadius:30,
            }}
            dotStyle={{
                backgroundColor:"#fff"
            }}
            />
            <TouchableOpacity>

            </TouchableOpacity>
          </View>
          <TouchableOpacity style={style.shopnowbtn}
            onPress={()=>this.props.navigation?.navigate("signup")}
            testID='signup'
            >
              <Text style={style.btntext}>Shopping now</Text>
            </TouchableOpacity>
          <View style={style.bottomContainer}>
            <Text></Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ShopNow;

const style = StyleSheet.create({
  container: {
    height: responsiveHeight(100),
    marginTop: responsiveHeight(8),
  },
  caroselItem: {},
  innerContainer: {
    backgroundColor: 'transparent',
    width: responsiveWidth(80),
  },
  shopnowbtn:{
    marginTop:responsiveHeight(1),
    backgroundColor:"rgba(255, 255, 255, 0.25)",
    paddingVertical:responsiveHeight(1.5),
    // paddingHorizontal:responsiveWidth(6),
    borderRadius:30,
    borderWidth:1,
    borderColor:"#fff",
    zIndex:1,
    width:responsiveWidth(35),
    alignItems:"center",
    alignSelf:"center"

  },
  bottomContainer: {
    backgroundColor: '#464447',
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(50),
    width: responsiveWidth(100),
    zIndex: 0,
  },
  imagebackgrond: {
    backgroundColor: '#E7E8E9',
    alignItems: 'center',
    borderRadius: 20,
    overflow:"hidden",
  },
inActivemagebackgrond:{
    marginTop:responsiveHeight(20),
    height:responsiveHeight(35)
},
  image: {
    width: responsiveWidth(60),
    height: responsiveHeight(43),

  },
  inactiveImage:{
    
    height: responsiveHeight(40),
    marginTop:responsiveHeight(8)
  },
  imageContainer: {
    alignItems: 'center',
    width: responsiveWidth(80),
  },
  title: {
    fontSize: responsiveFontSize(3),
    marginBottom: responsiveHeight(4),
    fontWeight: '700',
  },
  text: {
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    marginBottom: responsiveHeight(5),
  },
  btntext: {
    fontSize:responsiveFontSize(2),
    color:"#fff",
    fontWeight:"700",
    fontFamily:"Product Sans",
    
  }
});
