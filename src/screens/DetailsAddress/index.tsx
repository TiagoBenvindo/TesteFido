import React, { useState } from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { LongButton } from "../../components/LongButton";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";

export function DetailsAddress() {
    const navigation = useNavigation();

    async function handleGoBack() {
        navigation.goBack();
    }

    async function edit() {

    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.title}>
                    <BorderlessButton onPress={handleGoBack}>
                        <Icon
                            name="arrow-left"
                            size={24}
                            color={theme.colors.gray400}
                        />
                    </BorderlessButton>
                    <Text style={styles.textTitle}>
                        Endereço encontrado
                    </Text>
                </View>
                <View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Usuário</Text>
                    </View>
                    <View style={[styles.inputGroup, { marginBottom: 200 }]}>
                        <Text style={styles.label}>Senha</Text>
                    </View>
                    <LongButton
                        title='Entrar'
                        onPress={edit}
                    />

                </View>
            </View>
        </Background>
    );
}
