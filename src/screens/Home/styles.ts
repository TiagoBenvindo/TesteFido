import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 145,
        paddingHorizontal: 20,
    },
    title: {
        width: "100%",
        flexDirection: "row",
    },
    textTitle: {
        fontFamily: theme.fonts.text700,
        fontSize: 24,
        color: theme.colors.purple200,
    },
    textTitleBold: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.purple200,
        fontSize: 24,
    },


    label: {
        fontSize: 16,
        fontFamily: theme.fonts.text500,
        color: theme.colors.gray500,
        marginBottom: 4,
    },
    textButton: {
        marginTop: 12,
        fontSize: 15,
        fontFamily: theme.fonts.text700,
        color: theme.colors.gray500,
        textAlign: 'center',
    },
    inputGroup: {
        marginTop: 150,
        marginBottom: 175,
    }
})