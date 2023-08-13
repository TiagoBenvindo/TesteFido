import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";
import { styles } from "./styles";

type Props = RectButtonProps & {
    title: string;
    colorText: string;
}

export function LongButtonOutline({ title, colorText, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={[styles.title, { color: colorText }]}>
                {title}
            </Text>
        </RectButton>
    )
}