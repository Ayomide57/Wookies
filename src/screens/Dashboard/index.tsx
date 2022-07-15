import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Dashboard: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                labelStyle: {
                    fontSize: 14,
                    paddingRight: 0,
                }
            }}
        >

        </Tab.Navigator>
    );
}