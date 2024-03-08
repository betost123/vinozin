import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../theme/colors';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        /*tabBarIcon: ({focused, color, size}) => {
            let icon;
  
            if (route.name === 'Home') {
              icon = focused ? <HouseBlueIcon /> : <HouseOrangeIcon />;
            } else if (route.name === 'Parties') {
              icon = focused ? <PresentIconBlue /> : <PresentIconOrange />;
            } else if (route.name === 'Planning') {
              icon = focused ? <ListIconBlue /> : <ListIconOrange />;
            } else if (route.name === 'Invitations') {
              icon = focused ? <MailIconBlue /> : <MailIconOrange />;
            } else if (route.name === 'Contacts') {
              icon = focused ? <ContactsIconBlue /> : <ContactsIconOrange />;
            }
  
            return icon;
          },*/
        tabBarActiveTintColor: colors.darkBlue,
        tabBarInactiveTintColor: colors.primary,
        cardStyle: {backgroundColor: colors.background},
        //header: () => <Header navigation={navigation} />,
      })}>
      <Tab.Screen name="Home" component={HomeStack} options={{title: 'Hem'}} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
