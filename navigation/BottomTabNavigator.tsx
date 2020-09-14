import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MainScreen from '../screens/MainScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {BottomTabParamList, TabOneParamList, TabThreeParamList, TabTwoParamList} from '../types';
import WalletScreen from "../screens/WalletScreen";
import ShopScreen from "../screens/ShopScreen";
import SfingksScreen from "../screens/SfingksScreen";
import QuestDetailsScreen from "../screens/QuestDetailsScreen";
import ShopItemDetailsScreen from "../screens/ShopItemDetailsScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: Colors.cpRed,
          inactiveTintColor: '#fff',
          activeBackgroundColor: '#000',
          inactiveBackgroundColor: '#000'
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} icon={AntDesign} />
        }}
      />
      <BottomTab.Screen
        name="Quests"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="play" color={color} icon={AntDesign} />,
        }}
      />
        <BottomTab.Screen
            name="Rewards"
            component={TabThreeNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="present" color={color} icon={SimpleLineIcons} />,
            }}
        />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string; icon: any }) {
    const Icon = props.icon;
  return <Icon size={30} style={{ marginBottom: -3 }} name={props.iconName} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{}}>
      <TabOneStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
            headerTransparent: true,
            headerTitle: null
        }}
      />
      <TabOneStack.Screen
          name="WalletScreen"
          component={WalletScreen}
          options={{ headerTitle: 'Wallet',
              headerTransparent: true,
              headerTintColor: '#000'
          }}
      />
        <TabOneStack.Screen
            name="SfingksScreen"
            component={SfingksScreen}
            options={{ headerTitle: null,
                headerTransparent: true,
                headerTintColor: '#000'
            }}
        />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Quests',
            headerTransparent: true,
            headerTintColor: '#000'
        }}
      />
        <TabTwoStack.Screen
            name="QuestDetailsScreen"
            component={QuestDetailsScreen}
            options={{ headerTitle: null,
                headerTransparent: true,
                headerTintColor: '#000'
            }}
        />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
    return (
        <TabThreeStack.Navigator>
            <TabThreeStack.Screen
                name="ShopScreen"
                component={ShopScreen}
                options={{ headerTitle: 'Oasis',
                    headerTransparent: true,
                    headerTintColor: '#000'
                }}
            />
            <TabThreeStack.Screen
                name="WalletScreen"
                component={WalletScreen}
                options={{ headerTitle: 'Wallet',
                    headerTransparent: true,
                    headerTintColor: '#000'
                }}
            />
            <TabThreeStack.Screen
                name="ShopItemDetailsScreen"
                component={ShopItemDetailsScreen}
                options={{ headerTitle: 'Details',
                    headerTransparent: true,
                    headerTintColor: '#000'
                }}
            />
        </TabThreeStack.Navigator>
    );
}
