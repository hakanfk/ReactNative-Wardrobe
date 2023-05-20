import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./screens/Onboarding";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import { Ionicons } from "@expo/vector-icons";
import MyGardrobe from "./screens/MyGardrobe";
import Questions from "./screens/Questions";
import HowMany from "./screens/HowMany";
import ClothName from "./screens/ClothName";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Post from "./screens/Post";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShowNews from "./screens/ShowNews";
import ClothByCategory from "./screens/ClothByCategory";
import FavsScreen from "./screens/FavsScreen";
import EfeQuestion from "./screens/EfeQuestion";
import PieChart from "./screens/PieChart";
import AuthContextProvider, { AuthContext } from "./store/ctxAuth";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import Settings from "./screens/Settings";
import { getEmail } from "./util/auth";
import Information from "./screens/Information";
import LoadingScreen from "./screens/LoadingScreen";
import Puanlama from "./screens/Puanlama";
import SeeResults from "./screens/SeeResults";
import WellDoneScreen from "./components/WellDoneScreen";
import ASplashScreen from "./screens/ASplashScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/* function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{

      }} />
      <Drawer.Screen name="MyGardrobe" component={MyGardrobe} options={{
        headerShown: false
      }} />
    </Drawer.Navigator>
  );
} */

function BottomTabScreen() {
  /* function CustomTabBar({ children, onPress }) {
    return (
      <Pressable onPress={onPress} style={{ top: -30, justifyContent: 'center', alignItems: 'center' }}
        android_ripple={'gray'} >
        <View style={{
          width: 70, height: 70, borderRadius: 31, backgroundColor: 'white',
          borderWidth: 2, borderColor: '#ddd'
        }} >
          {children}
        </View>
      </Pressable>
    )
  } */

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarButton: [
          "ClothByCategory",
          "FavsScreen",
          "Information",
          "LoadingScreen",
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 3,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: "#111222",
          borderRadius: 15,
          height: 55,
        },
      })}
    >
      {/* <Tab.Screen name="Home" component={Home} options={{
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
      }} /> */}

      <Tab.Screen
        name="PieChart"
        component={PieChart}
        options={{
          title: "Pie",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="piechart" size={size} color={color} />;
          },
        }}
      />

      {/* <Tab.Screen name='Add' component={Post} options={{
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
      }} /> */}

      <Tab.Screen
        name="MyGardrobe"
        component={MyGardrobe}
        options={{
          title: "Gradrobe",
          tabBarColor: "red",
          tabBarLabel: "Gardrobe",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="woman" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Pie",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="setting" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          title: "Pie",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="setting" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="ClothByCategory"
        component={ClothByCategory}
        options={{
          title: "",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            position: "absolute",
          },
        }}
      />

      <Tab.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="FavsScreen"
        component={FavsScreen}
        options={{
          title: "Your Favs",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            position: "absolute",
          },
        }}
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  /* const [isLogged, setisLogged] = useState(false)
  let screen;
  async function retrieveData() {
    try {
      const data = await AsyncStorage.getItem('token')
      console.log(data);
      setisLogged(true)
      screen = 'OverviewScreen'
    } catch (error) {
    }
  }

  useEffect(() => {
    retrieveData()
  }, []) */

  return (
    <Stack.Navigator initialRouteName="OnboardingScreen">
      <Stack.Screen
        name="SplashScreen"
        component={ASplashScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Puanlama"
        component={Puanlama}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SeeResults"
        component={SeeResults}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="OnboardingScreen"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OverviewScreen"
        component={BottomTabScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ShowNews"
        component={ShowNews}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WellDoneScreen"
        component={WellDoneScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HowMany"
        component={HowMany}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClothName"
        component={ClothName}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Questions"
        component={EfeQuestion}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <BottomTabScreen />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingtoLogin, setIsTryingtoLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function getToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        //console.log('evvrybody lets go');
        authCtx.authenticate(storedToken);
        //const email = await getEmail(storedToken)
        /* authCtx.setEmail(email)
        const eemail = await AsyncStorage.getItem('email') */
        console.log("----------AsyncStoragaEmail------------");
        //console.log(eemail);
      }
      setTimeout(() => {
        setIsTryingtoLogin(false);
      }, 1800);
    }
    getToken();
  }, []);

  if (isTryingtoLogin) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: 50,
        }}
      >
        <Image
          source={require("./images/apple-icon-180x180.png")}
          style={{
            width: 150,
            height: 150,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 24,
            color: "#67b6d2",
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Minirobe
        </Text>
      </View>
    );
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Provider store={store}>
          <Root />
        </Provider>
      </AuthContextProvider>
    </>
  );
}
