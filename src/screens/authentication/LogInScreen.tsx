import * as React from 'react';

import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {HorizontalSpacer} from '../../atoms/Spacers';
import PrimaryButton from '../../atoms/buttons/PrimaryButton';
import TextField from '../../atoms/TextField';
import {BodySmallFat, Subtitle} from '../../atoms/Typography';
import auth from '@react-native-firebase/auth';

const LogInScreen = ({navigation}: any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [resetPasswordModal, setResetPasswordModal] = React.useState(false);

  const FirebaseSignIn = async () => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        console.log(response.user.emailVerified);
        console.log(response.user.email);
        console.log(response.user.uid);
      })
      .catch(error => {
        console.log(error);
      });
  };

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

          <Subtitle>Logga in</Subtitle>
          <HorizontalSpacer spacing={1} />

          <View style={{width: '100%'}}>
            <TextField
              placeholder="E-post"
              title="E-post"
              autoFocus
              inputMode="email"
              onChangeText={event => setEmail(event)}
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
          <PrimaryButton title="Logga in" onPress={FirebaseSignIn} />

          <HorizontalSpacer spacing={2} />
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <BodySmallFat>Skapa konto</BodySmallFat>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LogInScreen;

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
