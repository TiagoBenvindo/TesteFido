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
        height: 33,
        width: "100%",
        flexDirection: "row",
        marginBottom: 16,
    },
    textTitle: {
        fontFamily: theme.fonts.text500,
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
    rowGroup: {
        width: "100%",
    },
    inputGroup: {
        width: "100%",
        marginBottom: 24,
    },
    inputLongGroup: {
        width: "65%",
        marginBottom: 24,
        justifyContent: 'flex-start',
    },
    inputShortGroup: {
        width: "25%"
    },
    inputMask: {
        width: "100%",
        height: 52,
        backgroundColor: theme.colors.white100,
        color: theme.colors.gray400,
        fontFamily: theme.fonts.text400,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.white100,
        fontSize: 13,
        padding: 16,
    }
})