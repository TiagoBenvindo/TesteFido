import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
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
});