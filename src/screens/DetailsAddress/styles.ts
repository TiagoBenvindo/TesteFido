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
        height: 29,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 16,
    },
    textTitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 24,
        color: theme.colors.purple200,
    },
    textTitleBold: {
        fontFamily: theme.fonts.text700,
        color: theme.colors.purple200,
        fontSize: 24,
    },
    subTitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.gray400,
        marginBottom: 100,
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
        marginBottom: 25,
    }
})