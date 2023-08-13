import React, { useState } from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { LongButton } from "../../components/LongButton";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import { LongButtonOutline } from "../../components/LongButtonOutline";
import { DateLine } from "../../components/DateLine";
import { ListDivider } from "../../components/ListDivider";

export function DetailsAddress() {
    const navigation = useNavigation();

    async function handleGoBack() {
        navigation.goBack();
    }

    async function edit() {
        navigation.navigate("EditAddress");
    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.title}>
                    <BorderlessButton onPress={handleGoBack} style={{ marginRight: 16 }}>
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

                <DateLine
                    name="CPF"
                    response="64.077-850"
                />
                <ListDivider />
                <DateLine
                    name="UF"
                    response="64.077-850"
                />
                <ListDivider />
                <DateLine
                    name="Cidade"
                    response="64.077-850"
                />
                <ListDivider />
                <DateLine
                    name="Bairro"
                    response="64.077-850"
                />
                <ListDivider />
                <DateLine
                    name="Logradouro"
                    response="64.077-850"
                />
                <ListDivider />
                <DateLine
                    name="Número"
                    response="64.077-850"
                />
                <ListDivider />
                <View style={{ marginTop: 120, marginBottom: 30 }}>
                    <LongButtonOutline
                        colorText={theme.colors.purple200}
                        title="Editar"
                        onPress={edit}
                    />
                </View>
                <LongButtonOutline
                    colorText={theme.colors.red}
                    title="Deletar"
                />

            </View>
        </Background >
    );
}
