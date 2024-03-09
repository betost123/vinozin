import * as React from 'react';

import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {HorizontalSpacer} from '../../atoms/Spacers';
import TextField from '../../atoms/TextField';
import {BodySmallFat, Subtitle} from '../../atoms/Typography';
import SecondaryButton from '../../atoms/buttons/SecondaryButton';

const RegisterAccountScreen = ({navigation}: any) => {
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
          <HorizontalSpacer spacing={2} />
          <Subtitle>Skapa konto</Subtitle>
          <HorizontalSpacer spacing={1} />

          <View style={{width: '100%'}}>
            <TextField
              placeholder="E-post"
              title="E-post"
              autoFocus
              inputMode="email"
            />
          </View>
          <HorizontalSpacer spacing={1} />
          <View style={{width: '100%'}}>
            <TextField
              placeholder="Lösenord"
              title="Lösenord"
              secureTextEntry
            />
          </View>
          <HorizontalSpacer spacing={2} />
          <SecondaryButton
            title="Skapa konto"
            onPress={() => console.log('log in')}
          />

          <HorizontalSpacer spacing={2} />
          <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <BodySmallFat>Jag har redan ett konto</BodySmallFat>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterAccountScreen;

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
