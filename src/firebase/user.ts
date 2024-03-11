import {firebase} from '@react-native-firebase/database';
import {Wine} from '../utils/models';

export const addUser = (id: string, email: string) => {
  firebase
    .app()
    .database('https://vinozin-default-rtdb.europe-west1.firebasedatabase.app/')
    .ref(`/users/${id}`)
    .set({name: 'Betina', email: email})
    .then(() => console.log('data set'));
};

export const getCurrentUser = (id: string) => {
  return new Promise((resolve, reject) => {
    firebase
      .app()
      .database(
        'https://vinozin-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref(`/users/${id}`)
      .once('value')
      .then(snapshot => {
        let user = snapshot.val();
        if (!user) {
          // If user doesn't exist yet, initialize it with an empty object
          user = {};
        }
        // Initialize registeredWines as an empty array if it doesn't exist yet
        if (!user.registeredWines) {
          user.registeredWines = [];
        }
        resolve(user);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const addWineToUser = (id: string, wine: Wine) => {
  const userRef = firebase
    .app()
    .database('https://vinozin-default-rtdb.europe-west1.firebasedatabase.app/')
    .ref(`/users/${id}`);

  userRef
    .once('value')
    .then(snapshot => {
      const userData = snapshot.val();
      const registeredWines =
        userData && userData.registeredWines ? userData.registeredWines : [];

      // Add the new wine to the registeredWines array
      registeredWines.push(wine);

      // Update the user's data with the modified registeredWines array
      userRef
        .update({registeredWines})
        .then(() => console.log('Wine added successfully'))
        .catch(error => console.error('Error adding wine:', error));
    })
    .catch(error => console.error('Error retrieving user data:', error));
};
