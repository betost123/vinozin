import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../theme/colors';
import Header from '../screens/Header';
import ExploreScreen from '../screens/Explore';
import TastingsScreen from '../screens/Tastings';
import WineProfileScreen from '../screens/WineProfile';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
    </Stack.Navigator>
  );
}
function TastingsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TastingsScreen" component={TastingsScreen} />
    </Stack.Navigator>
  );
}
function WineProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WineProfileScreen" component={WineProfileScreen} />
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
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.green,
        cardStyle: {backgroundColor: colors.background},
        tabBarStyle: {backgroundColor: colors.black},
        header: () => <Header navigation={navigation} />,
      })}>
      <Tab.Screen name="Home" component={HomeStack} options={{title: 'Hem'}} />
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{title: 'Utforska'}}
      />
      <Tab.Screen
        name="Tastings"
        component={TastingsStack}
        options={{title: 'Provningar'}}
      />
      <Tab.Screen
        name="WineProfile"
        component={WineProfileStack}
        options={{title: 'Vinprofil'}}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
