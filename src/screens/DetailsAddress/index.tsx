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
import { ModalView } from "../../components/ModalView";
import { MiddleButton } from "../../components/MiddleButton";

export function DetailsAddress() {
    const [statusModal, setStatusModal] = useState(false);
    const navigation = useNavigation();

    async function handleGoBack() {
        navigation.goBack();
    }

    function handleOpenModal() {
        console.log('Clicou');
        setStatusModal(true)
    }
    function handleCloseModal() {
        setStatusModal(false)
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
                    onPress={handleOpenModal}
                />
                <ModalView closeModal={handleCloseModal} visible={statusModal}>
                    <Text style={styles.textTitleModal}>
                        Deseja mesmo deletar esse endereço?
                    </Text>
                    <View style={styles.groupButton}>
                        <MiddleButton
                            title="Sim"
                        />
                        <MiddleButton
                            title="Não"
                            isFilled={true}
                        />
                    </View>

                </ModalView>

            </View>
        </Background >
    );
}
