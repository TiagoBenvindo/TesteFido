import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = RectButtonProps & {
    name: string;
    response: string;
}

export function DateLine({ name, response, ...rest }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>{response}</Text>
        </View>
    )
}