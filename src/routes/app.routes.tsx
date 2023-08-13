import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from "../global/styles/theme";
import { SingIn } from "../screens/SingIn";
import { Home } from "../screens/Home";
import { DetailsAddress } from "../screens/DetailsAddress";

export type RootStackParamsList = {
    SingIn: undefined;
    Home: undefined;
    DetailsAddress: undefined;
}

const { Navigator, Screen } = createStackNavigator<RootStackParamsList>();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.colors.whiteDefault
                }
            }}
        >

            <Screen
                name='SingIn'
                component={SingIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="DetailsAddress"
                component={DetailsAddress}
            />
        </Navigator>
    )
}