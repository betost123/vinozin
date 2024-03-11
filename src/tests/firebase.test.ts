// Import the functions to test
import {firebase} from '@react-native-firebase/database';
import {addUser, addWineToUser, getCurrentUser} from '../firebase/user';

// Mock Firebase database functions
jest.mock('@react-native-firebase/database', () => {
  const setMock = jest.fn(() => Promise.resolve());
  const onceMock = jest.fn(() => Promise.resolve({val: () => null}));
  const updateMock = jest.fn();

  const refMock = jest.fn(path => ({
    set: setMock,
    once: onceMock,
    update: updateMock,
  }));

  const databaseMock = jest.fn(() => ({
    ref: refMock,
  }));

  const appMock = jest.fn(() => ({
    database: databaseMock,
  }));

  return {
    firebase: {
      app: appMock,
    },
  };
});

// Test cases for addUser function
describe('addUser', () => {
  it('should add a new user to the database', () => {
    // Mock console.log to prevent output during testing
    console.log = jest.fn();
    const id = 'userId';
    const email = 'test@example.com';
    addUser(id, email);
    expect(firebase.app().database().ref).toHaveBeenCalledWith(`/users/${id}`);
    expect(firebase.app().database().ref().set).toHaveBeenCalledWith({
      name: 'Betina',
      email: email,
    });
  });
});

// Test cases for getCurrentUser function
describe('getCurrentUser', () => {
  it('should retrieve the current user data from the database', async () => {
    // Mock console.log and console.error to prevent output during testing
    console.log = jest.fn();
    console.error = jest.fn();
    const id = 'userId';
    const userData = await getCurrentUser(id);
    expect(firebase.app().database().ref).toHaveBeenCalledWith(`/users/${id}`);
    expect(userData).toEqual({registeredWines: []});
  });
});

// Test cases for addWineToUser function
describe('addWineToUser', () => {
  it('should add a wine to the user data in the database', async () => {
    // Mock console.log and console.error to prevent output during testing
    console.log = jest.fn();
    console.error = jest.fn();
    const id = 'userId';
    const wine = {name: 'Test Wine', year: '2020', id: 'hgf73'};
    await addWineToUser(id, wine);
    expect(firebase.app().database().ref).toHaveBeenCalledWith(`/users/${id}`);
    expect(firebase.app().database().ref().once).toHaveBeenCalled();
    expect(firebase.app().database().ref().update).toHaveBeenCalledWith({
      registeredWines: [wine],
    });
  });
});
