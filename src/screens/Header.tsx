import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../theme/colors';
import {Subtitle} from '../atoms/Typography';

const Header = ({navigation}: any) => {
  return (
    <>
      <View style={styles.background}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{width: 70, height: 28, resizeMode: 'contain'}}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../assets/images/memoji.png')}
            style={styles.profileCircle}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 54,
    paddingBottom: 8,
    alignItems: 'center',
  },
  profileCircle: {
    backgroundColor: colors.white,
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  letterStyling: {
    textTransform: 'uppercase',
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: -3,
  },
});

export default Header;
