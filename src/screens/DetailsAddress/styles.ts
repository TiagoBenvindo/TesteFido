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
    },
    textTitleModal: {
        paddingTop: 40,
        textAlign: "center",
        fontFamily: theme.fonts.text500,
        fontSize: 24,
        color: theme.colors.purple200,
        paddingHorizontal: 24,
    },
    groupButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 48,
    }
})