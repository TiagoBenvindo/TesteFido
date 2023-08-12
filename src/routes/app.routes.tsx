import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from "../global/styles/theme";
import { SingIn } from "../screens/SingIn";

export type RootStackParamsList = {
    SingIn: undefined;
    Home: { userId: string };
    AddAccount: undefined;
    ChooseCard: undefined;
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
        </Navigator>
    )
}