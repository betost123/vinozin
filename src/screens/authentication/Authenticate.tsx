import * as React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {Body, Title} from '../../atoms/Typography';
import {HorizontalSpacer} from '../../atoms/Spacers';
import PrimaryButton from '../../atoms/buttons/PrimaryButton';
import SecondaryButton from '../../atoms/buttons/SecondaryButton';

const AuthenticateScreen = ({navigation}: any) => {
  const image = {
    uri: 'https://images.ctfassets.net/6vzzfxkfl0iw/5Da8JsBdDb5bU8DbcJS3x0/f0fb8c23c25d8c2ae08ead79f8ee9b36/vinbild.png',
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.blackBox}>
          <Image
            source={require('../../../assets/images/logomedium.png')}
            style={styles.logo}
          />
          <HorizontalSpacer spacing={1} />
          <Body styles={{color: 'white'}}>Välkommen till Vinozins värld!</Body>
          <HorizontalSpacer spacing={2} />
          <PrimaryButton
            title="Logga in"
            onPress={() => navigation.navigate('LogIn')}
          />
          <HorizontalSpacer spacing={2} />
          <SecondaryButton
            title="Skapa konto"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default AuthenticateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  blackBox: {
    width: '85%',
    padding: 24,
    borderRadius: 4,
    backgroundColor: '#000000c9',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});
