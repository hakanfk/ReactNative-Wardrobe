import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { Ionicons } from '@expo/vector-icons'
import MyGardrobe from './screens/MyGardrobe';
import Questions from './screens/Questions';
import HowMany from './screens/HowMany';
import ClothName from './screens/ClothName';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Post from './screens/Post';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShowNews from './screens/ShowNews';
import ClothByCategory from './screens/ClothByCategory';
import FavsScreen from './screens/FavsScreen';
import EfeQuestion from './screens/EfeQuestion';
import PieChart from './screens/PieChart';
import AuthContextProvider from './store/ctxAuth';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{

      }} />
      <Drawer.Screen name="MyGardrobe" component={MyGardrobe} options={{
        headerShown: false
      }} />
    </Drawer.Navigator>
  );
}


function BottomTabScreen() {

  function CustomTabBar({ children, onPress }) {
    return (
      <Pressable onPress={onPress} style={{ top: -30, justifyContent: 'center', alignItems: 'center' }}
        android_ripple={'gray'} >
        <View style={{ width: 70, height: 70, borderRadius: 31, backgroundColor: 'green' }} >
          {children}
        </View>
      </Pressable>
    )
  }

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarButton: [
        "ClothByCategory",
        "FavsScreen",
        "PieChart"
      ].includes(route.name)
        ? () => {
          return null;
        }
        : undefined,
      tabBarActiveTintColor: '#309010',
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 3,
        left: 10,
        right: 10,
        elevation: 0,
        backgroundColor: '#111222',
        borderRadius: 15,
        height: 55,

      }
    }

    )}    >
      <Tab.Screen name="Home" component={Home} options={{
        title: "Home",
        tabBarColor: 'green',
        tabBarLabel: "Home",
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          return (
            <Ionicons name="home" size={25} color={color} style={{
              tintColor: focused ? 'red' : 'purple'
            }} />
          )
        }
      }} />

      <Tab.Screen name='Add' component={Post} options={{
        title: 'Add',
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          return (
            <Ionicons name="add" size={50} color={'black'} />
          )
        },
        tabBarButton: (props) => {
          return (
            <CustomTabBar {...props} />
          )
        }
      }} />


      <Tab.Screen name="MyGardrobe" component={MyGardrobe} options={{
        title: "Gradrobe",
        tabBarColor: 'red',
        tabBarLabel: "Gardrobe",
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          return (
            <Ionicons name="woman" size={size} color={color} />
          )
        }
      }} />

      <Tab.Screen name="ClothByCategory" component={ClothByCategory} options={{
        title: "",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          position: 'absolute'
        }

      }} />

      <Tab.Screen name="FavsScreen" component={FavsScreen} options={{
        title: "Your Favs",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          position: 'absolute'
        }

      }} />
      <Tab.Screen name="PieChart" component={PieChart} options={{
        title: "Pie",
        headerShown: false,
        tabBarShowLabel: false,


      }} />

    </Tab.Navigator>
  )

}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Provider store={store} >
          <NavigationContainer>
            <Stack.Navigator initialRouteName='OnboardingScreen' >
              <Stack.Screen name="OnboardingScreen" component={Onboarding}
                options={{
                  headerShown: false
                }} />
              <Stack.Screen name="OverviewScreen" component={BottomTabScreen}
                options={{
                  headerShown: false
                }} />

              <Stack.Screen name="ShowNews" component={ShowNews}
                options={{
                  headerShown: false
                }} />

              <Stack.Screen name='MyDrawer' component={MyDrawer}
                options={{
                  headerShown: false
                }} />

              <Stack.Screen name="SignUp" component={SignUp} options={{
                headerShown: false
              }} />
              <Stack.Screen name="SignIn" component={SignIn} options={{
                headerShown: false
              }} />
              <Stack.Screen name="HowMany" component={HowMany} options={{
                headerShown: false
              }} />
              <Stack.Screen name="ClothName" component={ClothName} options={{
                headerShown: false
              }} />
              <Stack.Screen name="Questions" component={EfeQuestion} options={{
                headerShown: false
              }} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </AuthContextProvider>
    </>

  );
}


