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
import auth from '@react-native-firebase/auth';
import {addUser} from '../../firebase/user';

const RegisterAccountScreen = ({navigation}: any) => {
  const image = {
    uri: 'https://images.ctfassets.net/6vzzfxkfl0iw/5Da8JsBdDb5bU8DbcJS3x0/f0fb8c23c25d8c2ae08ead79f8ee9b36/vinbild.png',
  };

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [accountCreated, setAccountCreated] = React.useState(false);

  const signUpUser = () => {
    console.log(email);
    console.log(password);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log('user created');
        console.log(response.user);
        console.log(response.additionalUserInfo);
        addUser(response.user.uid, response.user?.email ?? '');
        setAccountCreated(true);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
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
              onChangeText={event => setEmail(event)}
              autoFocus
              inputMode="email"
            />
          </View>
          <HorizontalSpacer spacing={1} />
          <View style={{width: '100%'}}>
            <TextField
              placeholder="Lösenord"
              title="Lösenord"
              onChangeText={event => setPassword(event)}
              secureTextEntry
            />
          </View>
          <HorizontalSpacer spacing={2} />
          {accountCreated ? (
            <BodySmallFat>Konto skapat!</BodySmallFat>
          ) : (
            <SecondaryButton title="Skapa konto" onPress={signUpUser} />
          )}

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
