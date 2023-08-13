import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    title: {
        color: theme.colors.gray500,
        fontSize: 14,
        textAlign: 'left',
        fontFamily: theme.fonts.text500,
    },
    subTitle: {
        color: theme.colors.gray400,
        fontSize: 14,
        textAlign: 'left',
        fontFamily: theme.fonts.text500,
    }
})