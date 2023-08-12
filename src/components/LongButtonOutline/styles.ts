import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 56,
        backgroundColor: theme.colors.white100,
        borderRadius: 8,
        borderWidth: 4,
        overflow: "hidden",
        borderColor: theme.colors.purple200,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        color: theme.colors.purple200,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: theme.fonts.text600,
        letterSpacing: 0.5,
    },
})