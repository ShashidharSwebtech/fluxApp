import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import React, {Component} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

interface Iprops{
navigation?:{
  navigate:React.FC
}
}
export class LandingPage extends Component<Iprops> {
  render() {
    return (
      <View>
        {/* <StatusBar translucent backgroundColor={'transparent'} /> */}

        <ImageBackground
          source={require('../assets/background.png')}
          resizeMode="stretch"
          style={styles.backgroundIamge}>
          <View style={styles.container}>
            <View style={styles.textContainer}>

            <Text style={styles.heading}>Welcome to Fluxstore!</Text>
            <Text style={[styles.heading,styles.heading2]}> The home for a fashionista</Text>
            </View>

            <TouchableOpacity style={styles.getstart}
            testID='shopnow'
            onPress={()=>this.props.navigation?.navigate("shopnow")}
            
            >
              
              <Text style={styles.btntext}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor:"rgba(0, 0, 0, 0.50)"
  },
  backgroundIamge: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),

  },
  getstart: {
    marginTop:responsiveHeight(5),
    backgroundColor:"rgba(255, 255, 255, 0.25)",
    paddingVertical:responsiveHeight(1.5),
    paddingHorizontal:responsiveWidth(6),
    borderRadius:30,
    borderWidth:1,
    borderColor:"#fff",

  },
  btntext: {
    fontSize:responsiveFontSize(2),
    color:"#fff",
    fontWeight:"700",
    fontFamily:"Product Sans",
    
  },
  heading: {
    color: '#fff',
    fontSize: responsiveFontSize(4),
    fontWeight: '700',
    fontFamily:"Product Sans"
  },
  heading2:{
    fontSize: responsiveFontSize(3),
    marginTop:responsiveHeight(1)
  },
  textContainer:{
    marginTop:responsiveHeight(60)
  }
});
